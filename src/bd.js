const mysql = require("mysql");
let conexion;

try {
    conexion = mysql.createConnection({
        host:"localhost", 
        user: "root",
        database: "bdProyectoGera",
        password: ""
        
    })
} catch (error) {
    console.error("error", error);
}

module.exports = {
    conexion
}

