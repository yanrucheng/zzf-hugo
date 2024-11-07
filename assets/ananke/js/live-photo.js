document.querySelectorAll('div.live-photo').forEach(livePhotoSection => {
    const livePhotoVideo = livePhotoSection.querySelector('video');

    // Pause initially to avoid autoplay
    livePhotoVideo.pause();

    const scrubVideoOnScroll = () => {
        const scrollDistance = window.scrollY - livePhotoSection.offsetTop;
        const scrollTotal = livePhotoSection.clientHeight - window.innerHeight;
        const scrollSpeed = 1;

        let scrollPercentage = scrollDistance / scrollTotal * scrollSpeed;
        scrollPercentage = Math.max(0, scrollPercentage);
        scrollPercentage = Math.min(scrollPercentage, 1);

        if (livePhotoVideo.duration > 0) {
            livePhotoVideo.currentTime = livePhotoVideo.duration * scrollPercentage;
        }
    };

    // Call on load and add a scroll listener for each live photo section
    scrubVideoOnScroll();
    window.addEventListener('scroll', scrubVideoOnScroll);
});
