import express from 'express';
import prodRouter from './routes/poducts.router.js'
import cartRouter from './routes/carts.router.js'


const PORT=8080;
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.use('/api/products', prodRouter)

app.use('/api/carts', cartRouter)




app.listen(PORT, ()=>{
    console.log(`El servido se encuentra en el puerto: ${PORT}`);
    
})
