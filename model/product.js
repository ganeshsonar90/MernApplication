const mongoose=require('mongoose');
const {Schema}=mongoose;

//scema

const addressSchema=new Schema({
name:{type:String}
});

exports.Address=mongoose.model('Address',addressSchema);

const productSchema=new Schema({
    title: {type:String,required:true,unique:true},
    address:{type:Schema.Types.ObjectId,ref:'Address'},
    description: String,
    price: Number,
    rating: {type:Number,min:[0,'wrong rating'],max:[5,'Wrong max level']},
    brand: String,
    category:String,
    phone: { type:String,
    validate:{
        validator:function(v){

            return /\d{2}-\d{4}/.test(v);
        },

message: props =>`${props.value} wrong number`
    }
},
    thumbnail: String,
    "images": [String]
});



 exports.Product=mongoose.model('Product',productSchema);
