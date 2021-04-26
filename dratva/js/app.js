let toggle = false;
let flag = document.getElementById("flag");
flag.style.backgroundImage = "url('./img/sk.svg')"

function Toggle(){
  if(toggle = !toggle){
    flag.style.backgroundImage = "url('./img/ua.svg')";
    (myDiagram.model = model_sk)
  }
  else{
    flag.style.backgroundImage = "url('./img/sk.svg')";
     (myDiagram.model = model)}
}


let $ = go.GraphObject.make;

let myDiagram =
  $(go.Diagram, "page",
    {
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout,
                { angle: 90, layerSpacing: 35 })
    });

// the template we defined earlier
myDiagram.nodeTemplate =
  $(go.Node, "Auto", {background: "transparent", width: 300},
  $(go.Shape, { fill: "transparent", stroke: "tomato", strokeWidth: 3}),
  $(go.Panel, "Horizontal",
        { stretch: go.GraphObject.Fill, margin: 0.5 },  
  $(go.Panel, "Spot",
        { isClipping: true, margin: 10},
        $(go.Shape, "Circle", { width: 55,} ),
        $(go.Picture, "Image",
          { width: 45, height: 45, background: "green" },
          new go.Binding("source")
         )
      ),
  $(go.Panel, "Vertical", {width: 220},
  $(go.TextBlock, {margin: 6, stroke: "white", font: "bold 16px sans-serif"},
    new go.Binding("text", "name")),
  $(go.TextBlock, { stroke: "white", font: "bold 14px sans-serif"},
    new go.Binding("text", "title")),  
    ),  
  ),
  );

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
  $(go.Link,
    { routing: go.Link.Orthogonal, corner: 200 },
    $(go.Shape, // the link's path shape
      { strokeWidth: 3, stroke: "gray",}));
     

