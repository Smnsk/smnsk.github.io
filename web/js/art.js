let cssr = {
  CSsR: {
    Eurore: [
      {
        loc: "Bratislava-Praha",
        web: "https://redemptoristi.sk/",
        fb: "https://www.facebook.com/Redemptoristi",
        in: "",
      },
      {
        loc: "Dublin",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Francia",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Lisboa",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "London",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Lviv",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Madrid",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Napoli",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Roma",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Sanctus Clemens",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Vienna-Monaco",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Warszawa",
        web: "",
        fb: "",
        in: "",
      },
    ],
    'America North':[
      {
        loc: "Baltimore",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Canada",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Denver",
        web: "",
        fb: "",
        in: "",
      },
      {
        loc: "Extra Patriam",
        web: "",
        fb: "",
        in: "",
      },
    ],
  },
  MSsR:{},
  OSsR:{} 
}

Vue.createApp({
  data() {
       return {
         cssr: cssr,
         show: false,
         show2: false,
        }       
     },
  methods:{
    conti(){
      this.show2 = !this.show2
    }

 }
}).mount('.page')