let cssr = {
  CSsR: {
    Europe: [
      {
        loc: "Bratislava-Praha",
        web: "https://redemptoristi.sk/",
        fb: "https://www.facebook.com/Redemptoristi",
        in: "",
      },
      {
        loc: "Dublin",
        web: "http://www.redemptorists.ie",
        fb: "",
        in: "",
      },
      {
        loc: "Francia",
        web: "www.redemptoristes.fr",
        fb: "",
        in: "",
      },
      {
        loc: "Lisbon",
        web: "http://www.cssr.pt",
        fb: "",
        in: "",
      },
      {
        loc: "London",
        web: "http://www.redemptorists.co.uk",
        fb: "",
        in: "",
      },
      {
        loc: "Lviv",
        web: "http://www.cssr.lviv.ua",
        fb: "",
        in: "",
      },
      {
        loc: "Madrid",
        web: "http://www.redentoristas.org",
        fb: "",
        in: "",
      },
      {
        loc: "Michalovce",
        web: "http://redemptoristi.nfo.sk",
        fb: "",
        in: "",
      },
      {
        loc: "Napoli",
        web: "http://www.redentoristinapoletani.it/",
        fb: "",
        in: "",
      },
      {
        loc: "Roma",
        web: "http://www.cssrroma.org",
        fb: "",
        in: "",
      },
      {
        loc: "St. Clemens",
        web: "http://www.stclemens.org",
        fb: "",
        in: "",
      },
      {
        loc: "St. Gerard",
        web: "http://redemptorist.ru",
        fb: "",
        in: "",
      },
      {
        loc: "Vienna-Monaco",
        web: "http://wien-muenchen.redemptoristen.com",
        fb: "",
        in: "",
      },
      {
        loc: "Warszawa",
        web: "https://www.redemptor.pl/",
        fb: "",
        in: "",
      },
    ],
    'America North':[
      {
        loc: "Baltimore",
        web: "https://redemptorists.net",
        fb: "",
        in: "",
      },
      {
        loc: "Canada",
        web: "http://www.redemptoristes.ca",
        fb: "https://www.facebook.com/Yorkton.Redemptorists",
        in: "",
      },
      {
        loc: "Denver",
        web: "http://redemptoristsdenver.org",
        fb: "",
        in: "",
      },
      {
        loc: "Extra Patriam",
        web: "http://dccthaingoai.com",
        fb: "",
        in: "",
      },
    ],
  },
  MSsR:{
    Ukraine: {

    }
  },
  OSsR:{} 
}

Vue.createApp({
  data() {
       return {
         cssr: cssr,
         show: false,
         show2: false,
         cur: 0,
         order: "CSsR"
        }       
     },
  methods:{
    activeOrden(i, k){
      this.cur = i
      this.order = k
    }

 }
}).mount('.page')