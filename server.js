const express = require('express');
const path = require('path');
const app = express();


const port = 8081;

app.use(express.static('build'));
app.use(express.static('build/html'));

// Public files for nested repositories
app.use(express.static(path.join(__dirname, 'repos', 'gender-graph', 'public')));
app.use(express.static(path.join(__dirname, 'repos', 'vertex-texture-cache', 'public')));
app.use(express.static(path.join(__dirname, 'repos', '360-photo-to-video', 'public')));

// Routes for nested repositories
app.get('/vertex-cache', (req, res) => {
  res.sendFile(path.join(__dirname, 'repos', 'vertex-texture-cache', 'public', 'html', 'index.html'));
})

app.get('/360-photo-to-video', (req, res) => {
  res.sendFile(path.join(__dirname, 'repos', '360-photo-to-video', 'public', 'html', 'index.html'));
})

app.get('/gendergraph', (req, res) => {
  res.sendFile(path.join(__dirname, 'repos', 'gender-graph', 'public', 'html', 'index.html'));
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

