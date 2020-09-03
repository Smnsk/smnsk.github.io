let date = new Date(),
    day = date.toISOString().slice(0, 10),
    m = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    d = ["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"],
app = new Vue({
    el: '.page',
    data: {
      appName: 'Lekcionár',
      lc:lc,
      date: date,
      showHead: true,
      showNav: false,
      pTop: "50px",
      moon: "",
      active: "",
      textColor: "",
      bgColor: ``,
      page: {
        titul: `${d[(date.getDay() || 7)-1]} ${date.getDate()}. ${m[date.getMonth()].toLocaleLowerCase()} ${date.getFullYear()};`,
        name: ``,
        index: `<h1>Vyberte dátum od 29. 11. 2020 do 31. 12. 2021</h1>`,
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
      this.showHead == true ? this.pTop = "50px" : this.pTop = 0

    },
    home(){
      this.page.name = `${lc[day].name}`
      this.page.index = `${lc[day].index}`
      this.page.name = `${lc[day].name}`
      this.page.lesson = `${lc[day].lesson}`
      this.bgColor = `${lc[day].bgColor}`
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
    setDate(day){
      a = new Date(Date.UTC(this.currYear, this.currMonth, day))
      b = a.toISOString().slice(0, 10)
      this.page.titul = `${d[(a.getDay() || 7)-1]} ${day}. ${m[this.currMonth].toLocaleLowerCase()} ${a.getFullYear()};`
      this.page.name = lc[b].name
      this.page.index = lc[b].index  
      this.page.lesson = lc[b].lesson  
      this.bgColor = lc[b].bgColor
    },
  },
  mounted() {
    if (localStorage.active) {
      this.active = localStorage.active
      this.textColor = localStorage.textColor
    }
    this.page.name = `${lc[day].name}`
    this.page.index = `${lc[day].index}`
    this.page.name = `${lc[day].name}`
    this.page.lesson = `${lc[day].lesson}`
    this.bgColor = `${lc[day].bgColor}`
    }, 
  })


 