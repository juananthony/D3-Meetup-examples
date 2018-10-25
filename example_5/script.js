d3.json("../data/auto.json").then( data => {

    // configuracion del svg
    var config = {
        height: 600,
        width: 800
    }
    
    // configuramos margenes del svg
    var margins = {
        top: 10,
        right: 10,
        bottom: 50,
        left: 30
    };
    
    // creamos el SVG
    var svg = d3
        .select("body")
        .append("svg")
        .attr("width", config.width)
        .attr("height", config.height);

    // creamos escalas
    var scaleX = d3.scaleLinear()
        .domain(d3.extent(data, d => d.horsepower))
        .range([0 + margins.left, config.width - margins.right]);
    
    var scaleY = d3.scaleLinear()
        .domain(d3.extent(data, d => d.acceleration))
        .range([config.height - margins.top, 0 + margins.top]);
    
    // añadimos los puntos
    svg
        .selectAll("body")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => scaleX(d.horsepower))
        .attr("cy", d => scaleY(d.acceleration))
        //.attr("cx", d => d.horsepower)
        //.attr("cy", d => d.acceleration)
        .attr("r", "4");
        
    // creamos los ejes
    var xAxis = d3.axisBottom(scaleX);
    svg.append("g")
        .attr("transform","translate(0," + (config.height - margins.bottom) + ")")
        .call(xAxis);
    svg.append("text")
        .attr("transform", "translate(" + (config.width / 2) + ", " +  (config.height - 10) + ")")
        .text("Horsepower")
    
    var yAxis = d3.axisLeft(scaleY);
    svg.append("g")
        .attr("transform","translate(" + (margins.left) + "," + (- margins.top) + ")")
        .call(yAxis);
    
});
