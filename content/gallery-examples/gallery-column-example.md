---
title: "Gallery Column Example"
date: 2025-01-01
---

# Gallery Column Example

## Test 1: Basic Gallery Column
Vertical stack of items with consistent width:

<!--more-->

{{< gallery-column >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="2:3 Aspect Ratio" ratio="2:3" >}}
{{< /gallery-column >}}

## Test 2: Ratio-Based Column Layout
Fixed width column with items sized by aspect ratio:

{{< gallery-column ratio-layout="true" width="300px" class="border border-blue-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="2:3 Aspect Ratio" ratio="2:3" >}}
  {{< gallery-item src="https://picsum.photos/id/1047/500/1250" title="1:2.5 Aspect Ratio" ratio="1:2.5" >}}
{{< /gallery-column >}}

## Test 3: Height-Controlled Column Layout
Fixed height column with items fitting within the container:

{{< gallery-column height-controlled="true" height="600px" class="border border-red-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="2:3 Aspect Ratio" ratio="2:3" >}}
{{< /gallery-column >}}

## Test 4: Nested Row Inside Column
Gallery column containing a gallery row:

{{< gallery-column width="50%" class="border border-green-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="Top Item" ratio="3:2" >}}

  {{< gallery-row class="my-4" >}}
    {{< gallery-item src="https://picsum.photos/id/1001/600/400" title="Nested Item 1" ratio="3:2" >}}
    {{< gallery-item src="https://picsum.photos/id/1005/600/400" title="Nested Item 2" ratio="3:2" >}}
  {{< /gallery-row >}}

  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="Bottom Item" ratio="1:1" >}}
{{< /gallery-column >}}

## Test 5: Complex Nested Layout
Multiple columns with nested rows:

<div class="flex gap-4">
  {{< gallery-column ratio-layout="true" width="200px" class="border border-purple-300" >}}
    {{< gallery-item src="https://picsum.photos/id/1019/400/300" title="Col 1 - Item 1" ratio="4:3" >}}
    {{< gallery-item src="https://picsum.photos/id/1020/400/300" title="Col 1 - Item 2" ratio="4:3" >}}
  {{< /gallery-column >}}

  {{< gallery-column ratio-layout="true" width="200px" class="border border-orange-300" >}}
    {{< gallery-row >}}
      {{< gallery-item src="https://picsum.photos/id/1021/300/200" title="Col 2 - Row 1 Item 1" ratio="3:2" >}}
      {{< gallery-item src="https://picsum.photos/id/1022/300/200" title="Col 2 - Row 1 Item 2" ratio="3:2" >}}
    {{< /gallery-row >}}

    {{< gallery-row >}}
      {{< gallery-item src="https://picsum.photos/id/1023/300/200" title="Col 2 - Row 2 Item 1" ratio="3:2" >}}
      {{< gallery-item src="https://picsum.photos/id/1024/300/200" title="Col 2 - Row 2 Item 2" ratio="3:2" >}}
    {{< /gallery-row >}}
  {{< /gallery-column >}}
</div>
