const express = require("express"); // CommonJS
const app = express();

// middleware
app.use(express.json());

const messages = [
  { id: 1, message: "Mensaje 1", sender: "Germán Escobar" },
  { id: 2, message: "Mensaje 2", sender: "Pedro Perez" },
  { id: 3, message: "Mensaje 3", sender: "María Gomez" },
];

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const message = { id: messages.length + 1, message: req.body.message, sender: req.body.sender };
  messages.push(message);
  res.json(message);
});

app.listen(3000);
