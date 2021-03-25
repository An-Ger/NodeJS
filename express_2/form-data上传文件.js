const path = require('path')

const express = require('express')
const multer = require('multer')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: (req, file, cb) = {
        cb(null, './uploads/')
    },
filename: (req, file, callback) => {
    cb(null, Date.now() + path.extname(file.originalname));
}
})
 
const upload = multer({
    // dest:'./uploads/'
    storage
});

app.use(upload.any());

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.end('登陆成功')
})

app.post('/upload', upload.single('file'),(req,res, next) => {
    res.end("文件上传成功")
})

app.listen(8000, () => {
    console.log('form-data解析服务器启动成功');
})