let wares = [
  { war: "img1.jpg"},
  { war: "img2.jpg"},
  { war: "img3.jpg"},
  { war: "img4.jpg"},
  { war: "img5.jpg"},
]

let app = new Vue({
  el: '.page',
  data: {
    show: true,
    fb: 'https://www.facebook.com/kotvaminimarket',
    phone: '+421 905 719 213',
    wares: wares,
  }
})