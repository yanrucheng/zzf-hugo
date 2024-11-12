window.addEventListener("scroll", () => {
  const initialGrey = 100;
  const scrollSpeedFactor = 2.0;


  // Select all elements with the class .scroll-img
  const heroElements = document.querySelectorAll(".scroll-img");
  const scrollY = window.scrollY;

  heroElements.forEach((hero) => {
    // Calculate the percentage of scroll within the hero section
    const heroHeight = hero.offsetHeight;
    const heroTop = hero.offsetTop;
    const relativeScrollY = scrollY - heroTop;

    // Check if the element is in the viewport
    if (relativeScrollY >= 0 && relativeScrollY <= heroHeight) {
      const scrollPercentage = Math.min(relativeScrollY / heroHeight, 1);
      const grayscalePercentage = initialGrey * (1 - scrollSpeedFactor * scrollPercentage);

      // Adjust the grayscale filter based on scroll percentage
      hero.style.filter = `grayscale(${Math.max(grayscalePercentage, 0)}%)`;
    } else {
      // Reset to full grayscale if the element is out of view
      hero.style.filter = `grayscale(${initialGrey}%)`;
    }
  });
});
