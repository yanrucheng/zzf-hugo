# Media File Migration Mapping: Local → Qiniu Cloud
**Optimized for Qiniu Built-in Transformations**

---

## Qiniu Cloud Structure Overview
| Design Choice                          | Purpose                                                                 |
|----------------------------------------|-------------------------------------------------------------------------|
| Root: `zzf-hugo-media/`                 | Isolates your media from external assets                               |
| `content-assets/`                      | Preserves content directory structure (tied to markdown files)        |
| `site-assets/`                         | Global website media (UI elements, heroes, etc.)                       |
| **No manual `used/`/`originals/` split**| Leverages Qiniu real-time transformation via URL parameters            |

---

## 1. Content-Specific Media (zzf-hugo-media/content-assets/)
| Local Path                                                                 | Qiniu Cloud Path                                                                 |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| content/celebration/2024-zmm-birthday/hanabi/11-goldtale-1026.mp4         | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/hanabi/11-goldtale-1026.mp4 |
| content/celebration/2024-zmm-birthday/portrait/changgusi-girl-forest.jpg  | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/changgusi-girl-forest.jpg |
| content/celebration/2024-zmm-birthday/portrait/fufu-campfire.jpg          | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/fufu-campfire.jpg |
| content/celebration/2024-zmm-birthday/portrait/fufu-campfire.mp4          | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/fufu-campfire.mp4 |
| content/celebration/2024-zmm-birthday/portrait/kamakura-qilibin-backview.jpg | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/kamakura-qilibin-backview.jpg |
| content/celebration/2024-zmm-birthday/portrait/kamakura-qilibin-backview.mp4 | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/kamakura-qilibin-backview.mp4 |
| content/celebration/2024-zmm-birthday/portrait/sjk-gyoen-lake-girl.jpg    | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/sjk-gyoen-lake-girl.jpg |
| content/celebration/2024-zmm-birthday/portrait/ueno-zoo-burenchi-girl.jpg | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/ueno-zoo-burenchi-girl.jpg |
| content/celebration/2024-zmm-birthday/portrait/wufu-redwall.jpg           | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/wufu-redwall.jpg |
| content/celebration/2024-zmm-birthday/portrait/wufu-redwall.mp4           | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/wufu-redwall.mp4 |
| content/celebration/2024-zmm-birthday/scene/cake.jpg                     | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/scene/cake.jpg |
| content/celebration/2024-zmm-birthday/scene/hasedera-temple-sea-city_full-landscape_q100_cropped.jpg | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/scene/hasedera-temple-sea-city_full-landscape_q100_cropped.jpg |
| content/celebration/2024-zmm-birthday/scene/sjk-gyoen-lake.jpg           | zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/scene/sjk-gyoen-lake.jpg |
| content/travel/240608-fuji-anniversary/shibuya-sky/street-traffic-time-lapse.mp4 | zzf-hugo-media/content-assets/travel/240608-fuji-anniversary/shibuya-sky/street-traffic-time-lapse.mp4 |
| content/travel/241102-narita-hanabi/IMG_0665.mp4                          | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/IMG_0665.mp4 |
| content/travel/241102-narita-hanabi/example/IMG_0665.mp4                  | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/IMG_0665.mp4 |
| content/travel/241102-narita-hanabi/example/hanabi-girl-264.mp4          | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/hanabi-girl-264.mp4 |
| content/travel/241102-narita-hanabi/example/hanabi-girl-color-scroll.mp4  | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/hanabi-girl-color-scroll.mp4 |
| content/travel/241102-narita-hanabi/example/hanabi-girl-scroll.mp4        | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/hanabi-girl-scroll.mp4 |
| content/travel/241102-narita-hanabi/example/hanabi-girl.jpg               | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/hanabi-girl.jpg |
| content/travel/241102-narita-hanabi/example/hanabi-girl.mp4               | zzf-hugo-media/content-assets/travel/241102-narita-hanabi/example/hanabi-girl.mp4 |

---

## 2. Global Website Media (zzf-hugo-media/site-assets/)
| Local Path                                                                 | Qiniu Cloud Path                                                                 |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| static/images/piggy-bank-outline.svg                                      | zzf-hugo-media/site-assets/images/piggy-bank-outline.svg                      |
| static/images/piggy-face-outline.png                                      | zzf-hugo-media/site-assets/images/piggy-face-outline.png                      |
| static/images/piggy-face.png                                              | zzf-hugo-media/site-assets/images/piggy-face.png                              |
| static/images/piggy-outline.png                                           | zzf-hugo-media/site-assets/images/piggy-outline.png                           |
| static/images/piggy-outline.svg                                           | zzf-hugo-media/site-assets/images/piggy-outline.svg                           |
| static/images/piggy-round.png                                             | zzf-hugo-media/site-assets/images/piggy-round.png                             |
| static/images/piggy.png                                                   | zzf-hugo-media/site-assets/images/piggy.png                                   |
| static/images/pink-piggy.svg                                              | zzf-hugo-media/site-assets/images/pink-piggy.svg                              |
| static/images/saving.png                                                  | zzf-hugo-media/site-assets/images/saving.png                                  |
| static/original_images/heroes/241102-naritahanabi-both-ip14.png           | zzf-hugo-media/site-assets/original_images/heroes/241102-naritahanabi-both-ip14.png |
| static/videos/hanabi-girl.mp4                                             | zzf-hugo-media/site-assets/videos/hanabi-girl.mp4                             |

---

## Key Usage with Qiniu Transformations
Once files are uploaded, use **Qiniu transformation URL parameters** to modify media on the fly:

### Example URL Patterns
| Action                                  | Example URL                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| Original Image                          | `https://your-qiniu-domain.com/zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/portrait/changgusi-girl-forest.jpg` |
| Resize to 800x600                       | `https://your-qiniu-domain.com/zzf-hugo-media/.../changgusi-girl-forest.jpg?imageView2/2/w/800/h/600` |
| Compress to 85% quality                 | `https://your-qiniu-domain.com/zzf-hugo-media/.../changgusi-girl-forest.jpg?imageView2/2/q/85` |
| Crop to square                          | `https://your-qiniu-domain.com/zzf-hugo-media/.../changgusi-girl-forest.jpg?imageMogr2/crop/!600x600a0a0` |

### Benefits:
1. **Save Storage**: No duplicate transformed files
2. **Dynamic Control**: Adjust transformations without re-uploading
3. **Cache Optimized**: Qiniu caches transformed results automatically

---

## Next Steps
1. Upload all files to Qiniu Cloud using the mapping above
2. Update content references to use Qiniu URLs (with transformations if needed)
3. Refer to [Qiniu Transformation Docs](https://developer.qiniu.com/dora/8254/image-processing) for advanced parameters
