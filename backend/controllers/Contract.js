const getContracts = require("../models/contractModel.js");
  
// Get All Clients from DB
const getContractsDB = (req, res) => {
    getContracts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

const filterContractsByDate = (req, res) => {
    const data  = req.body;
    const desde = data[0];
    const hasta = data[1];
    const contracts = '';
    getContracts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });

    res


}

module.exports = {
    getContractsDB,
    filterContractsByDate
};