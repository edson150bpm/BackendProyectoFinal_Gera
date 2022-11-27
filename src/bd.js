const mysql = require("mysql");
let conexion;

try {
    conexion = mysql.createConnection({
        host:"localhost", 
        database: "bdProyectoGera",
        user: "root",
        password: ""
        
    })
} catch (error) {
    console.error("error", error);
}

module.exports = {
    conexion
}

