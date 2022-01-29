let date = new Date(),
    day = date.toISOString().slice(0, 10),
    m = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    d = ["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"],
    app = new Vue({
    el: '.page',
    data: {
      appName: 'Lekcionár',
      lc: lc,
      date: new Date(),
      info: false,
      load: true,
      showHead: true,
      showNav: false,
      pTop: "90px",
      fontSize: 1,
      moon: "",
      active: "",
      textColor: "",
      bgColor: ``,
      page: {
        titul: `${d[(date.getDay() || 7)-1]} ${date.getDate()}. ${m[date.getMonth()].toLocaleLowerCase()} ${date.getFullYear()};`,
        name: ``,
        index: `<h2> Vyberte datum od 2.3.2022 do 26.11.2022 </h2>`,
        lesson: ``,
      }
    }, 
  computed:{
    currWeekDay(){
      return this.date.getDay()
    },
    currYear() {
      return this.date.getFullYear()
    },
    currMonth() {
      return this.date.getMonth()   
    },
    currDay(){
      if(
        this.date.getMonth() === date.getMonth() &&
        this.date.getFullYear() === date.getFullYear()
      )
       { return date.getDate() }
    },
    daysInMonth(){
      return new Date(this.currYear, this.currMonth + 1, 0).getDate()
    },
    lastDays(){
      return new Date(this.currYear, this.currMonth, 0).getDate()
    },
    nextDays(){
      return new Date(this.currYear, this.currMonth, 0).getDay()
    },
    prevMonth(){
      return( this.nextDays && Array.from(
        { length: this.nextDays},
        (v, k) => this.lastDays - this.nextDays + (k + 1)
      ) )
    },
    nextMonthDays(){
      return 42 - (this.daysInMonth + this.nextDays)
    },
    
    },
  methods:{
    dbClick(){
      this.showHead = !this.showHead
      this.showHead == true ? this.pTop = "85px" : this.pTop = "45px"
    },
    home(){
      this.date = new Date()
      l = this.date
      this.page.titul = `${d[(l.getDay() || 7)-1]} ${l.getDate()}. ${m[l.getMonth()].toLocaleLowerCase()} ${l.getFullYear()};`
      lc[day] == undefined ? this.page.name = " " : this.page.name = `${lc[day].name}`
      lc[day] == undefined ? this.page.index = `<h2> Vyberte datum od 2.3.2022 do 26.11.2022 </h2>` : this.page.index = `${lc[day].index}`
      lc[day] == undefined ? this.page.lesson = " " : this.page.lesson = `${lc[day].lesson}`
      lc[day] == undefined ? this.bgColor = " " : this.bgColor = `${lc[day].bgColor}`
    },
    toggle(){
    this.moon = !this.moon
    localStorage.active = this.active
    localStorage.textColor = this.textColor
    },
    lastMonth(){
      this.date = new Date(this.currYear, this.currMonth - 1)
    },
    nextMonth(){
      this.date = new Date(this.currYear, this.currMonth + 1)
    },
    lDay(){
       b = this.date
       b.setDate(b.getDate() - 1)
       c = b.toISOString().slice(0, 10)
       this.page.titul = `${d[(b.getDay() || 7)-1]} ${b.getDate()}. ${m[b.getMonth()].toLocaleLowerCase()} ${b.getFullYear()};`
       this.page.name = lc[c].name
       this.page.index = lc[c].index  
       this.page.lesson = lc[c].lesson  
       this.bgColor = lc[c].bgColor
    },
    nDay(){
      b = this.date
      b.setDate(b.getDate() + 1)
      c = b.toISOString().slice(0, 10)
      this.page.titul = `${d[(b.getDay() || 7)-1]} ${b.getDate()}. ${m[b.getMonth()].toLocaleLowerCase()} ${b.getFullYear()};`
      this.page.name = lc[c].name
      this.page.index = lc[c].index  
      this.page.lesson = lc[c].lesson  
      this.bgColor = lc[c].bgColor 
    },
    setDate(day){
      a = new Date(Date.UTC(this.currYear, this.currMonth, day))
      this.date = a
      b = a.toISOString().slice(0, 10)
      this.page.titul = `${d[(a.getDay() || 7)-1]} ${day}. ${m[this.currMonth].toLocaleLowerCase()} ${a.getFullYear()};`
      this.page.name = lc[b].name
      this.page.index = lc[b].index  
      this.page.lesson = lc[b].lesson  
      this.bgColor = lc[b].bgColor
    },
    fontNormal(){
      this.fontSize = 1
      localStorage.font = this.fontSize
     },
     fontMinus(){
      this.fontSize -= 0.10
      localStorage.font = this.fontSize
     },
     fontPlus(){
      this.fontSize += 0.10
      localStorage.font = this.fontSize
     },  
  },
  mounted() {
  setTimeout(() => this.load = false, 5000)
  if (localStorage.active) {
    this.active = localStorage.active
    this.textColor = localStorage.textColor
    this.fontSize = localStorage.font
  }
    this.page.name = `${lc[day].name}`
    this.page.index = `${lc[day].index}`
    this.page.name = `${lc[day].name}`
    this.page.lesson = `${lc[day].lesson}`
    this.bgColor = `${lc[day].bgColor}`
    }, 
  })


 