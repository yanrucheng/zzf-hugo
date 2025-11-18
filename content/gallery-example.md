---
title: "Gallery Example"
date: 2024-01-01
draft: true
---

# Gallery Example

## Test 1: Mixed Aspect Ratios (Recommended)
Use ratio-layout for mixed aspect ratios:

{{< gallery-row ratio-layout="true" height="400px" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="Mountain Lake" desc="A beautiful mountain lake at sunrise" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="Forest Path" desc="A peaceful forest path" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="Waterfall" desc="A stunning waterfall" ratio="2:3" >}}
{{< /gallery-row >}}

## Test 2: Same Aspect Ratios
Use grid layout for same aspect ratios:

{{< gallery-row cols="3" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="Mountain Lake" desc="A beautiful mountain lake at sunrise" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/600" title="Forest Path" desc="A peaceful forest path" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/800/600" title="Waterfall" desc="A stunning waterfall" ratio="3:2" >}}
{{< /gallery-row >}}

## Test 3: Aspect Ratio 16:9 (Wide)
Large landscape format:

{{< gallery-row ratio-layout="true" height="300px" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/1600/900" title="Wide Landscape" desc="16:9 aspect ratio" ratio="16:9" >}}
{{< /gallery-row >}}

## Test 4: Portrait Aspect Ratios
Tall portrait format:

{{< gallery-row ratio-layout="true" height="500px" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/1500" title="Portrait" desc="1:2.5 aspect ratio" ratio="1:2.5" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/600/2100" title="Tall Portrait" desc="1:3.5 aspect ratio" ratio="1:3.5" >}}
{{< /gallery-row >}}

## Test 5: Width-Controlled Layout (NEW)
Items fit within container width without overflow:

{{< gallery-row width-controlled="true" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="2:3 Aspect Ratio" ratio="2:3" >}}
{{< /gallery-row >}}

{{< gallery-row width-controlled="true" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/1600/900" title="16:9 Aspect Ratio" ratio="16:9" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/1500" title="1:2.5 Aspect Ratio" ratio="2.5:1" >}}
{{< /gallery-row >}}
