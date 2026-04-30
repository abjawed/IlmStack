# 🎧 Audio to Notes Pipeline (Windows 11)

## 🎯 Goal
Convert any video (played in browser like Firefox) into **structured notes** using:
- System audio recording
- MP3 conversion
- AI transcription

---

# 🧩 1. Install Required Tools

## 🔹 1.1 Install Audacity
Download: https://www.audacityteam.org/download/windows/

### Install:
- Run installer
- Keep default settings

---

## 🔹 1.2 Install FFmpeg
Download: https://www.gyan.dev/ffmpeg/builds/

Choose:
- **Release Full Build (ZIP)**

### Setup:

1. Extract to:
```

C:\ffmpeg

```

2. Add to PATH:
- Search: **Environment Variables**
- Edit **System Variables → Path**
- Add:
```

C:\ffmpeg\bin

```

### Verify:
```

ffmpeg -version

```

---

## 🔹 1.3 Install Whisper

```

pip install openai-whisper

```

Verify:
```

whisper --help

```

---

# 🎙️ 2. Record System Audio (Browser Video)

## Steps in Audacity:

1. Open Audacity  
2. Enable **Device Toolbar**:
   - View → Toolbars → Device Toolbar  

3. Set:

```

Audio Host → Windows WASAPI
Recording Device → Speakers (loopback)
Channels → 2 (Stereo)

```

4. Click **Record ⏺**
5. Play video in Firefox
6. Stop recording

👉 You should see waveform (audio captured)

---

# 💾 3. Export Recording as MP3

1. File → Export → Export as MP3  
2. Choose quality (Standard / 192 kbps)  
3. Save as:

```

output.mp3

```

---

# 🧠 4. Convert Audio → Text (Transcription)

Navigate to folder:

```

cd C:\Users\ABC\Documents\Audacity

```

Run Whisper:

```

whisper output.mp3 --model base --language en

```

---

# 📄 Output Files

```

output.txt   → Full transcript
output.srt   → Subtitles with timestamps
output.vtt   → Web subtitles

```

👉 Open `output.txt` for your text

---

# ⚡ 5. Improve Accuracy (Optional)

```

whisper output.mp3 --model medium --language en

```

| Model  | Speed | Accuracy |
|--------|------|---------|
| base   | Fast | Good |
| medium | Medium | Better |
| large  | Slow | Best |

---

# 📝 6. Convert Transcript → Notes

Paste `output.txt` into ChatGPT and ask:
- Convert into clean notes
- Create bullet points
- Summarize with headings

---

# 🔥 Recommended Workflow

```

1. Record audio (Audacity)
2. Export → MP3
3. Run Whisper
4. Open .txt
5. Convert to notes

```

---

# ⚠️ Common Issues & Fixes

## ❌ FileNotFoundError
Cause: FFmpeg not installed  
Fix: Install FFmpeg + add to PATH

---

## ❌ No “loopback” option
- Ensure Audio Host = WASAPI  
- Select correct output device  

---

## ❌ No waveform
- Make sure video is playing  
- Check correct device  

---

## ⚠️ FP16 Warning
```

FP16 is not supported on CPU

```
👉 Ignore (normal)

---


# 🚀 Method 2: Intelligent Notes Generator (Fully Automated)

## 🎯 Overview
This method automates the entire pipeline:

- 🎧 Transcription (Whisper)
- 🧹 Cleaning text
- 🧠 Extracting topics
- 📌 Generating structured notes
- ⏱️ Adding timestamp summary
- 📄 Exporting `.md` notes automatically

👉 No manual copy-paste required

---

## 🧰 Required Setup

### 🔹 Python Requirements

Uses built-in modules from :contentReference[oaicite:0]{index=0}:

- `os`
- `subprocess`
- `re`
- `collections`

👉 No additional installation required for these

---

### 🔹 External Dependencies

#### 1. Whisper
```bash
pip install openai-whisper
````

#### 2. FFmpeg (Required by Whisper)

```bash
ffmpeg -version
```

---

## 📁 Folder Structure

```text
AudioNotesProject/
│
├── intelligent_notes.py
│
├── input_audio/
│   ├── video1.mp3
│   ├── video2.mp3
│
└── output_notes/   (auto-created)
```

---

## ⚠️ Path Configuration (IMPORTANT)

Update these paths inside the script:

```python
INPUT_FOLDER = r"C:\Users\Jawed\Documents\Audacity\AudioNotesProject\input_audio"
OUTPUT_FOLDER = r"C:\Users\Jawed\Documents\Audacity\AudioNotesProject\input_audio\output_notes"
```

---

## 📄 Script: `intelligent_notes.py`

```python
import os
import subprocess
import re
from collections import Counter

