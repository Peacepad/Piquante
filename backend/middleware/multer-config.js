const multer = require('multer');

const MYME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const nameLessExtension = file.originalname.split('.')[0];
        const name = nameLessExtension.split(' ').join('_');
        const extension = MYME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage}).single('image');
