require('dotenv').config()
const express=require('express');
const path=require('path');
const cors=require('cors');
const mongoose=require('mongoose');
const {Schema}=mongoose;
const morgan=require('morgan');
const productRouter=require('./routes/product');
//const http=require('http');






//console.log('DB Pass->'+process.env.DB_PASS);

const server=express();

server.use(morgan('default'));
server.use(express.json());
server.use(cors());
server.use(express.static(process.env.PUBLIC_DIR));
// server.use('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'build','index.html'));
// })

server.use('/products',productRouter.router);




//object datbase modelling

main().catch(error=>console.log(error));

async function main(){

    await mongoose.connect(process.env.MONGO_CLUSTER_URL);;
   // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');;
    console.log('Database connected');
}



//


console.log('DB Pass->'+process.env.DB_PASS);


// server.use((req,res,next)=>{
//     console.log('middleware');
//     next()
// });

// const auth=(req,res,next)=>{

//     console.log('Auth call');
//    if(req.body.password==='123'){
//     console.log('Password call');
// next()
//    }else{
//     res.sendStatus(401);
//    }

// };



server.listen(8080,()=>{
console.log('server started');
}
);

   

    


//const fileHtml=fs.readFileSync('index.html','utf-8')




// const server=http.createServer((req,res)=>{
//     console.log(req);
   
//    // res.setHeader('Content-Type','application/json');
//     res.setHeader('Content-Type','text/html');
//     res.end(fileHtml);

// });
// server.listen(8080);










//console.log('Boss cool->'+sum(5,5));

//const server=express();
//server.listen(8080);


