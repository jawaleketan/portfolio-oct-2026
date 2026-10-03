/* ============================================================
   Ketan Jawale — Portfolio shared behavior
   Progressive enhancement: content is fully readable without JS.
   ============================================================ */

(function () {
  "use strict";

  // Flag JS availability so CSS only hides content that JS will reveal.
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link is chosen (mobile).
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navList.classList.contains("open")) {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ---------- Animated stat counters ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;

    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }

    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
    } else {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) { counterObserver.observe(el); });
    }
  }

  /* ---------- Hero role rotator ---------- */
  var rotator = document.getElementById("rotator");

  if (rotator && !reduceMotion) {
    var words = JSON.parse(rotator.getAttribute("data-words") || "[]");

    if (words.length > 1) {
      var wordIndex = 0;
      var charIndex = words[0].length;
      var deleting = false;

      function type() {
        var current = words[wordIndex];

        if (deleting) {
          charIndex--;
        } else {
          charIndex++;
        }

        rotator.textContent = current.slice(0, charIndex);

        var delay = deleting ? 40 : 85;

        if (!deleting && charIndex === current.length) {
          delay = 1900; // hold the full word
          deleting = true;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          delay = 350;
        }

        setTimeout(type, delay);
      }

      setTimeout(type, 1200);
    }
  }

  /* ---------- Contact form (demo — no backend) ---------- */
  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var status = document.getElementById("form-status");
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");

      var valid =
        name.value.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) &&
        message.value.trim().length > 5;

      status.classList.remove("show", "success", "error");

      if (!valid) {
        status.textContent = "Please fill in your name, a valid email, and a short message.";
        status.classList.add("show", "error");
        return;
      }

      // Demo site: show success instead of sending anywhere.
      status.textContent =
        "Thanks, " + name.value.trim().split(" ")[0] +
        "! Your message was noted locally — this demo form does not send email. " +
        "Please reach me directly at jawale.ketan@gmail.com.";
      status.classList.add("show", "success");
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
