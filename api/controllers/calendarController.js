import VisitCounter from '../models/VisitCounter.js';

export const incrementAndGetPage = async (req, res) => {
  try {
    const result = await VisitCounter.findOneAndUpdate(
      { _id: 'counter' },
      { $inc: { count: 1 } },
      { new: true, upsert: true, useFindAndModify: false }
    );

    const count = result.count;
    const page = count % 2 === 0 ? 'monica' : 'angie-w';
    res.json({ page });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
};

export default {
  incrementAndGetPage
};
