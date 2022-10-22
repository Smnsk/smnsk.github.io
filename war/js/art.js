let war = [
    {
       name: 'Сабов Руслан Миколайович',
       eng: 'Sabov Ruslan',
       birth: '* 02. 11. 1977',
       death: '+ 18. 02. 2015',
       img: 'img/img1.jpg',
       youtube: 'https://youtu.be/p7UV0PX8_Hs'
    },
    {
       name: 'Лозинський Дмитро Вікторович',
       eng: 'Lozynskij Dmytro',
       birth: '* 1986',
       death: '+ 16 квітня 2022',
       img: 'img/img2.jpg',
       youtube: 'https://youtu.be/XsJq0OStJTM'
    },
    {
       name: 'Мурин Михайло Юрійович',
       eng: 'Muryn Mykhailo',
       birth: '* 1983',
       death: '+ 16 квітня 2022',
       img: 'img/img3.jpg',
       youtube: 'https://youtu.be/XsJq0OStJTM'
    },
  
  ]

const { createApp } = Vue

createApp({
  data() {
    return {
      war: war,
      show: true,
      titul: 'Герої Великого Березного, якi поклали життя за Україну',
    }
  },
  methods:{
    toogle(){
      this.show = !this.show
      this.show ? this.titul = 'Герої Великого Березного, якi поклали життя за Україну' : this.titul = 'Heroes of Veliky Berezny, who laid down their lives for Ukraine'
    }
  }
}).mount('.box')