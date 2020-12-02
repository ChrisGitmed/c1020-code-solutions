const express = require('./node_modules/express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

const JSONparser = express.json();

app.use('/api/notes', JSONparser);

app.get('/api/notes', (req, res) => {
  const noteArray = [];
  for (const note in data.notes) {
    noteArray.push(data.notes[note]);
  }
  res.status(200).json(noteArray);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (noteId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[noteId]) {
      res.status(200).json(data.notes[noteId]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${noteId}` });
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = {};
    newNote.id = data.nextId;
    newNote.content = req.body.content;
    data.notes[data.nextId] = newNote;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (noteId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[noteId]) {
      delete data.notes[noteId];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occured' });
        } else {
          res.status(204).json({});
        }
      });
    } else {
      res.status(404).json({ error: 'cannot find note with id' });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (noteId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    if (data.notes[noteId]) {
      data.notes[noteId].content = req.body.content;
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occured' });
        } else {
          res.status(200).json(data.notes[noteId]);
        }
      });
    } else {
      res.status(404).json({ error: 'cannot find note with id' });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000...');
});
