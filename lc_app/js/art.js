let date = new Date(),

app = new Vue({
    el: '.page',
    data: {
      appName: 'Lekcionár',
      lc: lc,
      date: date, 
      months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Octóber", "November", "December"],
      dayWeek: ["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"],
      showHead: false,
      showNav: false,
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
    }
    },
  methods:{
    lastMonth(){
      this.date = new Date(this.currYear, this.currMonth - 1)
    },
    nextMonth(){
      this.date = new Date(this.currYear, this.currMonth + 1)
    }
  }  
  })


 