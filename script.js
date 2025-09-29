// small intersection observer for fade-in
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });
})();
