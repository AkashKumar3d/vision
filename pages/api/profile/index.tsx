import { MongoClient } from 'mongodb';

const handler = async (req: any, res: any) => {
  const client = await MongoClient.connect(
    'mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test'
  );
  const db = client.db('vision');
  const collection = db.collection('userProfile');
  if (req.method === 'POST') {
    try {
      let profileData = req.body;
      let data = await collection.insertOne(profileData);
      res.status(200).json({ msg: 'profile data inserted', data });
    } catch (e) {
      res.status(200).json({ msg: 'internal server error' });
    }
  }
};

export default handler;
