window.addEventListener("scroll", () => {
  const initialGrey = 100;
  const scrollSpeedFactor = 3.0;

  // Select all elements with the class .scroll-img
  const eles = document.querySelectorAll(".scroll-img");
  const windowH = window.innerHeight;

  eles.forEach((e) => {
    const box = e.getBoundingClientRect();
    const t = box.top;
    const b = box.bottom;

    // Check if the element is in the viewport
    if (b < windowH && b > 0) {
      const scrollPercentage = (1 - b / windowH);
      const grayscalePercentage = Math.max(0, Math.min(1,
        (1 - scrollPercentage * scrollSpeedFactor)
      )) * initialGrey;

      // Adjust the grayscale filter based on scroll percentage
      e.style.filter = `grayscale(${grayscalePercentage}%)`;
    } else {
      // Reset to full grayscale if the element is out of view
      e.style.filter = `grayscale(${initialGrey}%)`;
    }
  });
});

window.addEventListener('scroll', function() {
  const eles = document.querySelectorAll('.parallax-background');
  const windowH = window.innerHeight;

  eles.forEach((e) => {
    const box = e.getBoundingClientRect();
    const t = box.top;
    const b = box.bottom;

    // Check if the element is in the viewport
    if (t < windowH && b > 0) {
      const scrollPercentage = t / windowH;
      e.style.backgroundPositionY = `${scrollPercentage * 50}%`; /* Adjust speed */
    }
  });
});

