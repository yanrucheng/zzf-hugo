---
title: "Gallery System Example"
date: 2024-01-01
description: "Demonstration of the new gallery shortcode system"
---

# Gallery System Example

This page demonstrates the new gallery shortcode system with various layouts and features.

## Basic Gallery Row (3 items)

{{< gallery-row cols="3" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="Mountain Lake" desc="A beautiful mountain lake at sunrise" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/600" title="Forest Path" desc="A peaceful forest path" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/800/600" title="Waterfall" desc="A stunning waterfall" ratio="2:3" >}}
{{< /gallery-row >}}

## 2-Column Row

{{< gallery-row cols="2" >}}
  {{< gallery-item src="https://picsum.photos/id/1005/800/1200" title="Portrait" desc="Portrait mode image" ratio="2:3" >}}
  {{< gallery-item src="https://picsum.photos/id/1025/800/1422" title="Tall Image" desc="Very tall image" ratio="1:3.5" >}}
{{< /gallery-row >}}

## 1-Column (Full Width)

{{< gallery-row cols="1" >}}
  {{< gallery-item src="https://picsum.photos/id/1074/1200/600" title="Landscape" desc="Wide landscape image" ratio="16:9" >}}
{{< /gallery-row >}}

## Mixed Aspect Ratios in One Row

{{< gallery-row cols="3" >}}
  {{< gallery-item src="https://picsum.photos/id/1080/800/800" title="Square" desc="Square image" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1040/800/1422" title="Tall" desc="Tall portrait" ratio="9:16" >}}
  {{< gallery-item src="https://picsum.photos/id/1050/1200/600" title="Wide" desc="Ultra wide" ratio="16:9" >}}
{{< /gallery-row >}}

## Hierarchical Layout (2x2 Grid)

{{< gallery-row cols="2" >}}
  {{< gallery-col >}}
    {{< gallery-item src="https://picsum.photos/id/1006/800/1200" ratio="2:3" >}}
    {{< gallery-item src="https://picsum.photos/id/1007/800/1200" ratio="2:3" >}}
  {{< /gallery-col >}}
  {{< gallery-col >}}
    {{< gallery-item src="https://picsum.photos/id/1008/800/1200" ratio="2:3" >}}
    {{< gallery-item src="https://picsum.photos/id/1009/800/1200" ratio="2:3" >}}
  {{< /gallery-col >}}
{{< /gallery-row >}}

## Complex Hierarchy (3 main columns, middle with vertical stack)

{{< gallery-row cols="3" >}}
  {{< gallery-item src="https://picsum.photos/id/1019/800/1600" title="Vertical Panorama" desc="Tall vertical image" ratio="1:2.5" >}}

  {{< gallery-col >}}
    {{< gallery-row cols="1" >}}
      {{< gallery-item src="https://picsum.photos/id/1020/800/450" title="Top Image" desc="16:9 ratio" ratio="16:9" >}}
    {{< /gallery-row >}}
    {{< gallery-row cols="2" >}}
      {{< gallery-item src="https://picsum.photos/id/1021/400/400" title="Square 1" ratio="1:1" >}}
      {{< gallery-item src="https://picsum.photos/id/1022/400/400" title="Square 2" ratio="1:1" >}}
    {{< /gallery-row >}}
  {{< /gallery-col >}}

  {{< gallery-item src="https://picsum.photos/id/1023/800/1600" title="Another Vertical" desc="Another tall image" ratio="1:2.5" >}}
{{< /gallery-row >}}

## Video Support

{{< gallery-row cols="2" >}}
  {{< gallery-item src="https://www.w3schools.com/html/mov_bbb.mp4" title="Big Buck Bunny" desc="Sample video" ratio="16:9" >}}
  {{< gallery-item src="https://picsum.photos/id/1065/800/1422" title="Video Placeholder" desc="Video with preview image" ratio="9:16" >}}
{{< /gallery-row >}}

## Gallery Features

### Aspect Ratios Available:
- 2:3 (portrait)
- 3:2 (landscape)
- 1:1 (square)
- 16:9 (video)
- 9:16 (vertical video)
- 1:2.5 (tall portrait)
- 1:3.5 (very tall portrait)

### Hover Effects:
- Media scales up slightly on hover
- Information card slides up with title and description
- Smooth transitions

### Layout Options:
- Horizontal rows (1-3 items)
- Vertical columns (stacks)
- Nested layouts (rows inside columns)
- Consistent height across row items
- Configurable gaps

## Usage Tips

1. **Organize your media**: Place images/videos in the same directory as your content file or in the `static/` folder.

2. **Use page resources**: For better performance, add media files to the same folder as your content:
   ```
   content/
   └── post/
       ├── index.md
       ├── image1.jpg
       └── video1.mp4
   ```

3. **Nested layouts**: Combine rows and columns to create complex grid structures.

4. **Responsive design**: The gallery automatically adjusts to different screen sizes.

5. **Custom classes**: Add your own CSS classes for additional styling.