let model = $(go.TreeModel);
model.nodeDataArray =
[
{"key":1,"name":"Йосип Дратва","title":"* 19.3.1894 - ...", "source": "./img/man.svg"},
{"key":2,"name":"Юлія Заяць","title":"* 13.5.1894 - + 1934","parent":1, "source": "./img/woman.svg"},
{"key":3,"name":"Анна Затварницька","title":"","parent":1, "source": "./img/woman.svg"},
//Júlia Zajac
{"key":4,"name":"Маргарита Дратва","title":"* 30.10.1918 - ","parent":2, "source": "./img/woman.svg"},
{"key":5,"name":"Єлизавета Дратва","title":"* 30.10.1920 - ","parent":2, "source": "./img/woman.svg"},
{"key":6,"name":"Йосип Дратва","title":"...","parent":2, "source": "./img/man.svg"},
{"key":7,"name":"Юлія Дратва","title":"* 9.1.1925 - + 19.7.2013","parent": 2, "source": "./img/woman.svg"},
{"key":8,"name":"Іван Дратва","title":" - ","parent":2, "source": "./img/man.svg"},
{"key":9,"name":"Марiя Дратва","title":"*/+ 1934","parent":2, "source": "./img/woman.svg"},
//Anna Zatvarnycka
{"key":10,"name":"Марiя Dratva","title":"* 18.5.1936 - + 27.11.2016","parent":3, "source": "./img/woman.svg"},
{"key":11,"name":"Анна Дратва","title":"* 28.2.1939 - + 8.9.","parent":3, "source": "./img/woman.svg"},
//Júlia Dratva
{"key":12,"name":"Габор Густi","title":"*","parent": 7, "source": "./img/man.svg"},
{"key":13,"name":"Григорiй Петряков","title":"* 1918 - + 1986","parent": 7, "source": "./img/man.svg"},
//Ján Dratva
{"key":14,"name":"Магдалина ","title":" ","parent":8, "source": "./img/woman.svg"},
//Mária Dratva
{"key":15,"name":"Павло Станко","title":"* 2.8.1932 - + 15.7.2005","parent":10, "source": "./img/man.svg"},
//Anna Dratva
{"key":16,"name":"Василiй Дратва","title":"* 1963 ","parent":11, "source": "./img/man.svg"},
//Gabor Gusti
{"key":17,"name":"Марта Дратва","title":"*27.1.1944 - + 8.10.2001","parent": 12, "source": "./img/woman.svg"},
//Gregor Petriakov 
{"key":18,"name":"Іван Петряков","title":"* 9.5.1949 - + 6.5.2015","parent": 13, "source": "./img/man.svg"},
{"key":19,"name":"Надiя Петрякова","title":"* 19.7.1951","parent": 13, "source": "./img/woman.svg"},
//Ján Dratva
{"key":20,"name":"Єлизавета Дратва","title":" ","parent":14, "source": "./img/woman.svg"},
{"key":21,"name":"Михаїл Дратва","title":" ","parent":14, "source": "./img/man.svg"},
//Mária Dratva
{"key":22,"name":"Оксана Станко","title":" ","parent":15, "source": "./img/woman.svg"},
{"key":23,"name":"Наталiя Станко","title":" ","parent":15, "source": "./img/woman.svg"},
{"key":24,"name":"Мар'яна Станко","title":"* 4.8.1967","parent":15, "source": "./img/woman.svg"},
//Marta Dratva
{"key":26,"name":"Йосип Талаберчук","title":"*27.1.1939 - + 17.5.2005 ","parent": 17, "source": "./img/man.svg"},
//Ján Petriakov
{"key":27,"name":"Євгенiя Кучеренко","title":"* 1.1.1953 - + 13.11.1993","parent": 18, "source": "./img/woman.svg"},
{"key":28,"name":"Анна Левицька","title":"* 25.5.  ","parent": 18, "source": "./img/woman.svg"},
//Nadia Petriakova
{"key":29,"name":"Володимир Бiлик","title":"* 16.6.1940 - + 25.11.2009","parent": 19, "source": "./img/man.svg"},
//Alžbeta Dratva
{"key":30,"name":"Іван Штибель","title":" ","parent":20, "source": "./img/man.svg"},
//Michal Dratva
{"key":31,"name":"Руслана ","title":" ","parent":21, "source": "./img/woman.svg"},
//Oksana Stanko
{"key":32,"name":"Михаїл Страшкулич","title":" ","parent":22, "source": "./img/man.svg"},
//Natalia Stanko
{"key":33,"name":"Вiктор Калiнiченко","title":" ","parent":23, "source": "./img/man.svg"},
//Marianna Stanko
{"key":34,"name":"Володимир Дем'янчук","title":"* 18.1.1965 ","parent":24, "source": "./img/man.svg"},
//Vasyl Dratva
{"key":35,"name":"Ольга ...","title":"*1961 ","parent":16, "source": "./img/woman.svg"},
//Jozef Talaberčuk
{"key":36,"name":"Мар'яна Талаберчук","title":"*  - + ","parent": 26, "source": "./img/woman.svg"},
//Eugenia Kučerenko
{"key":37,"name":"Юлія Петрякова","title":"* 30.1.1978 ","parent": 27, "source": "./img/woman.svg"},
//Anna Levycka
{"key":38,"name":"Григорiй Петряков","title":"* 28.5.1986 ","parent": 28, "source": "./img/man.svg"},
{"key":39,"name":"Галина Свiтильська","title":"*  ","parent": 28, "source": "./img/woman.svg"},
//Vladimír Bilyk
{"key":40,"name":"Артур Бiлик","title":"* 8.9.1983 - ","parent": 29, "source": "./img/man.svg" },
//Ján Štybeľ
{"key":41,"name":"Василiй Штибель","title":" ","parent":30, "source": "./img/man.svg"},
//Ruslana
{"key":42,"name":"Іван Дратва","title":" ","parent":31, "source": "./img/man.svg"},
{"key":43,"name":"Михаїл Дратва","title":" ","parent":31, "source": "./img/man.svg"},
{"key":44,"name":"Анiта Дратва","title":" ","parent":31, "source": "./img/woman.svg"},
{"key":45,"name":"Андрiй Дратва","title":" ","parent":31, "source": "./img/man.svg"},
{"key":46,"name":"Марина Купiнка","title":" ","parent":31, "source": "./img/woman.svg"},
{"key":47,"name":"Юрiй Купiнка","title":" ","parent":31, "source": "./img/man.svg"},
//Michal Straškulyč
{"key":48,"name":"Роман Страшкулич","title":"* 8.12.1982 ","parent":32, "source": "./img/man.svg"},
{"key":49,"name":"Богдан Страшкулич","title":"* 14.6.1989 ","parent":32, "source": "./img/man.svg"},
//Viktor Kaliničenko
{"key":50,"name":"Василiй Калiнiченко","title":" ","parent":33, "source": "./img/man.svg"},
//Vladimír Denjančuk
{"key":51,"name":"Руслан Дем'янчук","title":"15.6.1995 ","parent":34, "source": "./img/man.svg"},
//Olga
{"key":52,"name":"Владислав Дратва","title":" ","parent":35, "source": "./img/man.svg"},
{"key":53,"name":"Василiй Дратва","title":" ","parent":35, "source": "./img/man.svg"},
//Marianna Talaberčuk
{"key":54,"name":"Василiй Дем'янчук","title":"* 8.5.1963  ","parent": 36, "source": "./img/man.svg"},
//Júlia Petriakova
{"key":55,"name":"Вячеслав Мiронов","title":"* ","parent": 37, "source": "./img/man.svg"},
//Gregor Petriakov
{"key":56,"name":"Сандра Галбова","title":"* 2.11.1988","parent": 38, "source": "./img/woman.svg"},
//Roman Straškulyč
{"key":57,"name":"Васелина Кабацька","title":"* 13.1.1990 ","parent":48, "source": "./img/woman.svg"},
//Ruslan Denjančuk
{"key":58,"name":"Олеся Яцкова","title":"* 27.9.1996 ","parent":51, "source": "./img/woman.svg"},
//Vasyl Demjancuk
{"key":59,"name":"Анiта Дем'янчук","title":"*5.12.1986  ","parent": 54, "source": "./img/woman.svg"},
//Sandra Galbova
{"key":60,"name":"Максим Петряков","title":"* 7.1.2015 ","parent": 56, "source": "./img/man.svg"},
{"key":61,"name":"Алiса Петрякова","title":"* 9.1.2018 ","parent": 56, "source": "./img/woman.svg"},
//Vaselyna ...
{"key":62,"name":"Oлександер Страшкулич","title":" ","parent":57, "source": "./img/man.svg"},
{"key":63,"name":"Дарiя Страшкулич","title":" ","parent":57, "source": "./img/woman.svg"},
//Olesia
{"key":64,"name":"Артем Дем'янчук","title":"* 10.7.2020","parent":58, "source": "./img/man.svg"},
];
myDiagram.model = model;

