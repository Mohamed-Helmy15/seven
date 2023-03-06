// start customize nav link
let links = document.querySelectorAll(".header nav .links ul li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// end customize nav link

// start customize links
let lis = document.querySelectorAll(".portfolio-cont .links ul li");
let imgDivs = document.querySelectorAll(".portfolio-cont .portfolio-img .img");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  li.addEventListener("click", (e) => {
    imgDivs.forEach((div) => {
      div.style.opacity = 0;
      div.style.transform = "translateX(-100px)";
      setTimeout(() => {
        div.style.display = "none";
      }, 400);
    });
    document.querySelectorAll(e.target.dataset.link).forEach((img) => {
      img.style.opacity = 1;

      img.style.transform = "translateX(0px)";
      setTimeout(() => {
        img.style.display = "block";
      }, 400);
    });
  });
});
// end customize links

// start customize photo gallery
let images = document.querySelectorAll(
  ".portfolio-cont .portfolio-img .img img"
);

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.classList.add("overlay");
    let contain = document.createElement("div");
    contain.className = "wrapper";
    let newImg = document.createElement("img");
    newImg.src = e.target.src;
    contain.append(newImg);
    let xMark = document.createElement("i");
    xMark.className = "fa-solid fa-xmark icon";
    contain.append(xMark);
    div.append(contain);
    document.body.append(div);
  });
});

window.onclick = function (e) {
  if (e.target.classList.contains("fa-solid")) {
    document.querySelector(".overlay").remove();
  }
};
// end customize photo gallery

// start customize window scrolling
let heading = document.querySelectorAll(".main .main-heading");
let p = document.querySelectorAll(".main .main-heading + p");
let scrollBtn = document.querySelector(".scroll");
// global window scroll function
window.onscroll = function () {
  // start button scroll to top
  if (window.pageYOffset >= 400) {
    scrollBtn.classList.add("in");
  } else {
    scrollBtn.classList.remove("in");
  }
  // end button scroll to top

  // start home header active
  if (window.scrollY <= 575) {
    links.forEach((link) => {
      link.classList.remove("active");
      links[0].classList.add("active");
    });
  }
  // end home header active

  // start service section
  let serviceSec = document.querySelector(".services");
  if (
    window.scrollY >= serviceSec.offsetTop - 200 &&
    window.scrollY <= serviceSec.offsetTop + 600
  ) {
    serviceSec.style.cssText = "opacity:1; transform:translateY(0px);";
    links.forEach((link) => {
      link.classList.remove("active");
      links[1].classList.add("active");
    });
    heading[0].classList.add("heading-appear");
    p[0].classList.add("heading-appear");
  } else {
    serviceSec.style.cssText = "opacity:0; transform:translateY(20px);";
  }
  // end service section

  // start portfolio section
  let portfolioSec = document.querySelector(".portfolio");
  if (window.scrollY >= portfolioSec.offsetTop - 200) {
    links.forEach((link) => {
      link.classList.remove("active");
      links[2].classList.add("active");
    });
    heading[1].classList.add("heading-appear");
    p[1].classList.add("heading-appear");
  }
  if (window.scrollY >= portfolioSec.offsetTop + 50) {
    imgDivs.forEach((img) => {
      img.style.transform = "scale(1)";
    });
  }
  // end portfolio section

  // start about section
  let aboutSec = document.querySelector(".about");
  if (window.scrollY >= aboutSec.offsetTop - 200) {
    links.forEach((link) => {
      link.classList.remove("active");
      links[3].classList.add("active");
    });
  }
  // end about section

  // start team section
  let teamSec = document.querySelector(".team");
  if (window.scrollY >= teamSec.offsetTop - 300) {
    teamSec.style.cssText = "opacity: 1; transform: translateY(0);";
    setTimeout(() => {
      heading[2].classList.add("heading-appear");
      p[2].classList.add("heading-appear");
    }, 500);
  }
  // end team section

  // start news section
  let newsSec = document.querySelector(".news");
  let newsBoxes = document.querySelectorAll(".news-box");
  if (window.scrollY >= newsSec.offsetTop - 500) {
    setTimeout(() => {
      newsBoxes[0].style.cssText = " transform: translateX(0);";
    }, 80);
    setTimeout(() => {
      newsBoxes[1].style.cssText = " transform: translateX(0);";
    }, 160);
    setTimeout(() => {
      newsBoxes[2].style.cssText = " transform: translateX(0);";
    }, 240);
  }

  if (window.scrollY >= newsSec.offsetTop - 200) {
    links.forEach((link) => {
      link.classList.remove("active");
      links[4].classList.add("active");
    });
    heading[3].classList.add("heading-appear");
    p[3].classList.add("heading-appear");
  }
  // end news section

  // start contact section
  let contactSec = document.querySelector(".contact");
  if (window.scrollY >= contactSec.offsetTop - 200) {
    links.forEach((link) => {
      link.classList.remove("active");
      links[5].classList.add("active");
    });
    heading[4].classList.add("heading-appear");
    p[4].classList.add("heading-appear");
  }
  if (window.scrollY >= contactSec.offsetTop + 200) {
    let icons = document.querySelectorAll(".icons div");
    setTimeout(() => {
      icons[0].style.transform = "scale(1)";
    }, 100);
    setTimeout(() => {
      icons[1].style.transform = "scale(1)";
    }, 200);
    setTimeout(() => {
      icons[2].style.transform = "scale(1)";
    }, 300);
  }
  // end contact section

  // start footer
  let footSec = document.querySelector("footer");
  if (window.scrollY >= footSec.offsetTop - 500) {
    let icons = document.querySelectorAll("footer .icons i");
    setTimeout(() => {
      icons[0].style.transform = "scale(1)";
    }, 100);
    setTimeout(() => {
      icons[1].style.transform = "scale(1)";
    }, 200);
    setTimeout(() => {
      icons[2].style.transform = "scale(1)";
    }, 300);
    setTimeout(() => {
      icons[3].style.transform = "scale(1)";
    }, 400);
    setTimeout(() => {
      icons[4].style.transform = "scale(1)";
    }, 500);
    setTimeout(() => {
      icons[5].style.transform = "scale(1)";
    }, 600);
  }
  // end footer
};
