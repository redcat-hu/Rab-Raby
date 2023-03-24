// VARIABLES
var before_loadtime = new Date().getTime();
var mobiMen = false;

// FUNCTIONS
function PreLoader() {
    var aftr_loadtime = new Date().getTime();  
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000;
      var idealLoad = 1.5;
      if (pgloadtime <= idealLoad) {
        bonusLoad = (idealLoad - pgloadtime)*1000;
      } else {
        bonusLoad = 0;
      }
      setTimeout(function(){
        preLoader.remove();
        mainVid();
      }, bonusLoad);
};

function mainVid() {
  if (pgloadtime <= 1.5 && home == true) {
    document.getElementById('media').innerHTML =
    `<video loading="lazy" autoplay loop muted plays-inline poster="${local}img/header.jpg">
    <source src="${local}img/video_1.mp4" type="video/mp4">
    </video>`
  }
}

function MobileMenu() {
  if (mobiMen) {
    mobiMen = false;
    document.getElementById("window_1").style.display = "none";
  } else {
    mobiMen = true;
    document.getElementById("window_1").style.display = "flex";
  }
}

function DarkSwitch() {
  const darkMode = document.querySelector("#darkMode");
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("darkMode", state);
    DarkIconS();
  }
  toggleDarkMode(useDark.matches);
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  darkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkMode");
    DarkIconS();
  });

  function DarkIconS() {
    if (document.documentElement.classList.value == "darkMode") {
      //darkMode.src = "img/sun-fill.svg";
      document.getElementById('darkMode').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    } else {
      //darkMode.src = "img/moon-fill.svg";
      document.getElementById('darkMode').innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  }
}


// MAIN
const navEL = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEL.classList.add('scroll');
    } else if (window.scrollY < 56) {
        navEL.classList.remove('scroll');
    }
});

// CLICK
document.getElementById("darkMode").addEventListener("click", DarkSwitch);
document.getElementById("mobile_nav").addEventListener("click", MobileMenu);
document.getElementById("mobile_bg").addEventListener("click", MobileMenu);

// PRELOADER
var preLoader = document.getElementById('pre_loader');
window.addEventListener("load", PreLoader);
window.addEventListener("load", DarkSwitch);