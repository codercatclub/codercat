const express = require('express');
const path = require('path');


const codercat = express();
const port = 8081;

const subApps = [
  {
    name: 'vertexCacheAframe',
    entry: 'projects/vertex-cache-aframe/dist/index.html',
    public: ['projects/vertex-cache-aframe/dist'],
    route: '/vertex-cache-aframe',
  },
  {
    name: 'threeBody',
    entry: 'projects/three-body/dist/index.html',
    public: ['projects/three-body/dist'],
    route: '/three-body',
  },
  {
    name: 'monsterOrFriend',
    entry: 'projects/monster-or-friend/dist/index.html',
    public: ['projects/monster-or-friend/dist'],
    route: '/monster-or-friend',
  },
  {
    name: 'aiAnimation',
    entry: 'projects/ai-animation/build/index.html',
    public: ['projects/ai-animation/build'],
    route: '/ai-animation',
  },
  {
    name: 'relaxationRoom',
    entry: 'projects/relaxation-room/build/index.html',
    public: ['projects/relaxation-room/build'],
    route: '/relaxation-room',
  },
  {
    name: 'growYourBot',
    entry: 'projects/grow-your-own-bot/build/index.html',
    public: ['projects/grow-your-own-bot/build'],
    route: '/grow-your-own-bot',
  },
  {
    name: 'vertexCache',
    entry: 'projects/vertex-texture-cache/public/html/index.html',
    public: ['projects/vertex-texture-cache/public'],
    route: '/vertex-cache',
  },
  {
    name: 'auracariaDreams',
    entry: 'projects/auracaria-dreams/public/html/mary.html',
    public: ['projects/auracaria-dreams/public'],
    route: '/auracaria-dreams',
  },
  {
    name: 'genderGraph',
    entry: 'projects/gender-graph/public/html/index.html',
    public: ['projects/gender-graph/public'],
    route: '/gendergraph',
  },
  {
    name: 'photoToVideo',
    entry: 'projects/360-photo-to-video/public/html/index.html',
    public: ['projects/360-photo-to-video/public'],
    route: '/360-photo-to-video',
  },
  {
    name: 'tsp3dArt',
    entry: 'projects/tsp-3D-art/public/html/final.html',
    public: ['projects/tsp-3D-art/public'],
    route: '/tsp-3D-art',
  },
  {
    name: 'GPUParticles',
    entry: 'projects/AR-GPU-Particles/build/index.html',
    public: ['projects/AR-GPU-Particles/build'],
    route: '/ar-gpu-particles',
  },
  {
    name: 'galacticGypsy',
    entry: 'projects/galactic-gypsy/build/index.html',
    public: ['projects/galactic-gypsy/build'],
    route: '/galactic-gypsy',
  },
  {
    name: 'proceduralIKCrawler',
    entry: 'projects/procedural-ik-crawler/build/index.html',
    public: ['projects/procedural-ik-crawler/build'],
    route: '/procedural-ik-crawler',
  },
  {
    name: 'neurojam',
    entry: 'projects/neurojam-ui/out/index.html',
    public: ['projects/neurojam-ui/out'],
    route: '/neurojam',
  },
  {
    name: 'test',
    entry: 'projects/monster-or-friend/dist/index.html',
    public: ['projects/monster-or-friend-test/dist'],
    route: '/test',
  },
  {
    name: 'flux',
    entry: 'projects/flux/out/index.html',
    public: ['projects/flux/out'],
    route: '/flux',
  },
  {
    name: 'ma',
    entry: 'projects/ma/dist/index.html',
    public: ['projects/ma/dist'],
    route: '/ma',
  },
  {
    name: 'melt',
    entry: 'projects/melt/dist/index.html',
    public: ['projects/melt/dist'],
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
