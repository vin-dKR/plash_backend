const express = require('express')
const { postHandle } = require('../controller/AddPost')
const { showData } = require('../controller/ShowPosts')
const router = express.Router()
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });


router.get('/', showData)
router.post('/', upload.single('file'), postHandle)

module.exports = router