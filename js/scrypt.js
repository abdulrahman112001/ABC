// Selectors
const menuBtn = document.querySelector('.menu-btn'),
  closeBtn = document.querySelector('.close-btn'),
  navbar = document.querySelector('.navbar'),
  stickyNav = document.querySelector('nav');

// Events
menuBtn.addEventListener('click', () => {
  navbar.classList.add('active');
  menuBtn.style.opacity = '0';
});

closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
  menuBtn.style.opacity = '1';
});

window.onscroll = function () {
  stickyNav.classList.toggle('sticky', this.scrollY > 20);
};

window.onload = ()=> {
  if(scrollY > 20){
    stickyNav.classList.toggle('sticky', this.scrollY > 20);
  }
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: true
    }
  }

})
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 500,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})


// ------------------

const btn_project_web = document.getElementById('btn_project_web'),
  btn_project_desing = document.getElementById('btn_project_desing'),
  btn_project_mobile = document.getElementById('btn_project_mobile'),
  btn_project_ui = document.getElementById('btn_project_ui'),
  btn_project_motion = document.getElementById('btn_project_motion');

const projects_web = document.getElementById('projects_web'),
  projects_desing = document.getElementById('projects_desing'),
  projects_mobile = document.getElementById('projects_mobile'),
  projects_ui = document.getElementById('projects_ui'),
  projects_motion = document.getElementById('projects_motion');


btn_project_web.addEventListener('click', () => {
  projects_web.style.display = 'block'
  projects_desing.style.display = 'none'
  projects_mobile.style.display = 'none'
  projects_ui.style.display = 'none'
  projects_motion.style.display = 'none'
})
btn_project_desing.addEventListener('click', () => {
  projects_web.style.display = 'none'
  projects_desing.style.display = 'block'
  projects_mobile.style.display = 'none'
  projects_ui.style.display = 'none'
  projects_motion.style.display = 'none'
})
btn_project_mobile.addEventListener('click', () => {
  projects_desing.style.display = 'none'
  projects_web.style.display = 'none'
  projects_mobile.style.display = 'block'
  projects_ui.style.display = 'none'
  projects_motion.style.display = 'none'
})
btn_project_ui.addEventListener('click', () => {
  projects_desing.style.display = 'none'
  projects_web.style.display = 'none'
  projects_mobile.style.display = 'none'
  projects_ui.style.display = 'block'
  projects_motion.style.display = 'none'
})
btn_project_motion.addEventListener('click', () => {
  projects_desing.style.display = 'none'
  projects_web.style.display = 'none'
  projects_mobile.style.display = 'none'
  projects_ui.style.display = 'none'
  projects_motion.style.display = 'block'
})
// ========================
AOS.init({
  duration: 2000,
  once: true,
});

// ============================== dark mode

let dark = document.querySelector(".moon")

dark.onclick= function(){

 document.body.classList.toggle("dark")
 if (document.body.classList.contains("dark")){
   dark.src = "images/sun.png"

 }else{
   dark.src = "images/moon.png"
 }
  
}
// =====================
