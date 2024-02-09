const d = new Date()

let m = d.getMonth()
let y = d.getFullYear()

let text1 = document.getElementById("text1")
let cc = document.getElementById("cc").innerHTML = `<i class="fa-regular fa-copyright"></i> Redemptoristi ${y}`

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  text1.style.top = .9 * scrollY + 100 +'px';
});

let imgScale = document.getElementById("img")

imgScale.style.backgroundImage =  `url('img/${m}.png')`