INPUT_FOLDER = r"C:\Users\Jawed\Documents\Audacity\AudioNotesProject\input_audio"
OUTPUT_FOLDER = r"C:\Users\Jawed\Documents\Audacity\AudioNotesProject\input_audio\output_notes"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# ----------------------------
# STEP 1: Run Whisper
# ----------------------------
def run_whisper(file):
    print(f"🎧 Transcribing: {file}")
    subprocess.run(f'whisper "{file}" --model base --language en', shell=True)

# ----------------------------
# STEP 2: Clean transcript
# ----------------------------
def clean_text(text):
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# ----------------------------
# STEP 3: Split into sentences
# ----------------------------
def split_sentences(text):
    sentences = re.split(r'(?<=[.!?]) +', text)
    return [s.strip() for s in sentences if len(s.split()) > 5]

# ----------------------------
# STEP 4: Extract keywords (basic NLP)
# ----------------------------
def extract_keywords(text, top_n=8):
    words = re.findall(r'\b[a-zA-Z]{4,}\b', text.lower())
    
    stopwords = set([
        "this","that","with","have","from","there","their","about",
        "would","could","should","which","when","what","your","they",
        "them","then","than","into","only","also","more","some","such"
    ])
    
    filtered = [w for w in words if w not in stopwords]
    freq = Counter(filtered)
    
    return [word for word, _ in freq.most_common(top_n)]

# ----------------------------
# STEP 5: Generate sections
# ----------------------------
def generate_sections(sentences):
    sections = []
    chunk_size = max(5, len(sentences)//5)

    for i in range(0, len(sentences), chunk_size):
        chunk = sentences[i:i+chunk_size]
        section_text = " ".join(chunk)
        keywords = extract_keywords(section_text, top_n=3)

        title = " ".join(keywords).title() if keywords else "Key Concepts"
        bullet_points = chunk[:5]

        sections.append((title, bullet_points))

    return sections

# ----------------------------
# STEP 6: Parse timestamps
# ----------------------------
def parse_srt(srt_file):
    notes = []
    with open(srt_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for i in range(len(lines)):
        if "-->" in lines[i]:
            ts = lines[i].split("-->")[0].strip()
            text = lines[i+1].strip()
            notes.append((ts, text))

    return notes

# ----------------------------
# STEP 7: Generate Markdown
# ----------------------------
def generate_markdown(name, transcript, sections, timestamps):
    md_path = os.path.join(OUTPUT_FOLDER, f"{name}.md")

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"# 🎧 Intelligent Notes: {name}\n\n")

        # Summary
        f.write("## 🧠 Key Topics\n\n")
        topics = extract_keywords(transcript, top_n=10)
        f.write(", ".join(topics).title() + "\n\n")

        # Sections
        f.write("## 📌 Structured Notes\n\n")
        for title, bullets in sections:
            f.write(f"### {title}\n")
            for b in bullets:
                f.write(f"- {b}\n")
            f.write("\n")

        # Timestamp summary
        f.write("## ⏱️ Timeline Summary\n\n")
        for ts, text in timestamps[:20]:
            f.write(f"- **{ts}** → {text}\n")

        # Full transcript
        f.write("\n## 📄 Full Transcript\n\n")
        f.write(transcript)

    print(f"✅ Notes generated: {md_path}")

# ----------------------------
# MAIN PIPELINE
# ----------------------------
def process_file(file_path):
    name = os.path.splitext(os.path.basename(file_path))[0]

    run_whisper(file_path)

    txt_file = f"{name}.txt"
    srt_file = f"{name}.srt"

    with open(txt_file, "r", encoding="utf-8") as f:
        raw_text = f.read()

    transcript = clean_text(raw_text)
    sentences = split_sentences(transcript)
    sections = generate_sections(sentences)
    timestamps = parse_srt(srt_file)

    generate_markdown(name, transcript, sections, timestamps)

def main():
    files = [f for f in os.listdir(INPUT_FOLDER) if f.endswith(".mp3")]

    if not files:
        print("❌ No MP3 files found in input_audio folder")
        return

    for file in files:
        process_file(os.path.join(INPUT_FOLDER, file))

    print("\n🎉 All files converted into intelligent notes!")

if __name__ == "__main__":
    main()
```

---

## ▶️ How to Run

```bash
cd C:\Users\Jawed\Documents\Audacity\AudioNotesProject
python intelligent_notes.py
```

---

## 📄 Output

For each `.mp3`:

* `video.txt` → transcript
* `video.srt` → timestamps
* `output_notes/video.md` → ✅ final structured notes

---

## 🔥 Features

* Batch processing
* Markdown notes generation
* Topic extraction
* Bullet summaries
* Timeline summary

---

## ⚠️ Notes

* Ensure script runs from project folder
* Whisper outputs `.txt` and `.srt` in same working directory
* Avoid special characters in filenames

---

## 🚀 Workflow

```text
1. Record audio
2. Export MP3
3. Move → input_audio
4. Run script
5. Get notes → output_notes
```

```