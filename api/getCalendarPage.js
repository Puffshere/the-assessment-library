const { incrementAndGetPage } = require('../server/db');


module.exports = async (req, res) => {
  try {
    const page = await incrementAndGetPage();
    res.json({ page });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
};
