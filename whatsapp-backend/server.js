// importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';
// app-config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: '1262312',
  key: 'b4c4d55dc7442b19380a',
  secret: '37738f88799a0a317a29',
  cluster: 'us2',
  useTLS: true,
});

//middleware
app.use(express.json());
app.use(cors());

// db config
const connection_url =
  'mongodb+srv://admin:o161Fye3GBWVmmSd@cluster0.kspsl.mongodb.net/whatsappdb?retryWrites=true&w=majority';

//mongoose connection
mongoose.connect(connection_url, async (err) => {
  if (err) throw err;
  console.log('conncted to db');
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected');
  const msgCollection = db.collection('messagecontents');
  const changeStream = msgCollection.watch();
  changeStream.on('change', (change) => {
    console.log('A change has occured', change);
    if (change.operationType === 'insert') {
      const msgDetails = change.fullDocument;
      pusher.trigger('message', 'inserted', {
        name: msgDetails.name,
        message: msgDetails.message,
        received: msgDetails.received,
        timstamp: msgDetails.timstamp,
      });
    } else {
      console.log('error occured during push');
    }
  });
});
// api routes
app.get('/', (req, res) => res.status(200).send('hello world'));

//returns all messages
app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen

app.listen(port, () => console.log(`Listening on localhost:${port}`));
