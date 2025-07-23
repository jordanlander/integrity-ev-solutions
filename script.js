document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));
});