let model_sk = $(go.TreeModel);
model_sk.nodeDataArray =
[
  {"key":1,"name":"Jozef Dratva","title":"* 19.3.1894 - ...", "source": "./img/man.svg"},
  {"key":2,"name":"Júlia Zajac","title":"* 13.5.1894 - + 1934","parent":1, "source": "./img/woman.svg"},
  {"key":3,"name":"Anna Zatvarnycka","title":"","parent":1, "source": "./img/woman.svg"},
  //Júlia Zajac
  {"key":4,"name":"Margita Dratva","title":"* 30.10.1918 - ","parent":2, "source": "./img/woman.svg"},
  {"key":5,"name":"Alžbeta Dratva","title":"* 30.10.1920 - ","parent":2, "source": "./img/woman.svg"},
  {"key":6,"name":"Jozef Dratva","title":"...","parent":2, "source": "./img/man.svg"},
  {"key":7,"name":"Júlia Dratva","title":"* 9.1.1925 - + 19.7.2013","parent": 2, "source": "./img/woman.svg"},
  {"key":8,"name":"Ján Dratva","title":" - ","parent":2, "source": "./img/man.svg"},
  {"key":9,"name":"Mária Dratva","title":"*/+ 1934","parent":2, "source": "./img/woman.svg"},
  //Anna Zatvarnycka
  {"key":10,"name":"Mária Dratva","title":"* 18.5.1936 - + 27.11.2016","parent":3, "source": "./img/woman.svg"},
  {"key":11,"name":"Anna Dratva","title":"* 28.2.1939 - + 8.9.","parent":3, "source": "./img/woman.svg"},
  //Júlia Dratva
  {"key":12,"name":"Gabor Gusti","title":"*","parent": 7, "source": "./img/man.svg"},
  {"key":13,"name":"Gregor Petriakov","title":"* 1918 - + 1986","parent": 7, "source": "./img/man.svg"},
  //Ján Dratva
  {"key":14,"name":"Magdaléna ","title":" ","parent":8, "source": "./img/woman.svg"},
  //Mária Dratva
  {"key":15,"name":"Pavol Stanko","title":"* 2.8.1932 - + 15.7.2005","parent":10, "source": "./img/man.svg"},
  //Anna Dratva
  {"key":16,"name":"Vasyl Dratva","title":"* 1963 ","parent":11, "source": "./img/man.svg"},
  //Gabor Gusti
  {"key":17,"name":"Marta Dratva","title":"*27.1.1944 - + 8.10.2001","parent": 12, "source": "./img/woman.svg"},
  //Gregor Petriakov 
  {"key":18,"name":"Ján Petriakov","title":"* 9.5.1949 - + 6.5.2015","parent": 13, "source": "./img/man.svg"},
  {"key":19,"name":"Nadia Petriakova","title":"* 19.7.1951","parent": 13, "source": "./img/woman.svg"},
  //Ján Dratva
  {"key":20,"name":"Alžbeta Dratva","title":" ","parent":14, "source": "./img/woman.svg"},
  {"key":21,"name":"Michal Dratva","title":" ","parent":14, "source": "./img/man.svg"},
  //Mária Dratva
  {"key":22,"name":"Oksana Stanko","title":" ","parent":15, "source": "./img/woman.svg"},
  {"key":23,"name":"Natalia Stanko","title":" ","parent":15, "source": "./img/woman.svg"},
  {"key":24,"name":"Marianna Stanko","title":"* 4.8.1967","parent":15, "source": "./img/woman.svg"},
  //Marta Dratva
  {"key":26,"name":"Jozef Talaberčuk","title":"*27.1.1939 - + 17.5.2005 ","parent": 17, "source": "./img/man.svg"},
  //Ján Petriakov
  {"key":27,"name":"Eugenia Kučerenko","title":"* 1.1.1953 - + 13.11.1993","parent": 18, "source": "./img/woman.svg"},
  {"key":28,"name":"Anna Levycka","title":"* 25.5.  ","parent": 18, "source": "./img/woman.svg"},
  //Nadia Petriakova
  {"key":29,"name":"Vladimír Bilyk","title":"* 16.6.1940 - + 25.11.2009","parent": 19, "source": "./img/man.svg"},
  //Alžbeta Dratva
  {"key":30,"name":"Ján Štybeľ","title":" ","parent":20, "source": "./img/man.svg"},
  //Michal Dratva
  {"key":31,"name":"Ruslana","title":" ","parent":21, "source": "./img/woman.svg"},
  //Oksana Stanko
  {"key":32,"name":"Michal Straškulyč","title":" ","parent":22, "source": "./img/man.svg"},
  //Natalia Stanko
  {"key":33,"name":"Viktor Kaliničenko","title":" ","parent":23, "source": "./img/man.svg"},
  //Marianna Stanko
  {"key":34,"name":"Vladimír Demjančuk","title":"* 18.1.1965 ","parent":24, "source": "./img/man.svg"},
  //Vasyl Dratva
  {"key":35,"name":"Olga ...","title":"*1961 ","parent":16, "source": "./img/woman.svg"},
  //Jozef Talaberčuk
  {"key":36,"name":"Marianna Talaberčuk","title":"*  - + ","parent": 26, "source": "./img/woman.svg"},
  //Eugenia Kučerenko
  {"key":37,"name":"Júlia Petriakova","title":"* 30.1.1978 ","parent": 27, "source": "./img/woman.svg"},
  //Anna Levycka
  {"key":38,"name":"Gregor Petriakov","title":"* 28.5.1986 ","parent": 28, "source": "./img/man.svg"},
  {"key":39,"name":"Haľa Svitylska","title":"*  ","parent": 28, "source": "./img/woman.svg"},
  //Vladimír Bilyk
  {"key":40,"name":"Artur Bilyk","title":"* 8.9.1983 - ","parent": 29, "source": "./img/man.svg" },
  //Ján Štybeľ
  {"key":41,"name":"Vasyl Štybeľ","title":" ","parent":30, "source": "./img/man.svg"},
  //Ruslana
  {"key":42,"name":"Ivan Dratva","title":" ","parent":31, "source": "./img/man.svg"},
  {"key":43,"name":"Michal Dratva","title":" ","parent":31, "source": "./img/man.svg"},
  {"key":44,"name":"Anita Dratva","title":" ","parent":31, "source": "./img/woman.svg"},
  {"key":45,"name":"Andrej Dratva","title":" ","parent":31, "source": "./img/man.svg"},
  {"key":46,"name":"Maryna Kupinka","title":" ","parent":31, "source": "./img/woman.svg"},
  {"key":47,"name":"Juraj Kupinka","title":" ","parent":31, "source": "./img/man.svg"},
  //Michal Straškulyč
  {"key":48,"name":"Roman Straškulyč","title":"* 8.12.1982 ","parent":32, "source": "./img/man.svg"},
  {"key":49,"name":"Bohdan Straškulyč","title":"* 14.6.1989 ","parent":32, "source": "./img/man.svg"},
  //Viktor Kaliničenko
  {"key":50,"name":"Vasyl Kaliničenko","title":" ","parent":33, "source": "./img/man.svg"},
  //Vladimír Denjančuk
  {"key":51,"name":"Ruslan Denjančuk","title":"15.6.1995 ","parent":34, "source": "./img/man.svg"},
  //Olga
  {"key":52,"name":"Vladislav Dratva","title":" ","parent":35, "source": "./img/man.svg"},
  {"key":53,"name":"Vasyl Dratva","title":" ","parent":35, "source": "./img/man.svg"},
  //Marianna Talaberčuk
  {"key":54,"name":"Vasyl Demjancuk","title":"* 8.5.1963  ","parent": 36, "source": "./img/man.svg"},
  //Júlia Petriakova
  {"key":55,"name":"Viačeslav Mironov","title":"* ","parent": 37, "source": "./img/man.svg"},
  //Gregor Petriakov
  {"key":56,"name":"Sandra Galbova","title":"* 2.11.1988","parent": 38, "source": "./img/woman.svg"},
  //Roman Straškulyč
  {"key":57,"name":"Vaselyna Kabacka","title":"* 13.1.1990 ","parent":48, "source": "./img/woman.svg"},
  //Ruslan Denjančuk
  {"key":58,"name":"Olesia Jackova","title":"* 27.9.1996 ","parent":51, "source": "./img/woman.svg"},
  //Vasyl Demjancuk
  {"key":59,"name":"Anita Demjančuk","title":"*5.12.1986  ","parent": 54, "source": "./img/woman.svg"},
  //Sandra Galbova
  {"key":60,"name":"Maxim Petriakov","title":"* 7.1.2015 ","parent": 56, "source": "./img/man.svg"},
  {"key":61,"name":"Alica Petriakova","title":"* 9.1.2018 ","parent": 56, "source": "./img/woman.svg"},
  //Vaselyna ...
  {"key":62,"name":"Olexander Straškulyč","title":" ","parent":57, "source": "./img/man.svg"},
  {"key":63,"name":"Daria Straškulyč","title":" ","parent":57, "source": "./img/woman.svg"},
  //Olesia
  {"key":64,"name":"Artem Denjančuk","title":"* 10.7.2020","parent":58, "source": "./img/man.svg"},
];    