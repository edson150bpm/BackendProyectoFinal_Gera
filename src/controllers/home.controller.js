//FUNCIONES QUE SE CONECTAN A LA BASE DE DATOS
const db = require ("../bd")

const rutaHome= (req, res) => {
    db.conexion.query('SELECT * FROM cursos', (error, result) =>{
       if (error){
        console.error("Error", error);
       }else{
        res.status(200).json({mensaje:"Cursos encontrados", data: result}) 
       }
    })

}
const rutaLogin= (req, res) => {
    const {correo, password}=req.body
    db.conexion.query(`SELECT * FROM usuarios WHERE correo = "${correo}" AND password = "${password}"`, (error, result) =>{
        if(error){
            console.error("Error",error);
        }else{
            res.status(200).json({mensaje:"Datos obtenidos", data: result})
        }
    })
    
}
const rutaRegister= (req, res) => {
    res.status(200).json({mensaje:"Mensaje exitoso"})
}
const rutaRegisterCurso= (req, res) => {
    res.status(200).json({mensaje:"Mensaje exitoso"})
}
const rutaGetRegister = (req, res) => {
    res.status(200).json({mensaje:"Mensaje exitoso"})
}
const rutaGetTema = (req, res) => {
    res.status(200).json({mensaje: "Mensaje exitoso"})
}
const rutaPostAddTem = (res, req) => {
    res.status(200).json({mensaje: "Mensaje exitoso"})
}
const rutaPutEditTem = (req, res) =>{
    res.status(200).json({mensaje: "Mensaje exitoso"})
}
const rutaDeleteTema = (req, res) => {
    res.status(200).json({mensaje: "Mensaje exitoso"})
}

module.exports = {rutaHome, rutaLogin, rutaRegister, rutaRegisterCurso, rutaGetRegister, rutaGetTema, rutaPostAddTem, rutaPutEditTem, rutaDeleteTema}//exportamos un objeto
