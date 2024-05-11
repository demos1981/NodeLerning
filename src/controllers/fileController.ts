import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "file", "example.txt");
const filePathToNew = path.join(__dirname, "file", "output.txt");

export const readFileStream = async (req: Request, res: Response) => {
  try {
    const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
    readStream.on("data", (chunk) => {
      console.log("Received chunk:", chunk);
    });
    readStream.on("end", () => {
      console.log("Read stream ended");
    });
    readStream.on("error", (err) => {
      console.error("Error reading file:", err);
    });
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const writeFileStream = async (req: Request, res: Response) => {
  try {
    const writeStream = fs.createWriteStream(filePathToNew, {
      encoding: "utf8",
    });
    const dataToWrite = "Hello, world!";
    writeStream.write(dataToWrite);
    writeStream.end();
    writeStream.on("finish", () => {
      console.log("Data be writen to the file");
    });
    writeStream.on("error", (err) => {
      console.error("Error writing to file", err);
    });
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const uploadPhoto = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
