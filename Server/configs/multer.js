const multer = require("multer");

const storage = multer.memoryStorage(); // store in memory as Buffer
const upload = multer({ storage });

module.exports = upload;
