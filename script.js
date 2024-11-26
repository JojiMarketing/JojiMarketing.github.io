const sections = document.querySelectorAll('.section');
const sectionCount = sections.length;

sections.forEach((section, index) => {
  const sectionHeight = 100 / sectionCount;
  const backgroundPositionY = `${index * sectionHeight}%`;

  section.style.backgroundPositionY = backgroundPositionY;
});