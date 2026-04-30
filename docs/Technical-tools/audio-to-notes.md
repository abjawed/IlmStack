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