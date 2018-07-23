from pathlib import Path
import json
import cv2

categories_dirs = [x for x in Path('../public/img/gallery/').iterdir() if x.is_dir()]

categories = []
accum_height = 0
margin = 2

for i, d in enumerate(categories_dirs):

    category_height = 0
    images = []
    for j, f in enumerate(sorted(d.glob('img-*.jpg'))):
        img = cv2.imread(str(f))
        height, width, channels = img.shape
        category_height += height
        accum_height += height
        images.append({
            'name': f.name,
            'height': height,
            'width': width,
            'proxy': f'proxy-{j+1}.jpg',
        })

    categories.append({
        'id': i,
        'name': d.name,
        'height': category_height,
        'accum_height': accum_height - category_height,
        'images': images,
        'load': False,
        'loadProxy': False,
    })

    # heights.append(acc_height)

# heights = heights[:-1]

with open('../src/constants/gallery.json', 'w') as outfile:
    json.dump(categories, outfile, indent=4)