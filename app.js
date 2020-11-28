const navbar = ()=>{
    return React.createElement("nav", {class: "nav"}, 
    React.createElement("ul", {class: "list list--modifier"}, [
        React.createElement("li", {class: "list__item"}, "Home"),
        React.createElement("li", {class: "list__item"}, "About Us"),
        React.createElement("li", {class: "list__item"}, "Contact"),
        React.createElement("li", {class: "list__item"}, "Check-in")
    ]));
};

const destination = ()=>{
    return React.createElement("div",{class: "destination destination--modifier"}, [
        React.createElement("h1", {class: "destination__heading"}, "Where would you like to go?"),
        React.createElement("ul",{class: "destination__list"}, [
            React.createElement("li" ,{class: "destination__list__item"}, "NEW YORK"),
            React.createElement("li",{class: "destination__list__item"}, "HAWAII"),
            React.createElement("li",{class: "destination__list__item"}, "LAS VEGAS")
        ])
    ]);
};

const deals = ()=>{
    return React.createElement("div",{class: "deals deals--modifier"}, [
        React.createElement("div",{class: "deals__deal"}, [
            React.createElement("h2",{class: "deals__deal__heading"},"Spring getaway deals"),
            React.createElement("p",{class: "deals__deal__paragraph"}, "Head for the sun at sweet fares of $69 and below")
        ]),
        React.createElement("div",{class: "deals__deal"}, [
            React.createElement("h2",{class: "deals__deal__heading"},"Fly higher for tripple points"),
            React.createElement("p",{class: "deals__deal__paragraph"}, "Refer three friends and get amazing discounts this month")
        ]),
        React.createElement("div",{class: "deals__deal"}, [
            React.createElement("h2",{class: "deals__deal__heading"},"Deals on top shelf seats"),
            React.createElement("p",{class: "deals__deal__paragraph"}, "Get sweet deals in main cabin select and first class")
        ])
    ]);
};
const homePage = ()=>{
    return React.createElement("div",{}, [
        React.createElement(navbar),
        React.createElement(destination),
        React.createElement(deals)
    ]);
};

ReactDOM.render(React.createElement(homePage), document.getElementById("root"));