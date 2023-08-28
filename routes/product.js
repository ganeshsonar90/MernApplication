
const express=require('express');
const productController=require('../controller/product');

const router=express.Router();


router.post('/',productController.create)
.get('/:id',productController.get)
.get('/',productController.getAll)
.patch('/:id',productController.update)
.put('/:id',productController.replace)
.delete('/:id',productController.delete);


exports.router=router;