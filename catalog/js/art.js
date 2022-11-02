let lib = [
  {
    titul: "Беркут — птах гірський",
    name: "Зубанич Ф.І.",
    code: "545421",
  },
  {
    titul: "Довколосвітня мандрівка у пошуках України",
    name: "Зубанич Ф.І.",
    code: "545427",
  },
  {
    titul: "Полонина",
    name: "Зубанич Ф.І.",
    code: "545429",
  },
  {
    titul: "",
    name: "",
    code: "",
  },
]

const { createApp } = Vue
createApp({
  data() {
    return {
      name: "Каталог книг Великоберезнянської центральної бiблiотеки",
      lib: lib,
      search: "",
      place: "",
      load: true,
    }
  },
  computed:{
    searchFilter(){
      return this.lib.filter((stat)=>{
        return stat.titul.match(this.search) + stat.name.match(this.search)
      })
  },
  searchShow(){
    if(this.search.length > 0){
      return this.show = true
   }
  }
},
mounted(){
  setTimeout(() => this.load = false, 6500)
}
 
}).mount('.lib')