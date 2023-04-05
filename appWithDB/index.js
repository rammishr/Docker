const { Client } = require('pg');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, I am connected to the database. Go to /data to see current time');
});

app.get('/data', async (req, res) => {
  try {
const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'mydb',
  password: 'mypassword',
  port: 5432,
});

    await client.connect();
    const data = await client.query('SELECT NOW()');
    await client.end();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
