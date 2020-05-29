const express = require('express');
const path = require('path');


const codercat = express();
const port = 8081;

const subApps = [
  {
    name: 'vertexCacheAframe',
    entry: 'repos/vertex-cache-aframe/dist/index.html',
    public: ['repos/vertex-cache-aframe/dist'],
    route: '/vertex-cache-aframe',
  },
  {
    name: 'threeBody',
    entry: 'repos/three-body/dist/index.html',
    public: ['repos/three-body/dist'],
    route: '/three-body',
  },
  {
    name: 'monsterOrFriend',
    entry: 'repos/monster-or-friend/dist/index.html',
    public: ['repos/monster-or-friend/dist'],
    route: '/monster-or-friend',
  },
  {
    name: 'aiAnimation',
    entry: 'repos/ai-animation/build/index.html',
    public: ['repos/ai-animation/build'],
    route: '/ai-animation',
  },
  {
    name: 'relaxationRoom',
    entry: 'repos/relaxation-room/build/index.html',
    public: ['repos/relaxation-room/build'],
    route: '/relaxation-room',
  },
  {
    name: 'growYourBot',
    entry: 'repos/grow-your-own-bot/build/index.html',
    public: ['repos/grow-your-own-bot/build'],
    route: '/grow-your-own-bot',
  },
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
  {
    name: 'galacticGypsy',
    entry: 'repos/galactic-gypsy/build/index.html',
    public: ['repos/galactic-gypsy/build'],
    route: '/galactic-gypsy',
  },
  {
    name: 'proceduralIKCrawler',
    entry: 'repos/procedural-ik-crawler/build/index.html',
    public: ['repos/procedural-ik-crawler/build'],
    route: '/procedural-ik-crawler',
  },
  {
    name: 'neurojam',
    entry: 'repos/neurojam-ui/out/index.html',
    public: ['repos/neurojam-ui/out'],
    route: '/neurojam',
  },
  {
    name: 'test',
    entry: 'repos/monster-or-friend/dist/index.html',
    public: ['repos/monster-or-friend-test/dist'],
    route: '/test',
  },
  {
    name: 'flux',
    entry: 'repos/flux/out/index.html',
    public: ['repos/flux/out'],
    route: '/flux',
  },
  {
    name: 'ma',
    entry: 'repos/ma/dist/index.html',
    public: ['repos/ma/dist'],
    route: '/ma',
  },
  {
    name: 'melt',
    entry: 'repos/melt/dist/index.html',
    public: ['repos/melt/dist'],
    route: '/melt',
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
    expressApp.use(
      express.static(app.public[i], { extensions: ['html'] }),
    );
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
