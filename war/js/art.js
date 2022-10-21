let war = [
    {
       name: 'Сабов Руслан Миколайович',
       eng: 'Sabov Ruslan',
       birth: '* 02. 11. 1977',
       death: '+ 18. 02. 2015'
    },
    {
      name: 'Сабо Русла Миколайович',
      eng: 'Sabo Rusla',
      birth: '* 02. 11. 1977',
      death: '+ 18. 02. 2016'
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