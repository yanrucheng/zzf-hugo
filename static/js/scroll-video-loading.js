// Avoid re-declaring variables if the script is loaded multiple times
if (typeof window.fakeProgressDurationPerInstance === 'undefined') {
  // Configuration
  window.fakeProgressDurationPerInstance = 2000; // Duration in milliseconds for each fake progress step
  window.scrollyVideoCounter = 0; // Total number of instances to load
  window.scrollyVideoLoaded = 0; // Counter for loaded instances
  window.finishLoadingFunc = finishLoading; // Make finishLoading available immediately
  window.fakeProgressInterval = null; // Store the interval so it can be cleared globally

  // Function to initialize the loading cover, scroll lock, and progress tracking
  function initializeScrollyVideoLoading() {
    document.addEventListener('DOMContentLoaded', () => {
      // Count all instances of .live-photo-container and disable scrolling initially
      if (window.scrollyVideoCounter === 0) {
        window.scrollyVideoCounter = document.querySelectorAll('.live-photo-container').length;
        document.body.style.overflow = 'hidden';
      }

      // Only create the loading overlay if it doesn't already exist
      if (!document.getElementById('loading-overlay')) {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loading-overlay';
        loadingOverlay.style.position = 'fixed';
        loadingOverlay.style.top = 0;
        loadingOverlay.style.left = 0;
        loadingOverlay.style.width = '100%';
        loadingOverlay.style.height = '100%';
        loadingOverlay.style.background = 'rgba(0, 0, 0, 0.2)'; // Semi-transparent grey overlay
        loadingOverlay.style.zIndex = 1000;
        loadingOverlay.style.display = 'none';
        loadingOverlay.style.pointerEvents = 'none'; // Allow clicks to pass through
        document.body.appendChild(loadingOverlay);
      }

      // Start the fake progress loading
      startFakeProgress();
    });
  }

  // Function to start the fake progress using NProgress with early stop
  function startFakeProgress() {
    lockPage();

    // Store the interval so it can be accessed globally
    window.fakeProgressInterval = setInterval(() => {
      unlockPage();
    }, window.scrollyVideoCounter * window.fakeProgressDurationPerInstance);
  }

  // Function to handle each instance finishing loading
  function finishLoading() {
    // Increment the loaded counter
    window.scrollyVideoLoaded++;
    NProgress.inc(0.9 / window.scrollyVideoCounter);
    console.log(NProgress.status);

    // If all instances are ready, stop the loading early
    if (window.scrollyVideoLoaded === window.scrollyVideoCounter) {
      unlockPage();
    }
  }

  function lockPage() {
    NProgress.configure({
      showSpinner: false,
    });
    NProgress.start();
    document.getElementById('loading-overlay').style.display = 'block';
  }

  function unlockPage() {
    NProgress.done();
    clearInterval(window.fakeProgressInterval); // Stop the interval if it’s still running
    document.getElementById('loading-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
  }


  // Initialize loading cover and tracking when script runs
  initializeScrollyVideoLoading();
}
