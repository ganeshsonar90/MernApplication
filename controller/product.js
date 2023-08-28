const fs = require('fs');
const model = require('../model/product');

const { error } = require('console');

//const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
//const products=data.products;


const Product = model.Product;
const Address = model.Address;


exports.create = async (req, res) => {
  // console.log(req);

 // const createdProduct = new Product(req.body);

 const reqObject=req.body;
 console.log('Request Object->'+req.body);
 const addresReqObject=req.body.addres;
 console.log('Request Address->'+req.body.address.name);
 




  
  const createdProduct = new Product({
    title: reqObject.title,
    description: reqObject.description,
    price: reqObject.price,
    rating: reqObject.rating,
    brand: reqObject.brand,
    category:reqObject.category,
    phone:reqObject.phone
  });

  const addressObj = new Address({name:req.body.address.name});
  await addressObj.save();

  createdProduct.address=addressObj._id;

  try {
    const result = await createdProduct.save();
    console.log(result);
    res.status(201).json(result);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }


};


exports.get = async (req, res) => {
  // console.log(req);
  const id = req.params.id;
  //const allProducts = await Product.findById(id).populate('address');
  const allProducts = await Product.findById(id);
  res.json(allProducts);
};

exports.getAll = async (req, res) => {
  // console.log(req);
 //const allProducts = await Product.find({title:{$regex:'.*'+"3"}});
  const allProducts = await Product.find();
  res.json(allProducts);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log('input id->' + id);
  try {
    const result = await Product.findOneAndUpdate({_id:id}, req.body,{ new: true });
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }

};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findOneAndReplace({_id:id},req.body, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }

};


exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findOneAndDelete(id, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }

};


