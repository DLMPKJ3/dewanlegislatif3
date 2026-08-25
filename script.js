/* =========================================================
   DLM WEBSITE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     MOBILE NAVBAR
  ======================================================= */

  const menuToggle =
    document.getElementById("menuToggle");

  const navbarMenu =
    document.getElementById("navbarMenu");


  if (menuToggle && navbarMenu) {

    menuToggle.addEventListener("click", function () {

      const isOpen =
        navbarMenu.classList.toggle("show");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );


      const icon =
        menuToggle.querySelector("i");

      if (icon) {

        icon.classList.toggle(
          "fa-bars",
          !isOpen
        );

        icon.classList.toggle(
          "fa-xmark",
          isOpen
        );

      }

    });

  }



  /* =======================================================
     MOBILE DROPDOWN
  ======================================================= */

  const dropdownParents =
    document.querySelectorAll(
      ".has-dropdown"
    );


  dropdownParents.forEach(function (parent) {

    const toggle =
      parent.querySelector(
        ".dropdown-toggle"
      );


    if (!toggle) return;


    toggle.addEventListener(
      "click",
      function (event) {

        /*
          Pada desktop, dropdown tetap
          bekerja menggunakan hover.
        */

        if (
          window.innerWidth <= 700
        ) {

          event.preventDefault();

          parent.classList.toggle(
            "open"
          );

        }

      }
    );

  });



  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      if (
        window.innerWidth > 700
      ) return;


      if (
        !event.target.closest(
          ".navbar"
        )
      ) {

        if (navbarMenu) {

          navbarMenu.classList.remove(
            "show"
          );

        }


        dropdownParents.forEach(
          function (parent) {

            parent.classList.remove(
              "open"
            );

          }
        );

      }

    }
  );



  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();


  const navLinks =
    document.querySelectorAll(
      ".navbar-menu a"
    );


  navLinks.forEach(function (link) {

    const href =
      link.getAttribute("href");


    if (!href || href === "#")
      return;


    const linkPage =
      href
        .split("/")
        .pop()
        .toLowerCase();


    if (
      linkPage === currentPage
    ) {

      link.classList.add(
        "active"
      );

    }

  });



  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  const images =
    document.querySelectorAll(
      "img"
    );


  images.forEach(function (image) {

    image.addEventListener(
      "error",
      function () {

        /*
          Jika gambar tidak ditemukan,
          card tidak akan terlihat rusak.
        */

        image.style.opacity = "0.25";

      }
    );

  });



  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".news-card, .program-kerja-section, .personel-card"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        function (entries, observer) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "is-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      function (element) {

        element.classList.add(
          "scroll-reveal"
        );

        observer.observe(
          element
        );

      }
    );

  }



  /* =======================================================
     NEWS CARD STAGGER ANIMATION
  ======================================================= */

  const newsCards =
    document.querySelectorAll(
      ".news-card"
    );


  newsCards.forEach(
    function (card, index) {

      card.style.animationDelay =
        `${index * 0.08}s`;

    }
  );



  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const yearElements =
    document.querySelectorAll(
      "[data-current-year]"
    );


  yearElements.forEach(
    function (element) {

      element.textContent =
        new Date().getFullYear();

    }
  );

});
/* =========================================================
   DLM WEBSITE
   GLOBAL SCROLL ANIMATION SYSTEM
   ========================================================= */


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("active");

        });

    }

});


/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const progressBar = document.createElement("div");

    progressBar.className = "scroll-progress";

    document.body.prepend(progressBar);


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        progressBar.style.width =
            progress + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) return;


    function navbarScroll() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        navbarScroll,
        { passive: true }
    );

    navbarScroll();

});


