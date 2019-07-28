let links = {
  News:{
    url: "http://www.cssr.news/",
  },
  CRE:{
    url:"http://www.cssr-europe.com/"
  },
  "Bratislava-Prague":{
    url:"http://redemptoristi.sk"
  },
  Dublin:{
    url:"http://www.redemptorists.ie"
  },
  Lisbon:{
    url:"http://www.cssr.pt"
  },
  Lviv:{
    url:"https://www.cssr.lviv.ua/"
  },
  "Lyon-Paris":{
    url:"http://www.redemptoristes.fr"
  },
  Madrid:{
    url:" http://www.redentoristas.org"
  },
  Michalovce:{
    url:"http://www.redemptoristi.nfo.sk/"
  },
  Naples:{
    url:"http://www.redentoristinapoletani.it/"
  },
  Rome:{
    url:"https://www.cssrroma.org/"
  },
  "St. Clement":{
    url:"http://www.stclemens.org/"
  },
  "St. Gerard":{
    url:"http://redemptorist.ru"
  },
  "Vienna-Munich":{
    url:"http://wien-muenchen.redemptoristen.com"
  },
}

let app = new Vue({
    el: '.page',
    data: {
      links: links,
      showMenu: true, 
      url: "http://www.cssr.news/",
    },
    methods:{
      newLink(event, i){
        let link = this.links[i]
        this.url = link.url
      }
    }
  })