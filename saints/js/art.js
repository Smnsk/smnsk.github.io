let cssr = [
  {
    titul: "Redemptorists",
    name: ["St. Alphonsus Liguori", 
           "St. Gerard Majella",
           "St. Clement Hofbauer",
           "St. John Neumann",
           "Bl. Peter Donders",
           "Bl. Francis Xavier Seelos",
           "Bl. Kaspar Stanggassinger",
           "Bl. Gennaro Sarnelli",
           "Bl. Methodius Trčka",
           "Ukranian Martyrs",
           "Spanish Martyrs"
          ],
    text: [ /*html*/`<p><b> * 27 September 1696</b></p>
    <p><i class="material-icons" style="font-size:16px; color: #016fba">place</i> Marianella </p>
    <p><i class="material-icons">family_restroom</i> Giuseppe Liguori, Anna Cavalieri </p>
    `, 
    /*html*/`<p><b>2 NEDEĽA</b></p>
    <p><b>Omša</b> z nedele, Krédo, pf adventná I. </p>
    <p><b>Č 1:</b> Iz 63, 16d-17. 19de; 64, 2c-7</p>
    <p><b>Ž:</b> 80, 2+3bc. 15-16. 18-19;</p>
    <p><b>Č 2:</b> 1 Kor 1, 3-9;</p>
    <p><b>Ev:</b> Mk 13, 33-37;</p>`

    ]      
  },
  {
    titul: "Redemptoristi"
  },
  {
    titul: "Redemptoristé"
  }
]  

Vue.createApp({
  data() {
       return {
         show: false,
         num: 0,
         cssr: cssr,
         cur: 0,
         box: "St. Alphonsus Liguori",
         text: /*html*/`<p><b> * 27 September 1696</b></p>
         <p><i class="material-icons" style="font-size:16px; color: #016fba">place</i> Marianella </p>
         <p><i class="material-icons">family_restroom</i> Giuseppe Liguori, Anna Cavalieri </p>`
        }       
     },
  methods:{
   change(i){
       this.cur = i
       let a = this.cssr[this.num]
       this.box = a.name[i]
       this.text = a.text[i]        
   }
 }
}).mount('.page')