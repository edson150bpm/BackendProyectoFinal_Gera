//FUNCIONES QUE SE CONECTAN A LA BASE DE DATOS

// function rutaHome(req, res){
//     res.status(200).json({mensaje:"Mensaje exitoso"})
// }

const rutaHome= (req, res) => {
    res.status(200).json({mensaje:"Mensaje exitoso"})
}
const rutaLogin= (req, res) => {
    res.status(200).json({mensaje:"Mensaje exitoso"})
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
