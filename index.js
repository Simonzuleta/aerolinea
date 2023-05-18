const express = require ('express')
const path = require ('path')
const hbs = require('hbs')
const app = express()



const puerto = 8681

//Servidor de contenido estatico
app.use(express.static('public'))


//CONFIGURACION DEL DIRECTORIO DE LAS VISTAS HBS
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//CONFIGURACION DEL DIRECTORIO QUE GUARDARA LOS ARCHIVOS PARTIALS HBS
hbs.registerPartials(__dirname + '/public/views/partials');






app.get('/',(req,res) => {
    //res.write('Home')
    //res.end()//siempre poner esto SI NO la pagina no va cargar
    res.render('disponibilidad',
    {
    titulo: 'Home',
    nombre: 'Simon Zuleta'
    
    
    
})
})

app.get('/productos',(req,res) => {
    //res.write('Home')
    //res.end()//siempre poner esto SI NO la pagina no va cargar
    res.render('productos',
    {
    home:'Home',
    titulo: 'Listado productos',
    nombre: 'Simon Zuleta',
    rol1: 'Admin'
    
    
    
})
})



app.listen(puerto,()=>{
    console.log(`escuchando por el puerto ${puerto}`)
})


