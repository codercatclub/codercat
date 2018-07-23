for f in ../public/img/gallery/*/img-*.jpg; do
  root=${f%/*}
  name=${f##*/}
  proxy=${root}/${name/img/proxy}

  # Resize and blur
  magick convert -resize 100 -blur 0x6 ${f} ${proxy}

  mv ${f} /tmp/
  # Optimize
  mozjpegtran -outfile ${f} -optimise -copy none /tmp/${name}
done