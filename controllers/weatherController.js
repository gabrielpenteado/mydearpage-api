const weatherService = require('../services/weatherService');

const byGeolocation = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');  // Permite qualquer origem, ou substitua por um domínio específico
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        const onloadData = await weatherService.byCoords(req);
        return res.send(onloadData);
    }
    catch (err) {
        console.log(err);
    }

}

const byCityName = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        const bycityData = await weatherService.byCity(req);
        return res.send(bycityData);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    byGeolocation,
    byCityName
};