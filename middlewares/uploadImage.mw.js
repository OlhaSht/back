const path = require("path");
const multer = require("multer");

// const upload = multer({dest: 'public/images'});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../pablic/images'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-' +file.originalname)
    }
  })
  
  const upload = multer({ storage });

module.exports = upload.single('imgPath');