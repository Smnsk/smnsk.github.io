let links = {
    "Mapa": {
        src: "https://www.google.com/maps/d/embed?mid=1i1lb3pUXA4C-26mH9xq3Df6Bl8Pksy2G",
        show: true,
        colorMap: ""
    },
    "Mapa1":{
        src: "https://www.google.com/maps/d/embed?mid=1-oZZ7cLefDgucYebi4eCJVrMVQbfEm-H",
        show: false,
        colorMap: "orange"

    },
    "Mapa2":{
       src: "https://www.google.com/maps/d/embed?mid=1ZERcwWPgGHShkzmciEeVzRLYjEMQcQ-u", 
       show: false,
       colorMap: "rgb(6, 132, 216)" 
    }    
}

let app = new Vue({
    el: '.page',
    data: {
      links: links,
      load: true,
      show: "https://www.google.com/maps/d/embed?mid=1i1lb3pUXA4C-26mH9xq3Df6Bl8Pksy2G"
    },
    methods: {
      showMap(event, i){
        
        let x = this.links[i]
        this.show = x.src
        this.load = true
        setTimeout(() => this.load = false, 3000)
      }      
    },
    mounted() {
      setTimeout(() => this.load = false, 5000)
    }
  })