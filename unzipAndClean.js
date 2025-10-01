import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import AdmZip from "adm-zip";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDir = path.resolve(__dirname, "..");

function extractZipsInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    if (fs.statSync(filePath).isFile() && file.endsWith(".zip")) {
      try {
        console.log(`Extracting: ${filePath}`);
        const zip = new AdmZip(filePath);

        zip.extractAllTo(folderPath, true);

        fs.unlinkSync(filePath);
        console.log(`Extracted and deleted: ${file}`);
      } catch (err) {
        console.error(
          `\x1b[31m Error extracting ${file}: ${err.message}\x1b[0m`
        );
      }
    }
  });
}

function walkFolders(baseDir) {
  const subdirs = fs.readdirSync(baseDir);

  subdirs.forEach((subdir) => {
    const fullPath = path.join(baseDir, subdir);

    if (fs.statSync(fullPath).isDirectory() && subdir !== "unzipAndClean") {
      extractZipsInFolder(fullPath);
    }
  });

  console.log("Done!");
}

walkFolders(parentDir);
