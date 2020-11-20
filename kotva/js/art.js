let wares = [
  { war: "img6.jpg"},
  { war: "img5.jpg"},
  { war: "img4.jpg"},
  { war: "img3.jpg"},
  { war: "img2.jpg"},
  { war: "img1.jpg"},
]
let className = [
  {cls: "fas fa-shopping-cart"},
  {cls: "fas fa-map-marker-alt"}
]

let app = new Vue({
  el: '.page',
  data: {
    show: true,
    fb: 'https://www.facebook.com/kotvaminimarket',
    phone: '+421 905 654 213',
    wares: wares,
    names: className,
    cur: 0,
  },
  methods:{
    clr(i){
     this.cur = i
     this.cur == 0 ? this.show = true : this.show = false
    }
  }
})