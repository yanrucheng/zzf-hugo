/*
 * This script enables a "click-to-play" feature for videos embedded within a specific container. 
 * When a user clicks on an element with the class 'inner-video-click-play', 
 * the script searches for the first video element within the clicked container's children or descendants.
 * 
 * If a video is found and is currently paused, the script plays the video.
 * The video will only play once per click, as an 'ended' event listener is added to remove itself 
 * after the video finishes playing. This prevents the video from automatically replaying on further clicks.
 * 
 * Usage:
 * - Add the 'inner-video-click-play' class to any container element (e.g., <div>, <header>, etc.).
 * - Include a <video> element within that container or its nested descendants.
 * - On clicking the container, the video will start playing if it is paused.
 *
 * Note: This script requires that the DOM is fully loaded before executing.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the 'inner-video-click-play' class
    const clickPlayContainers = document.querySelectorAll(".inner-video-click-play");

    clickPlayContainers.forEach(container => {
        container.addEventListener("click", function() {
            // Find the first video element within the container and its descendants
            const video = container.querySelector("video");

            // If a video element is found and it is paused, play it once
            if (video && video.paused) {
                video.play();
                video.addEventListener("ended", function handler() {
                    video.removeEventListener("ended", handler); // Remove listener to prevent replay
                });
            }
        });
    });
});
