import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req: any, res: any) => {
  const client = await MongoClient.connect(
    'mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test'
  );
  const db = client.db('vision');
  const collection = db.collection('userProfile');
  if (req.method === 'PUT') {
    try {
      const id = req.query.id;
      const query = { _id: new ObjectId(id) };
      const body = req.body;
      const update = { $set: body };
      console.log(update);
      let updateEnrol = await collection.findOneAndUpdate(query, update, {
        // new: true,
        // runValidators: true,
        // useFindAndModify: false,
      });
      console.log(updateEnrol);

      // } else {
      res.send('user update');

      // }
      // console.log(id, enrol)
    } catch (e) {
      console.log(e);
      res.status(200).json({ msg: 'user not found' });
    }
  }
};

export default handler;
