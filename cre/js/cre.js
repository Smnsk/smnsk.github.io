let links = {
  News:{
    url: "https://www.cssr.news/",
  },
  "Bratislava-Prague":{
    url:"https://redemptoristi.sk"
  },
  Dublin:{
    url:"https://www.redemptorists.ie"
  },
  Lisbon:{
    url:"https://www.cssr.pt"
  },
  Lviv:{
    url:"https://www.cssr.lviv.ua/"
  },
  "Lyon-Paris":{
    url:"https://www.redemptoristes.fr"
  },
  Madrid:{
    url:" https://www.redentoristas.org"
  },
  Michalovce:{
    url:"http://www.redemptoristi.nfo.sk/"
  },
  Rome:{
    url:"https://www.cssrroma.org/"
  },
  "Vienna-Munich":{
    url:"https://wien-muenchen.redemptoristen.com"
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