/* =========================================================
   STAGGER CARD ANIMATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const groups = [
        ".news-grid",
        ".task-grid",
        ".vision-grid",
        ".intro-grid",
        ".results-grid",
        ".product-grid"
    ];


    groups.forEach((selector) => {

        const container =
            document.querySelector(selector);

        if (!container) return;


        const cards =
            container.children;


        Array.from(cards).forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 0.08}s`;

            }
        );

    });

});

/* =========================================
   CAROUSEL DOKUMENTASI DLM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".carousel-slide");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const dotsContainer = document.getElementById("carouselDots");

    if (!carousel || slides.length === 0) {
        return;
    }


    let currentIndex = 0;

    let autoSlide;


    /* =====================================
       BUAT DOT OTOMATIS
    ===================================== */

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        dot.type = "button";

        dot.setAttribute(
            "aria-label",
            `Pergi ke slide ${index + 1}`
        );

        dot.addEventListener("click", function () {

            goToSlide(index);

            restartAutoSlide();

        });

        dotsContainer.appendChild(dot);

    });


    const dots =
        document.querySelectorAll(".carousel-dot");


    /* =====================================
       PINDAH SLIDE
    ===================================== */

    function goToSlide(index) {

        currentIndex = index;

        carousel.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        /* Update dot */

        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentIndex
            );

        });

    }


    /* =====================================
       NEXT
    ===================================== */

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= slides.length) {

            currentIndex = 0;

        }

        goToSlide(currentIndex);

    }


    /* =====================================
       PREVIOUS
    ===================================== */

    function previousSlide() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = slides.length - 1;

        }

        goToSlide(currentIndex);

    }


    /* =====================================
       BUTTON NEXT
    ===================================== */

    nextBtn.addEventListener(
        "click",
        function () {

            nextSlide();

            restartAutoSlide();

        }
    );


    /* =====================================
       BUTTON PREVIOUS
    ===================================== */

    prevBtn.addEventListener(
        "click",
        function () {

            previousSlide();

            restartAutoSlide();

        }
    );


    /* =====================================
       AUTO SLIDE
       
       4000 = 4 DETIK
    ===================================== */

    function startAutoSlide() {

        autoSlide = setInterval(
            nextSlide,
            4000
        );

    }


    /* =====================================
       RESTART AUTO SLIDE
    ===================================== */

    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =====================================
       PAUSE SAAT MOUSE DIARAHKAN
    ===================================== */

    const container =
        document.querySelector(".carousel-container");


    container.addEventListener(
        "mouseenter",
        function () {

            clearInterval(autoSlide);

        }
    );


    container.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();

        }
    );


    /* =====================================
       MULAI
    ===================================== */

    goToSlide(0);

    startAutoSlide();


});

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    const navLinks =
        document.querySelectorAll(
            ".navbar-menu a"
        );


    navLinks.forEach((link) => {

        const href =
            link.getAttribute("href");


        if (!href) return;


        const linkPage =
            href
            .split("/")
            .pop()
            .toLowerCase();


        if (
            linkPage === currentPage &&
            linkPage !== ""
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

});


/* =========================================================
   IMAGE LAZY LOAD FADE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const images =
        document.querySelectorAll(
            "img[loading='lazy']"
        );


    images.forEach((img) => {

        img.style.opacity = "0";

        img.style.transition =
            "opacity 0.7s ease";


        if (img.complete) {

            img.style.opacity = "1";

        } else {

            img.addEventListener(
                "load",
                function () {

                    img.style.opacity = "1";

                }
            );

        }

    });

});


/* =========================================================
   PARALLAX HERO
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hero =
        document.querySelector(".hero");


    if (!hero) return;


    const heroContent =
        hero.querySelector(".hero-content");


    if (!heroContent) return;


    window.addEventListener(
        "scroll",
        function () {

            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                heroContent.style.transform =
                    `translateY(${scroll * 0.15}px)`;

                heroContent.style.opacity =
                    Math.max(
                        0,
                        1 - scroll / 700
                    );

            }

        },
        { passive: true }
    );

});


/* =========================================================
   PAGE EXIT TRANSITION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const internalLinks =
        document.querySelectorAll(
            "a[href]"
        );


    internalLinks.forEach((link) => {

        const href =
            link.getAttribute("href");


        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            link.target === "_blank"
        ) {
            return;
        }


        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const destination =
                    this.href;


                document.body.style.transition =
                    "opacity 0.3s ease";


                document.body.style.opacity =
                    "0";


                setTimeout(() => {

                    window.location.href =
                        destination;

                }, 300);

            }
        );

    });

});
