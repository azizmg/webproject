const express=require('express')
const app=express();
const hbs=require('hbs');
const path=require('path')
const port= process.env.PORT || 3000;
// public static path
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
// views path
const viewpath=path.join(__dirname,'../templates/views')
const partial_path=path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(partial_path)
// routing
app.get('/',(req,res)=>{
    res.render('index')
})
// app.get('/*',(req,res)=>{
//     res.send('opps! page not found')
// })
app.get('/about',(req,res)=>{
    res.render('about')
})
// app.get('/about/*',(req,res)=>{
//     res.send('Eror 404 page not found')
// })
app.get('/weather',(req,res)=>{
    res.render('weather')
})
// app.get('/contact/*',(req,res)=>{

//     res.send('Error page not found 404')
// })
app.get('*',(req,res)=>{
    res.render('404error',{
        errormsg:'opps! Page Not Found'
    })
})

app.listen(port,'127.0.0.1',()=>{
    console.log(`http://127.0.0.1:${port}`)
   })