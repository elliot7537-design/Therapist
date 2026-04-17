(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-menu");

  // ---------- Mobile nav ----------
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      if (open) menu.setAttribute("hidden", "");
      else menu.removeAttribute("hidden");
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("hidden", "");
      });
    });
  }

  // ---------- Active-link scrollspy ----------
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navSections = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((l) =>
            l.classList.toggle("is-active", l.getAttribute("href") === id)
          );
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    navSections.forEach((s) => spy.observe(s));
  }

  // ---------- Reduced motion short-circuit ----------
  const prefersReduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduce || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-in"));
  } else {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  }

  // ---------- Animated stat numbers ----------
  const stats = document.querySelectorAll(".stat-num[data-target]");
  const runCount = (el) => {
    const target = Number(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    if (!Number.isFinite(target)) return;
    if (prefersReduce) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const v = Math.round(easeOut(p) * target);
      el.textContent = v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (stats.length && "IntersectionObserver" in window) {
    const statObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach((s) => statObs.observe(s));
  } else {
    stats.forEach(runCount);
  }
})();
