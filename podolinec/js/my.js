const d = new Date()

let m = d.getMonth()

let text1 = document.getElementById("text1")

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  text1.style.top = .9 * scrollY + 100 +'px';
});

let imgScale = document.getElementById("img")

imgScale.style.backgroundImage =  `url('img/${m}.png')`

function imgScal(){
   imgScale.classList.toggle("scale")
   
}
