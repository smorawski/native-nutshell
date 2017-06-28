const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = [
    { id: 1, firstName: 'John', lastName: 'Travolta', job: 'actor' },
    { id: 2, firstName: 'Bob', lastName: 'Marley', job: 'singer' },
    { id: 3, firstName: 'Donald', lastName: 'Tusk', job: 'eternal evil' },
    { id: 4, firstName: 'Bill', lastName: 'Gates', job: 'businessman' },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send(JSON.stringify({ payload: users }));
});

app.post('/', function (req, res) {
    const newUser = req.body;
    users.push(Object.assign(newUser, {id: users.length + 1}));
    res.send(JSON.stringify({ payload: newUser }));
});

app.delete('/', function (req, res) {
    res.send('ok');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
