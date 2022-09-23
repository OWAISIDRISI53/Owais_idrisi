let heroSec = document.querySelector(".section-hero");

// ===============================================
//               Creating Sticky  navbar
// ===============================================

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSec);

// ===============================================
//               Creating responsive navbar
// ===============================================

let mobile_nav = document.querySelector(".mobile-navbar-btn");

let header = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});
const nav_links = document.querySelectorAll('.navbar-links')
nav_links.forEach(element => {
  element.addEventListener('click',()=> {
    setTimeout(() => {
      header.classList.toggle("active");
    },500)
  })
})
// ===============================================
//          Creating a portfolio tabbed Component
// ===============================================

const port_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-overlay");

port_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  if (!p_btn_clicked.classList.contains("p-btn")) {
    return;
  }

  p_btn.forEach((elem) => {
    elem.classList.remove("p-btn-active");
  });

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  img_div.forEach((elem) => {
    elem.classList.add("p-image-not-active");
  });

  img_active.forEach((elem) => {
    elem.classList.remove("p-image-not-active");
  });
});

// ===============================================
//               Swapper js
// ===============================================

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

const jsMedia = widthSize => {
  if (widthSize.matches) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    }); 
  }

  else {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
  
    });
  }
}

const widthSize = window.matchMedia('(max-width: 780px)')

jsMedia(widthSize)

widthSize.addEventListener('change',jsMedia)



// ===============================================
//               Scroll to Top
// ===============================================

let scrollElem = document.createElement("div");
scrollElem.classList.add("scrollTop-style");

scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top md hydrated" role="img" aria-label="arrow up outline"></ion-icon>`;

document.body.appendChild(scrollElem);

const scrollToTop = () => {
  heroSec.scrollIntoView({
    behavior: "smooth",
  });
};

scrollElem.addEventListener("click", scrollToTop);

// ===============================================
//               Animated number counter
// ===============================================

let workSec = document.querySelector(".section-work-data");

const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    let conterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;

    conterNum.forEach((element) => {
      const updateNumber = () => {
        const targetNum = parseInt(element.dataset.number);
        const initialNum = parseInt(element.textContent);
        const incrementNum = Math.trunc(targetNum / speed);

        if (initialNum < targetNum) {
          element.textContent = `${initialNum + incrementNum}+`;
          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
    observer.unobserve(workSec);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSec);
