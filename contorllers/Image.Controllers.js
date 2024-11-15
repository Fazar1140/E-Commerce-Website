const path = require('path')
const fs = require('fs');

exports.getImage = async(req,res)=>{
    const cover = req.params.cover;

    if(!cover){return res.status(404).json({error:'image is not found!'})}

    const imagePath = path.join(__dirname,'..','views/images',cover)
    console.log(imagePath)
    if(!fs.existsSync(imagePath)){
        return res.status(404).json({error:'image file not found'})
    }
    res.sendFile(imagePath)
}


 