d3.json("../viviendas_ine.json").then( data => {

    var divContent = d3
        .select("body")
        .append("div")
        .attr("class", "myDataContent");

    var divs = divContent
        .selectAll("body")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "year");

    divs
        .append("h1")
        .text(d => d.PERIODO);

    divs
        .append("p")
        .text(d => d.VALOR);
});
