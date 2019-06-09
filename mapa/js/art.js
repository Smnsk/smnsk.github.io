var links = {
    "Mapa 1": {
        src: "https://www.google.com/maps/d/embed?mid=1i1lb3pUXA4C-26mH9xq3Df6Bl8Pksy2G",
        show: true,
    },
    "Mapa 2":{
        src: "https://www.google.com/maps/d/embed?mid=1-oZZ7cLefDgucYebi4eCJVrMVQbfEm-H",
        show: false,

    },
    "Mapa 3":{
       src: "https://www.google.com/maps/d/embed?mid=1ZERcwWPgGHShkzmciEeVzRLYjEMQcQ-u", 
       show: false, 
    }    
}


var app = new Vue({
    el: '.page',
    data: {
      links: links,
      show: "https://www.google.com/maps/d/embed?mid=1i1lb3pUXA4C-26mH9xq3Df6Bl8Pksy2G"
    },
    methods: {
      showMap(){
        let y = event.target.textContent
        let x = this.links[y]
        this.show = x.src
      }
    }
  })