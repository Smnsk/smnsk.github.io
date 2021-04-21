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
  $(go.Node, "Horizontal",
    {background: "transparent"}, 
  $(go.Picture, "Circle",
      { margin: 10, width: 50, height: 50, background: "green" },
      new go.Binding("title")),
  $(go.Panel, "Vertical",   
  $(go.TextBlock, "center",
      { margin: 6, stroke: "white", font: "bold 16px sans-serif" },
      new go.Binding("text","name")),
  $(go.TextBlock, "center",
      { stroke: "white", font: "bold 12px sans-serif" },
      new go.Binding("text","title"))    
      
      ),     
  );

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
  $(go.Link,
    { routing: go.Link.Orthogonal, corner: 5 },
    $(go.Shape, // the link's path shape
      { strokeWidth: 2, stroke: "gray" }));
     

let model = $(go.TreeModel);
model.nodeDataArray =
[
{"key":1,"name":"Jozef Dratva","title":"19.3.1984 - ..."},
{"key":2,"name":"Júlia Zajac","title":"","parent":1},
{"key":3,"name":"Anna Zatvarnycka","title":"","parent":1},
{"key":4,"name":"Margita Dratva","title":"30.10.1918 - ","parent":2},
{"key":5,"name":"Alžbeta Dratva","title":"* 30.10.1920 - ","parent":2},
{"key":6,"name":"Jozef Dratva","title":"...","parent":2},
{"key":7,"name":"Júlia Dratva","title":"* 9.1.1925 - + 19.7.2013","parent": 2},
{"key":8,"name":"Gabor Gusti","title":"*","parent": 7},
{"key":9,"name":"Gregor Petriakov","title":"* 1918 - + 1986","parent": 7},
{"key":10,"name":"Petriakova Marta","title":"* 1944 - + ","parent": 8},
{"key":11,"name":"Petriakov Ján","title":"* 9.5.1949 - + ","parent": 9},
{"key":12,"name":"Nadia Petriakova","title":"* 19.7.1951 - ","parent": 9},
{"key":13,"name":"Vladimír Bilyk","title":"* 16.6.1940 - +25.11.2009","parent": 12},
{"key":14,"name":"Artur Bilyk","title":"* 8.9.1983 - ","parent": 13},
{"key":15,"name":"Jozef Talaberčuk","title":"* 1943 - + ","parent": 10},
{"key":16,"name":"Marianna Talaberčuk","title":"*  - + ","parent": 15},
{"key":17,"name":"Vasyl Demjancuk","title":"*  ","parent": 16},
{"key":18,"name":"Anita Demjančuk","title":"*5.12.1986  ","parent": 17},
{"key":19,"name":"... Evgenia","title":"*  ","parent": 11},
{"key":20,"name":"Júlia Petriakova","title":"* 30.1.1978 ","parent": 19},
{"key":21,"name":"Viačeslav Mironov","title":"* ","parent": 20},
{"key":22,"name":"Anna","title":"*  ","parent": 11},
{"key":23,"name":"Gregor Petriakov","title":"* 25.5.1985 ","parent": 22},
{"key":24,"name":"Sandra","title":"* ","parent": 23},
{"key":25,"name":"Maxim Petriakov","title":"* 7.1.2015 ","parent": 24},
{"key":26,"name":"Alica Petriakova","title":"* 9.1.2018 ","parent": 24},
{"key":27,"name":"Ján Dratva","title":" - ","parent":2},
{"key":28,"name":"Mária Dratva","title":"+ 1934","parent":2},
{"key":29,"name":"Mária Dratva","title":"* 18.5.1936 - 2016","parent":3},
{"key":30,"name":"Pavol Stanko","title":" ","parent":29},
{"key":31,"name":"Anna Dratva","title":" ","parent":3},
{"key":32,"name":"Vasyl Dratva","title":" ","parent":31},
{"key":33,"name":"Olga ...","title":" ","parent":32},
{"key":32,"name":"Vladislav Dratva","title":" ","parent":33},
{"key":32,"name":"Vasyl Dratva","title":" ","parent":33},
{"key":34,"name":"Oksana Stanko","title":" ","parent":30},
{"key":35,"name":"Michal Straškulyč","title":" ","parent":34},
{"key":36,"name":"Roman Straškulyč","title":"* 8.12.1982 ","parent":35},
{"key":37,"name":"Vaselyna ","title":"* 13.1.1990 ","parent":36},
{"key":38,"name":"Olexander Straškulyč","title":" ","parent":37},
{"key":39,"name":"Daria Straškulyč","title":" ","parent":37},
{"key":40,"name":"Bohdan Straškulyč","title":" ","parent":35},
{"key":41,"name":"Natalia Stanko","title":" ","parent":30},
{"key":42,"name":"Viktor Kaliničenko","title":" ","parent":41},
{"key":43,"name":"Vasyl Kaliničenko","title":" ","parent":42},
{"key":44,"name":"Marianna Stanko","title":" ","parent":30},
{"key":45,"name":"Vladimír Denjančuk","title":" ","parent":44},
{"key":46,"name":"Ruslan Denjančuk","title":"15.6.1995 ","parent":45},
{"key":47,"name":"Olesia Jackova","title":" ","parent":46},
{"key":48,"name":"Artem Denjančuk","title":" ","parent":47},
];
myDiagram.model = model;