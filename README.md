# unzipAndClean

A Node.js script to automatically extract all ZIP files in subfolders and delete the originals.  
This is useful for batch extracting ZIP files in structured folders.

---

## Project Structure

example folder/
├─ 01/
│ ├─ example.zip
├─ 02/
│ ├─ another.zip
├─ unzipAndClean/
│ ├─ unzipAndClean.js
│ ├─ package.json
│ └─ node_modules/

---

## Features

- Scans all first-level subfolders (e.g., `01`, `02`, `03`) except itself (`unzipAndClean`)
- Extracts all `.zip` files into their containing folder
- Deletes ZIP files after successful extraction
- Cross-platform (Windows, macOS, Linux)
- Color-coded logs for easy reading in PowerShell:
  -  Success logs in green
  -  Error logs in red
  - ℹ Info logs in yellow

---

## Installation

1. Clone the repository or download it:

```bash
git clone https://github.com/<your-username>/unzipAndClean.git
```

2. Navigate to the project folder:

cd unzipAndClean

3. Install dependencies:

npm install

Usage:

1. Place unzipAndClean folder inside the parent folder containing your numbered subfolders (e.g., example).

2. Run the script:

node unzipAndClean.js

3. The script will scan all subfolders (except unzipAndClean itself), extract ZIP files, and delete them after extraction.

Notes:

1. Do not commit node_modules to GitHub. .gitignore handles it.

2. If using PowerShell and get warnings about execution policy:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

3. LF/CRLF warnings in Git are normal on Windows. .gitignore prevents unnecessary files from being tracked.

Example Log:

ℹ Checking folder: 01
Extracting: 01/example.zip
Extracted and deleted: example.zip
ℹ Checking folder: 02
Extracting: 02/another.zip
Error extracting another.zip: invalid zip
Done!

License:

MIT License