// Reveal on scroll, the sticky header's border, and the footer year. Nothing else.
(() => {
  const root = document.documentElement;
  root.classList.remove('no-js');

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  const top = document.querySelector('.top');
  const onScroll = () => top && top.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
