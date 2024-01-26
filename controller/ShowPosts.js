const Data = require('../models/model')


const showData = async (req, res) => {
    try {
        const data = await Data.find({});
        res.json(data);
      } catch (error) {
        console.error('Error fetching data in show data:', error);
        res.status(500).json({ error: 'Internal Server Error in show data' });
      }
}

module.exports = { showData }