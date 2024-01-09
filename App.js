// single object //
const heading = React.createElement('h1',{id:"heading",xyz:"abc"},"Hello React JS");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// Nested Structure //
const parent =
React.createElement("div" ,{id:"Parent"}, 
    React.createElement("div",{id:"Chlid"},
    React.createElement("h1",{},"I'm H1 Tag"),
    
)
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);
// Sibling Structure //
const parent2 =
React.createElement("div" ,{id:"Parent"}, 
    React.createElement("div",{id:"Chlid"},
    [
        React.createElement("h1",{},"I'm an H1 Tag"),
        React.createElement("h2",{},"I'm an H2 Tag")
    ]
)
);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent2);
//mulitiple nested sturture//
const parent3 =
React.createElement("div" ,{id:"Parent"}, 
[
    React.createElement("div",{id:"Chlid"},
    [
        React.createElement("h1",{},"I'm an H1 Tag"),
        React.createElement("h2",{},"I'm an H2 Tag")
    ]),
    React.createElement("div",{id:"Chlid2"},
    [
        React.createElement("h1",{},"I'm an H1 Tag"),
        React.createElement("h2",{},"I'm an H2 Tag")
    ])
]
);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(parent3);

