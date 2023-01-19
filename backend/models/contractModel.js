const db = require("../config/database.js");
  
// Get All Clients from DB
const getContracts = (result) => {
    db.query("SELECT * FROM clientes_contratos", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = getContracts;