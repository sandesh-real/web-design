
/*********************javascript pupop ko laagi */
var toggleFunction = ()=>{
          
    document.querySelector('.popup').classList.toggle('select');
    document.querySelector('.main-nav-container').classList.remove('main__nav--lists-click');
}
var element=document.querySelectorAll('#main-register');
 element.forEach((e)=>e.addEventListener('click',toggleFunction));
  document.querySelector('.close').addEventListener('click',toggleFunction);
 

//   responsive navbar
document.querySelector('.small-nav').addEventListener('click',()=>{
document.querySelector('.main-nav-container').classList.toggle('main__nav--lists-click');
});

