# CODERCAT

This is cats collaborative that want to make world a better place by embracing technology and forward thinking.

## To run localy
```
git clone https://github.com/Kif11/codercat
cd codercat/
yarn dev
```

## To add a new project

Fist add your project to `server.js`
If you want it to show up on the main page also edit `projects` in `constants/index.js`
You will need to prepare project thumbnail and place it under `public/img`

Thumbnail requirements:

- Image size 600x600 pixel
- JPEG format
- JPEG quality is 0.8 or 80%

```
# Create new submodule
git submodule add {github_repo} {local_path}

# For updating all submodules to latest
git submodule foreach git pull origin master

# For initializing submodules
git submodule update --init

# Navigate to the repo install dependencies and build
cd repos/{repo_name}
yarn && yarn build
```

Creators [Kirill](https://github.com/kif11) and [Snay](https://github.com/sneha-belkhale)