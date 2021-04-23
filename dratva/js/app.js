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
  $(go.Node, "Auto", {background: "transparent", width: 260},
  $(go.Shape, { fill: "transparent", stroke: "tomato", strokeWidth: 3}),
  $(go.Panel, "Horizontal",
        { stretch: go.GraphObject.Fill, margin: 0.5 },  
  $(go.Panel, "Spot",
        { isClipping: true, margin: 10},
        $(go.Shape, "Circle", { width: 55,} ),
        $(go.Picture, "Image",
          { width: 55, height: 55, background: "green" }
         )
      ),
  $(go.Panel, "Vertical", {width: 170},
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
{"key":1,"name":"Jozef Dratva","title":"* 19.3.1894 - ..."},
{"key":2,"name":"Júlia Zajac","title":"","parent":1},
{"key":3,"name":"Anna Zatvarnycka","title":"","parent":1},
//Júlia Zajac
{"key":4,"name":"Margita Dratva","title":"* 30.10.1918 - ","parent":2},
{"key":5,"name":"Alžbeta Dratva","title":"* 30.10.1920 - ","parent":2},
{"key":6,"name":"Jozef Dratva","title":"...","parent":2},
{"key":7,"name":"Júlia Dratva","title":"* 9.1.1925 - + 19.7.2013","parent": 2},
{"key":8,"name":"Ján Dratva","title":" - ","parent":2},
{"key":9,"name":"Mária Dratva","title":"+ 1934","parent":2},
//Anna Zatvarnycka
{"key":10,"name":"Mária Dratva","title":"* 18.5.1936 - 2016","parent":3},
{"key":11,"name":"Anna Dratva","title":" ","parent":3},
//Júlia Dratva
{"key":12,"name":"Gabor Gusti","title":"*","parent": 7},
{"key":13,"name":"Gregor Petriakov","title":"* 1918 - + 1986","parent": 7},
//Ján Dratva
{"key":14,"name":"Magdaléna ","title":" ","parent":8},
//Mária Dratva
{"key":15,"name":"Pavol Stanko","title":" ","parent":10},
//Anna Dratva
{"key":16,"name":"Vasyl Dratva","title":" ","parent":11},
//Gabor Gusti
{"key":17,"name":"Marta Dratva","title":"* 1944 - + ","parent": 12},
//Gregor Petriakov 
{"key":18,"name":"Ján Petriakov","title":"* 9.5.1949 - + 6.5.2015","parent": 13},
{"key":19,"name":"Nadia Petriakova","title":"* 19.7.1951","parent": 13},
//Ján Dratva
{"key":20,"name":"Alžbeta Dratva","title":" ","parent":14},
{"key":21,"name":"Michal Dratva","title":" ","parent":14},
//Mária Dratva
{"key":22,"name":"Oksana Stanko","title":" ","parent":15},
{"key":23,"name":"Natalia Stanko","title":" ","parent":15},
{"key":24,"name":"Marianna Stanko","title":"* 4.8.1967","parent":15},
//Marta Dratva
{"key":26,"name":"Jozef Talaberčuk","title":"* 1943 - + ","parent": 17},
//Ján Petriakov
{"key":27,"name":"Eugenia Kučerenko","title":"* 1.1.1953 - + 13.11.1993","parent": 18},
{"key":28,"name":"Anna Levycka","title":"* 25.5.  ","parent": 18},
//Nadia Petriakova
{"key":29,"name":"Vladimír Bilyk","title":"* 16.6.1940 - + 25.11.2009","parent": 19},
//Alžbeta Dratva
{"key":30,"name":"Ján Štybeľ","title":" ","parent":20},
//Michal Dratva
{"key":31,"name":"Ruslana","title":" ","parent":21},
//Oksana Stanko
{"key":32,"name":"Michal Straškulyč","title":" ","parent":22},
//Natalia Stanko
{"key":33,"name":"Viktor Kaliničenko","title":" ","parent":23},
//Marianna Stanko
{"key":34,"name":"Vladimír Demjančuk","title":"* 18.1.1965 ","parent":24},
//Vasyl Dratva
{"key":35,"name":"Olga ...","title":" ","parent":16},
//Jozef Talaberčuk
{"key":36,"name":"Marianna Talaberčuk","title":"*  - + ","parent": 26},
//Eugenia Kučerenko
{"key":37,"name":"Júlia Petriakova","title":"* 30.1.1978 ","parent": 27},
//Anna Levycka
{"key":38,"name":"Gregor Petriakov","title":"* 28.5.1986 ","parent": 28},
{"key":39,"name":"Haľa Svitylska","title":"*  ","parent": 28},
//Vladimír Bilyk
{"key":40,"name":"Artur Bilyk","title":"* 8.9.1983 - ","parent": 29},
//Ján Štybeľ
{"key":41,"name":"Vasyl Štybeľ","title":" ","parent":30},
//Ruslana
{"key":42,"name":"Ivan Dratva","title":" ","parent":31},
{"key":43,"name":"Michal Dratva","title":" ","parent":31},
{"key":44,"name":"Anita Dratva","title":" ","parent":31},
{"key":45,"name":"Andrej Dratva","title":" ","parent":31},
{"key":46,"name":"Maryna Kupinka","title":" ","parent":31},
{"key":47,"name":"Juraj Kupinka","title":" ","parent":31},
//Michal Straškulyč
{"key":48,"name":"Roman Straškulyč","title":"* 8.12.1982 ","parent":32},
{"key":49,"name":"Bohdan Straškulyč","title":"* 14.6.1989 ","parent":32},
//Viktor Kaliničenko
{"key":50,"name":"Vasyl Kaliničenko","title":" ","parent":33},
//Vladimír Denjančuk
{"key":51,"name":"Ruslan Denjančuk","title":"15.6.1995 ","parent":34},
//Olga
{"key":52,"name":"Vladislav Dratva","title":" ","parent":35},
{"key":53,"name":"Vasyl Dratva","title":" ","parent":35},
//Marianna Talaberčuk
{"key":54,"name":"Vasyl Demjancuk","title":"*  ","parent": 36},
//Júlia Petriakova
{"key":55,"name":"Viačeslav Mironov","title":"* ","parent": 37},
//Gregor Petriakov
{"key":56,"name":"Sandra Galbova","title":"* 2.11.1988","parent": 38},
//Roman Straškulyč
{"key":57,"name":"Vaselyna ...","title":"* 13.1.1990 ","parent":48},
//Ruslan Denjančuk
{"key":58,"name":"Olesia Jackova","title":"* 27.9.1996 ","parent":51},
//Vasyl Demjancuk
{"key":59,"name":"Anita Demjančuk","title":"*5.12.1986  ","parent": 54},
//Sandra Galbova
{"key":60,"name":"Maxim Petriakov","title":"* 7.1.2015 ","parent": 56},
{"key":61,"name":"Alica Petriakova","title":"* 9.1.2018 ","parent": 56},
//Vaselyna ...
{"key":62,"name":"Olexander Straškulyč","title":" ","parent":57},
{"key":63,"name":"Daria Straškulyč","title":" ","parent":57},
//Olesia
{"key":64,"name":"Artem Denjančuk","title":"* 10.7.2020","parent":58},
];
myDiagram.model = model;