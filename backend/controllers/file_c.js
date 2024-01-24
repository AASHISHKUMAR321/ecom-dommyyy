const express = require("express");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("File types allowed are .jpeg, .png, .jpg"), false);
    }
  },
});

const uploadFile = (req, res) => {
  console.log("file upload");
  // Multer middleware specific to this route
  const singleUpload = upload.single("file");

  singleUpload(req, res, (err) => {
    try {
      if (err) {
        throw new Error(err.message);
      }

      // If you reach here, the file has been successfully uploaded
      res.json({ fileName: req.file.filename });
    } catch (error) {
      // Multer will throw an error if the file type is not allowed
      res.status(400).json({ error: error.message });
    }
  });
};

const downloadFile = (req, res) => {
  const fileName = req.params.filename;
  const path = __basedir + "/uploads/";

  res.download(path + fileName, (error) => {
    if (error) {
      res.status(500).send({ meassge: "File cannot be downloaded " + error });
    }
  });
};

module.exports = {
  downloadFile,
  uploadFile,
};
