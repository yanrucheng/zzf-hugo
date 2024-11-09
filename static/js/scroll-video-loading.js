// Initialize the loading cover and scroll lock
function initializeScrollyVideoLoading() {
  // Count all instances of .live-photo-container and disable scrolling initially
  if (typeof window.scrollyVideoCounter === 'undefined') {
    window.scrollyVideoCounter = document.querySelectorAll('.live-photo-container').length;
    document.body.style.overflow = 'hidden';
  }

  if (!document.getElementById('loading-cover')) {
    const loadingCover = document.createElement('div');
    loadingCover.id = 'loading-cover';
    loadingCover.style.position = 'fixed';
    loadingCover.style.top = 0;
    loadingCover.style.left = 0;
    loadingCover.style.width = '100%';
    loadingCover.style.height = '100%';
    loadingCover.style.background = 'rgba(0, 0, 0, 0.8)';
    loadingCover.style.zIndex = 9999;
    loadingCover.style.display = 'flex';
    loadingCover.style.alignItems = 'center';
    loadingCover.style.justifyContent = 'center';
    loadingCover.style.color = 'white';
    loadingCover.innerText = 'Loading...';
    document.body.appendChild(loadingCover);
  }

  window.finishLoadingFunc = finishLoading;
}

function finishLoading() {
  // Decrement the counter when an instance is ready
  window.scrollyVideoCounter--;

  // Only remove the loading cover and enable scrolling if all instances are ready
  if (window.scrollyVideoCounter === 0) {
    document.getElementById('loading-cover').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Export the function for setting up each instance
initializeScrollyVideoLoading();
