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


let dark = document.querySelector(".moon")

dark.onclick= function(){

 document.body.classList.toggle("dark")
 if (document.body.classList.contains("dark")){
   dark.src = "images/sun.png"

 }else{
   dark.src = "images/moon.png"
 }
  
}
