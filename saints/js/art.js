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
    text: [ /*html*/`<p><b> * 27 September 1696</b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Marianella </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Giuseppe Liguori, Anna Cavalieri </p>
    <p><b> ✝ 1 August 1787</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Pagani </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 15 September 1816, Pope Pius VII </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: red">favorite</i> 26 May 1839, Pope Gregory XVI </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 1 August </p>
    `, 
    /*html*/`<p><b> * 9 April 1726</b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Muro Lucano </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Domenico Maiella, Benedetta Galella </p>
    <p><b> ✝ 16 October 1755</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Materdomini </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 29	January 1893, Pope Pius VII </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: red">favorite</i> 11 December 1904, Pope Pius X </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 16 October </p>
    `,
    /*html*/`<p><b> * 26 December 1751</b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Taßwitz </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Paul Hofbauer, Maria Steer</p>
    <p><b> ✝ 15 March 1820</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Vienna </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 29 January 1888, Pope Leo XIII </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: red">favorite</i> 20 May 1909, Pope Pius X </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 15 March </p>
    `,
    /*html*/`<p><b> * 28 March 1811 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Prachatitz </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Philip Neumann, Agnes Lepší</p>
    <p><b> ✝ 5 January 1860</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Philadelphia </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 13 October 1963, Pope Paul VI </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: red">favorite</i> 19 June 1977, Pope Paul VI </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 5 January</p>
    `,
    /*html*/`<p><b> * 27 October 1809 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Tilburg </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Arnold Donders, Petronella van den Brekel</p>
    <p><b> ✝ 14 January 1887</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Batavia</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 23 May 1982, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 14 January</p>
    `,
    /*html*/`<p><b> * 11 January 1819 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Füssen </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Mang Seelos, Franziska Schwarzenbach</p>
    <p><b> ✝ 4 October 1867</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> New Orleans </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 9 April 2000, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 5 October </p>
    `,
    /*html*/`<p><b> * 12 January 1871 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Berchtesgaden</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Kaspar Stanggassiner, Crescencia Hamberger</p>
    <p><b> ✝ 26 September 1899</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Gars am Inn </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 24 April 1988, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 26 September </p>
    `,
    /*html*/`<p><b> * 12 September 1702 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Naples</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Angelo Sarnelli, Caterina Scoppa</p>
    <p><b> ✝ 30 June 1744</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Naples </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 12 May 1996, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 30 June </p>
    `,
    /*html*/`<p><b> * 6 July 1886 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Frýdlant nad Ostravicí</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Tomas Trčka, Frantiska Sterbova</p>
    <p><b> ✝ 23 March 1959</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Leopoldov </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 4 November 2001, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 23 March </p>
    `,
    /*html*/`<div>
    <div>
    <p><b> Nicholas Charnetsky </b></p>
    <p><b> * 14 December 1884 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Semakivtsi</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Alexander and Parasceva Charnetsky</p>
    <p><b> ✝ 2 April 1959</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Lviv </p>
    </div>
    <div>
    <p><b> Vasyl Velychkovskyi </b></p>
    <p><b> * 1 June 1903 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Stanislaviv</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Volodymyr and Anna Velychkovsky</p>
    <p><b> ✝ 30 June 1973</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Winnipeg </p>
    </div>
    <div>
    <p><b> Ivan Ziatyk </b></p>
    <p><b> * 26 December 1899 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Odrekhova</p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Stefan and Maria Ziatyk</p>
    <p><b> ✝ 17 May 1952</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Taishet district </p>
    </div>
    <div>
    <p><b> Zynoviy Kovalyk </b></p>
    <p><b> * 18 August 1903 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Ivachiv Horishniy</p>
    <p><b> ✝ April 1941</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Lviv </p>
    </div>
    </div>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 27 June 2001, Pope John Paul II </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 28 June </p>
    `, 
    /*html*/`<div>
    <div>
    <p><b> José Javier Gorosterrazu Jaunarena</b></p>
    <p><b> * 7 August 1877 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Urroz</p>
    <p><b> ✝ 10 August 1936</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca </p>
    </div>
    <div>
    <p><b> Ciriaco Olarte Y Pérez Mendiguren </b></p>
    <p><b> * 8 February 1893 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Gomecha</p>
    <p><b> ✝ 31 July 1936</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca</p>
    </div>
    <div>
    <p><b> Miguel Goñi Ariz </b></p>
    <p><b> * 27 April 1902 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Imarcoain</p>
    <p><b> ✝ 31 August 1936</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca </p>
    </div>
    <div>
    <p><b> Julián Pozo Y Ruiz de Samaniego </b></p>
    <p><b> * 7 January 1903 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Payueta </p>
    <p><b> ✝ 9 August 1936</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca </p>
    </div>
    <div>
    <p><b> Pedro Romero Espejo </b></p>
    <p><b> * 28 April 1871. </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Pancorbo </p>
    <p><b> ✝ 29 May 1938</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca </p>
    </div>
    <div>
    <p><b> Victor Calvo Lozano </b></p>
    <p><b> * 23 December 1896 </b>
    <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Horche </p>
    <p><b> ✝ 10 August 1936</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Cuenca </p>
    </div>
    </div>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 13 October 2013, Pope Benedict XVI </p>
    <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 6 November</p>
    `, 
           
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
         text: /*html*/`<p><b> * 27 September 1696</b>
         <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Marianella </p>
         <p><i class="material-icons" style="font-size:16px; margin-right: 5px">family_restroom</i> Giuseppe Liguori, Anna Cavalieri </p>
         <p><b> ✝ 1 August 1787</b> <i class="material-icons" style="font-size:16px; color: #016fba">place</i> Pagani </p>
         <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: gold">star</i> 15 September 1816, Pope Pius VII </p>
         <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: red">favorite</i> 26 May 1839, Pope Gregory XVI </p>
         <p><i class="material-icons" style="font-size:16px; margin-right: 5px; color: pink">cake</i> 1 August </p>
         `
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