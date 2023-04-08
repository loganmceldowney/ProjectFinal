import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:Potbelly438911@cluster0.5p4yvre.mongodb.net/tinderdb?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => res.status(200).send('HELLO WORLD!!!'));

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});

app.get('/tinder/cards', (req, res) => {
  Cards.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));
