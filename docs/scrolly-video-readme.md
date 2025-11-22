# ScrollyVideo.js

**Internal Verification Status: ✅ MATCHES LIBRARY IN REPO**
**Library Location**: `/Users/chengyanru/repos/hugo_projects/zzf-hugo/static/js/scrolly-video.js`
**Integration**: Uses **ScrollTrigger v1.0.5** (located at `/static/js/ScrollTrigger.min.js`) for stable scroll tracking.
**Project Usage**: Implements the scroll-play hanabi (fireworks) video on the **2024-zmm-birthday celebration page** using `{{< live-photo mode="scroll-full" ... >}}` shortcode.

A component for scroll-based (or other externally controlled) playback. See [`/demos`](https://github.com/dkaoster/scrolly-video/tree/main/demos) for full example usages.

## 🚀 Web

### **Project-Specific Implementation**
In this repo, the library is used via the `{{< live-photo mode="scroll-full" ... >}}` shortcode (see `layouts/shortcodes/live-photo.html`), which automatically:
1. Loads the **local** `scrolly-video.js` library
2. Initializes the ScrollyVideo object with best practice parameters
3. Integrates with ScrollTrigger for stable scroll tracking
4. Supports all ScrollyVideo options as optional shortcode parameters

**Improved Shortcode Features:**
- Customizable transition speed for smooth playback
- Adjustable frame threshold to balance smoothness and performance
- WebCodecs support toggle
- Sticky positioning control
- Cover/contain scaling option
- Full viewport mode
- Scroll tracking and locking controls
- Debug mode for development

**Usage Example with Custom Options:**
```html
{{< live-photo
  src = "https://pub-651b791e1cf04a48934616971e0729de.r2.dev/zzf-hugo-media/content-assets/celebration/2024-zmm-birthday/hanabi/11-goldtale-1026.mp4"
  mode = "scroll-full"
  custom_class = "white txt-shdw-black-60"
  transition_speed = "10"
  frame_threshold = "0.05"
  debug = "true"
>}}
```

### **Direct Implementation (for reference)**
Add html container to your page:

```html
<div id="scrolly-video"></div>
```

Require javascript in your page and create the object (before `</body>`):

```html
<!-- Uses local ScrollTrigger for stable scroll tracking -->
<script src="{{ "js/ScrollTrigger.min.js" | relURL }}"></script>
<!-- Uses local scrolly-video library -->
<script src="{{ "js/scrolly-video.js" | relURL }}"></script>
<script type="text/javascript">
  new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "video.mp4"
  });
</script>
```

## 🔵 React

Install npm module with `npm install scrolly-video --save`:
Import component in your application:

```javascript
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
or
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';
```

Add the component where you need it:

```html
<ScrollyVideo src="https://scrollyvideo.js.org/goldengate.mp4" />
```

## 🟠 Svelte

Install npm module with `npm install scrolly-video --save`:
Import component in your application:

```javascript
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.svelte';
```

Add the ScrollyVideo component to your application:

```html
<ScrollyVideo src="https://scrollyvideo.js.org/goldengate.mp4" />
```

## 🟢 Vue

Install npm module with `npm install scrolly-video --save`:
Import module in your `src/App.vue` and config:

```javascript
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.vue';
```

Add html code to your html component:

```html
<ScrollyVideo src="https://scrollyvideo.js.org/goldengate.mp4" />
```

## 🔵 Astro

Install npm module with `npm install scrolly-video --save`: 
Import component in your frontmatter:

```javascript
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.astro';
```

```html
<ScrollyVideo src="https://scrollyvideo.js.org/goldengate.mp4" />
```

## 🧰 Options / Attributes

| Parameter             | Description                                                                                              | Values           | Default |
|:----------------------|:---------------------------------------------------------------------------------------------------------|:-----------------|:--------|
| src                   | The URL of the video (required)                                                                          | URL              |         |
| scrollyVideoContainer | The DOM element of the container, only used for plain js                                                 | String / Element |         |
| transitionSpeed       | Sets the maximum playbackRate for this video                                                             | Number           | 8       |
| frameThreshold        | When to stop the video animation, in seconds                                                             | Number           | 0.1     |
| cover                 | Forces the video to cover in it's container                                                              | Boolean          | true    |
| sticky                | Whether the video should have `position: sticky`                                                         | Boolean          | true    |
| full                  | Whether the video should take up the entire viewport                                                     | Boolean          | true    |
| trackScroll           | Whether this object should automatically respond to scroll                                               | Boolean          | true    |
| lockScroll            | Whether it ignores human scroll while it runs `setVideoPercentage` with enabled `trackScroll`            | Boolean          | true    |
| useWebCodecs          | Whether the library should use the webcodecs method, see below                                           | Boolean          | true    |
| videoPercentage       | Manually specify the position of the video between 0..1, only used for react, vue, and svelte components | Number           |         |
| onReady               | The callback when it's ready to scroll                                                                   | VoidFunction     |         |
| onChange              | The callback for video percentage change                                                                 | VoidFunction     |         |
| debug                 | Whether to log debug information                                                                         | Boolean          | false   |


## Additional callbacks

***setVideoPercentage***

Description: A way to set currentTime manually. Pass a progress in between of 0 and 1 that specifies the percentage position of the video. If `trackScroll` enabled - it performs scroll automatically.

Signature: `(percentage: number, options: { transitionSpeed: number, (progress: number) => number }) => void`

Example: `scrollyVideo.setVideoPercentage(0.5, { transitionSpeed: 12, easing: d3.easeLinear })`


## Technical Details and Cross Browser Differences
To make this library perform optimally in all browsers, three different approaches are taken to animating the video.

### Method 1: WebCodecs and Canvas

Using the new WebCodecs API we are able to get all frames in the video and have them ready to draw to a canvas. This method is the most performant, but has two drawbacks: first, depending on the device and the size of the video, using the WebCodecs API will take some time to process all the frames, so the animation will not be available immediately upon page load. Secondly, the WebCoedecs API is currently only available on Chrome, and the WebCodecs polyfill does not work for this application.

If WebCodecs is not supported by the browser or has not finished processing all frames, it falls back to method 2:

### Method 2: HTML5 Video and playbackRate

This method simply embeds the video with an HTML `<video>` tag, and it plays the video when the video needs to be animated. To adjust to the scroll speed, this method modulates the `playbackRate` attribute on the video in order to dynamically mimic a faster or slower scroll speed. This method is extremely smooth when the scroll direction is moving the video forward, but unfortunately does not work in reverse because `playbackRate` cannot be a negative value.

Thus, if the video needs to be animated backwards, this library falls back to method 3.

### Method 3: HTML5 Video and currentTime

This method is the way that scrollytelling videos have traditionally been done, using an HTML `<video>` tag and skipping directly to frames using currentTime. However, this method requires the video to be encoded at keyframe = 1, which causes the video to be a lot larger or the quality to drop. Unfortunately, this is the only option for scenarios where methods 1 and 2 are not supported, or on mobile safari browsers where somehow this method performs better than method 2. Thus, to achieve maximum performance under all circumstances, it is still recommended to encode videos with keyframe = 1, if possible.

## Known Issues
- On iOS, ScrollyVideo will not work if battery saver mode is on. Unfortunately, there is no workaround for this due to the way that iOS handles videos and battery saving functions.

---

Created by: [Daniel Kao](https://www.diplateevo.com/)
