const exp=require('express')
const Productapp=exp.Router()
const expressAsyncHandler=require('express-async-handler');
Productapp.use(exp.json())
    


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

  Productapp.use(exp.urlencoded());

Productapp.get('/get-cards',expressAsyncHandler(async(request,response)=>{

   let productCollectionObject=request.app.get('productCollectionObject')
   let product= await productCollectionObject.find().toArray()

    response.send({message:'This is user info',payload: product })
}))

Productapp.get('/search-product/:dataname',expressAsyncHandler(async(request,response)=>{
  let searchname = request.params.dataname ;
  let productCollectionObject=request.app.get('productCollectionObject')
  let product= await productCollectionObject.find({heading:searchname}).toArray()
    if(product.length!==0){
   response.send({message:'Search found',payload: product })
  }
  else{
    response.send({message:'Search Not found'})
  }
}))



Productapp.post('/create-card',upload.single("photo"),expressAsyncHandler(async(request,response)=>{

    let newUser=JSON.parse(request.body.userObj)
    let productCollectionObject=request.app.get('productCollectionObject');
    newUser.pic=request.file.path;
    let result= await productCollectionObject.insertOne(newUser)
    response.send({message:'New is card is updated'})
}))

Productapp.put('/update-card',upload.single("photo"),expressAsyncHandler(async(request,response)=>{
    let productBody=JSON.parse(request.body.userObj);
    let productCollectionObject=request.app.get('productCollectionObject');
    productBody.pic=request.file.path;
   let result=await productCollectionObject.updateOne({heading:{$eq:productBody.heading}},{$set:{...productBody}});
    response.send({message:'Product is updated'})

}))

Productapp.delete('/delete-card/:Name',expressAsyncHandler(async(request,response)=>{
    let deleteName=request.params.Name;
    let productCollectionObject=request.app.get('productCollectionObject')
     let result=await productCollectionObject.deleteOne({heading:deleteName});
    response.send({message:"Product is deleted",payload: deleteName})

}))

module.exports=Productapp