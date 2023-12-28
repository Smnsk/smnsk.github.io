let text1 = document.getElementById("text1")

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  console.log(scrollY)
  text1.style.top = .9 * scrollY + 100 +'px';
});