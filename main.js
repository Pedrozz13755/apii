_path = process.cwd()

var express = require("express");
var router = express. Router();
var fs = require("fs");


router.get("/", (req,res) => {
res.sendFile (__dirname + "/views/docs.html");
})

// aqui a rota de foto
router.get('/foto', async(req, res) => {
    res.json({
        'link': 'https://telegra.ph/file/7edc4e36d4e9dc331cb55.jpg'
        
   })
  })
  
router.get('/foto2', async(req, res) => {
    res.json({
        'link': 'https://telegra.ph/file/b37cfea3000077d770eb7.jpg'
        
   })
  })  
module.exports = router
