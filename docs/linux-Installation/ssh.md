# SSH Server Installation on Ubuntu

## Prerequisites and Installation

Update your system packages and install OpenSSH server:

```bash
sudo apt update
sudo apt upgrade
sudo apt install openssh-server
```

## Service Management

### Check Status
```bash
sudo systemctl status ssh
```
Check the current status of the SSH service.

### Enable SSH
```bash
sudo systemctl enable ssh
```
Enable the SSH service to start automatically on system boot.

### Start SSH
```bash
sudo systemctl start ssh
```
Start the SSH service.