const Data = require('../models/model')


const postHandle = async (req, res) => {
  const { text } = req.body;
  const { category } = req.body;
  const file = req.file;

  try {
    let data = await new Data({text, fileUrl: file.path, category}).save()
    res.json(data)
  } catch (error) { 
      console.error('Error adding data:', error);
      res.status(500).json({ error: 'Internal Server Error addPost' });
  }
};


const showData = async (req, res) => {
    try {
        const data = await Data.find({});
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {postHandle, showData}