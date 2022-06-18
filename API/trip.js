const exp=require('express')
const Tripapp=exp.Router()
const expressAsyncHandler=require('express-async-handler');
Tripapp.use(exp.json())
const verifyToken=require('./Middlewares/verifyToken')
    


// Cloudinary
var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME ,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });
  
  //config cloudinary storage
  const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: "Places",
        public_id: file.fieldname + "-" + Date.now(),
      };
    },
  });

  
  //configure multer
  var upload = multer({ storage: cloudinaryStorage });

  Tripapp.use(exp.urlencoded());

Tripapp.get('/get-trips/:username',expressAsyncHandler(async(request,response)=>{
  let userName=request.params.username
  let tripCollectionObject=request.app.get('tripCollectionObject');
   let product= await tripCollectionObject.find({Name:userName}).toArray();
    response.send({message:'This is user info',payload: product })
}))

Tripapp.post('/create-trip',verifyToken,expressAsyncHandler(async(request,response)=>{

    let newUser=request.body
    newUser.DateofRegister=Date.now();
    let tripCollectionObject=request.app.get('tripCollectionObject');
    let result= await tripCollectionObject.insertOne(newUser)
    response.send({message:'New Trip is Created'})
}))

Tripapp.put('/update-card',upload.single("photo"),expressAsyncHandler(async(request,response)=>{
    let productBody=JSON.parse(request.body.userObj);
    let productCollectionObject=request.app.get('productCollectionObject');
    productBody.pic=request.file.path;
   let result=await productCollectionObject.updateOne({heading:{$eq:productBody.heading}},{$set:{...productBody}});
    response.send({message:'Product is updated'})

}))


Tripapp.delete('/delete-trips/:Name/:data',expressAsyncHandler(async(request,response)=>{
    let deleteName=request.params.Name;
    let deletetrip=(+request.params.data);
    let tripCollectionObject=request.app.get('tripCollectionObject')
     let result=await tripCollectionObject.deleteOne({$and:[{Name:deleteName},{DateofRegister:deletetrip}]});
    response.send({message:"Product is deleted",payload: deletetrip})

}))

module.exports=Tripapp