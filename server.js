const express = require('express');
const path = require('path');


const codercat = express();
const port = 8081;

const subApps = [
  {
    name: 'vertexCache',
    entry: 'repos/vertex-texture-cache/public/html/index.html',
    public: ['repos/vertex-texture-cache/public'],
    route: '/vertex-cache',
  },
  {
    name: 'auracariaDreams',
    entry: 'repos/auracaria-dreams/public/html/mary.html',
    public: ['repos/auracaria-dreams/public'],
    route: '/auracaria-dreams',
  },
  {
    name: 'genderGraph',
    entry: 'repos/gender-graph/public/html/index.html',
    public: ['repos/gender-graph/public'],
    route: '/gendergraph',
  },
  {
    name: 'photoToVideo',
    entry: 'repos/360-photo-to-video/public/html/index.html',
    public: ['repos/360-photo-to-video/public'],
    route: '/360-photo-to-video',
  },
  {
    name: 'tsp3dArt',
    entry: 'repos/tsp-3D-art/public/html/final.html',
    public: ['repos/tsp-3D-art/public'],
    route: '/tsp-3D-art',
  },
  {
    name: 'GPUParticles',
    entry: 'repos/AR-GPU-Particles/build/index.html',
    public: ['repos/AR-GPU-Particles/build'],
    route: '/ar-gpu-particles',
  },
];

if (process.env.DEV) {
  codercat.use(express.static('public'));
  codercat.use(express.static('public/html'));
} else {
  codercat.use(express.static('build'));
  codercat.use(express.static('build/html'));
}

// Frontend routes for react router
codercat.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
codercat.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
codercat.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

subApps.forEach((app) => {
  const expressApp = express();

  for (let i = 0; i < app.public.length; i += 1) {
    expressApp.use(express.static(app.public[i]));
  }

  expressApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, app.entry));
  });

  codercat.use(app.route, expressApp);
});

// Start server
codercat.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
