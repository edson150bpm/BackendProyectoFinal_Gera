//FUNCIONES QUE SE CONECTAN A LA BASE DE DATOS
const db = require("../bd")
const bycryp = require("bcrypt")

const rutaHome = (req, res) => {
    db.conexion.query('SELECT * FROM cursos', (error, result) => {
        if (error) {
            console.error("Error", error);
        } else {
            res.status(200).json({ mensaje: "Cursos encontrados", data: result })
        }
    })

}

const rutaLogin = async (req, res) => {

    try {
        console.log(req.body)
        const { correo, password } = req.body
        db.conexion.query(`SELECT * FROM usuarios WHERE correo = "${correo}"`, (error, result) => {
            if (error) {
                res.status(500).json({ mensaje: "Error de servidor", error: error })
            } else {
                console.log(result)
                if (result.length < 1) {
                    return res.status(404).json({ mensaje: "No existe, intentalo de nuevo" })
                }
                db.conexion.query(`SELECT * FROM usuarios WHERE correo = "${correo}" AND password = "${password}"`, (error2, result2) => {
                    if (error2) {
                        res.status(500).json({ mensaje: "Error de servidor", error: error2 })
                    } else {
                        if (result2.length < 1) {
                            return res.status(404).json({ mensaje: "No existe" })
                        }
                        res.status(200).json({ mensaje: "Usuario encontrado", data: result2 })

                    }

                })
            }
        })
    } catch (error) {
        res.status(500).json({ mensaje: "Error de servidor", error: error })
    }


}

const rutaRegister = (req, res) => {

    const { nombre, correo, password, rol } = req.body
    db.conexion.query(`INSERT INTO usuarios (nombre, correo, password, rol) 
                       VALUES('"${nombre}", "${correo}", "${password}", "${rol}"')`, (error, result) => {
        if (error) {
            console.error("Errror", error);
        } else {
            res.status(200).json({ mensaje: "Datos obtenidos", data: result })
        }
    })
}
const rutaRegisterCurso = (req, res) => {

    const { nombreCurso, id_usuario, descripcion_curso } = req.body;
    db.conexion.query(`INSERT INTO cursos (nombreCurso, id_usuario, descripcion_curso) 
                      VALUES('"${nombreCurso}", "${id_usuario}", "${descripcion_curso}"')`, (error, result) => {
        if (error) {
            console.error("Error", error)
        } else {
            res.status(200).json({ mensaje: "Datos obtenidos", data: result })
        }
    })
}

const rutaGetRegister = (req, res) => {

    const { id_usuario } = req.body;
    db.conexion.query(`SELECT * FROM cursos WHERE id_usuario = '${id_usuario}'`, (error, result) => {
        if (error) {
            console.error("Erros", error)
        } else {
            res.status(200).json({ mensaje: "Cursos obtenidos", data: result })
        }
    })
}

const rutaGetTema = (req, res) => {

    db.conexion.query('SELECT * FROM temas', (error, result) => {
        if (error) {
            console.error("Error", error);
        } else {
            res.status(200).json({ mensaje: "Temas encontrados", data: result })
        }
    })
}

const rutaPostAddTem = (res, req) => {

    const { nombreTema, id_curso, contenido } = req.body;
    db.conexion.query(`INSERT INTO temas (nombreTema, id_curso, contenido) 
                      VALUES('"${nombreTema}", "${id_curso}", "${contenido}"')`, (error, result) => {
        if (error) {
            console.error("Error", error)
        } else {
            res.status(200).json({ mensaje: "Datos obtenidos", data: result })
        }
    })
}

const rutaPutEditTem = (req, res) => {

    const { id_tema, nombreTema, id_curso, contenido } = req.body
    db.conexion.query(`UPDATE temas SET nombreTema = '${nombreTema}', id_curso = '${id_curso}', contenido = '${contenido}'
                       WHERE id_tema = '${id_tema}' '`, (error, result) => {
        if (condition) {
            console.error("Error", errror)
        } else {
            res.status(200).json({ mensaje: "Datos obtenidos", data: result })

        }
    })

}
const rutaDeleteTema = (req, res) => {

    const { id_tema } = req.body
    db.conexion.query(`DELETE FROM temas WHERE id_tema = '${id_tema}'`, (error, result) => {
        if (error) {
            console.error("Error", error)
        } else {
            res.status(200).json({ mensaje: "Datos obtenidos para eliminar", data: result })
        }
    })

}

module.exports = { rutaHome, rutaLogin, rutaRegister, rutaRegisterCurso, rutaGetRegister, rutaGetTema, rutaPostAddTem, rutaPutEditTem, rutaDeleteTema }//exportamos un objeto
