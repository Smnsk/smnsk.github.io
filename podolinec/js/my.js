let text1 = document.getElementById("text1")

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  text1.style.top = .9 * scrollY + 100 +'px';
});



function imgScal(){
   let imgScale = document.getElementById("img")
   imgScale.classList.toggle("scale")
}
