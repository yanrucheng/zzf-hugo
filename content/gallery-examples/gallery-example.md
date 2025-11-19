---
title: "Gallery Example"
date: 2024-01-01
---

# Gallery Example

## Test 1: Width-Controlled Layout (DEFAULT - no need for width-controlled="true")
Items fit within container width without overflow by default now:

<!--more-->

{{< gallery-row >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="2:3 Aspect Ratio" ratio="2:3" >}}
{{< /gallery-row >}}

## Test 2: Width-Controlled with Custom Widths
You can specify exact widths using the width parameter:

{{< gallery-row width="800px" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/1600/900" title="16:9 Aspect Ratio" ratio="16:9" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/1500" title="1:2.5 Aspect Ratio" ratio="2.5:1" >}}
{{< /gallery-row >}}

{{< gallery-row width="50%" class="border border-red-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="3:2 Aspect Ratio" ratio="3:2" >}}
  {{< gallery-item src="https://picsum.photos/id/1036/800/800" title="1:1 Aspect Ratio" ratio="1:1" >}}
{{< /gallery-row >}}

## Test 3: Tall and Wide Ratios
Testing new aspect ratios with decimals:

{{< gallery-row width="50%" class="border border-blue-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1018/800/600" title="2.5:1 Aspect Ratio" ratio="2.5:1" >}}
  {{< gallery-item src="https://picsum.photos/id/1064/600/800" title="3.5:1 Aspect Ratio" ratio="3.5:1" >}}
{{< /gallery-row >}}

{{< gallery-row width="50%" class="border border-green-300" >}}
  {{< gallery-item src="https://picsum.photos/id/1047/500/1250" title="1:2.5 Aspect Ratio" ratio="1:2.5" >}}
  {{< gallery-item src="https://picsum.photos/id/1025/350/1225" title="1:3.5 Aspect Ratio" ratio="1:3.5" >}}
{{< /gallery-row >}}


{{< gallery-row >}}
  {{< gallery-column >}}
    {{< gallery-item src="https://picsum.photos/id/1025/350/1225" title="1:3.5 Aspect Ratio" ratio="1:3.5" >}}
    {{< gallery-item src="https://picsum.photos/id/1025/350/1225" title="1:3.5 Aspect Ratio" ratio="1:1" >}}
  {{< /gallery-column >}}
  {{< gallery-column >}}
    {{< gallery-item src="https://picsum.photos/id/1025/350/1225" title="1:3.5 Aspect Ratio" ratio="1:1" >}}
    {{< gallery-item src="https://picsum.photos/id/1025/350/1225" title="1:3.5 Aspect Ratio" ratio="1:3.5" >}}
  {{< /gallery-column >}}
{{< /gallery-row >}}





