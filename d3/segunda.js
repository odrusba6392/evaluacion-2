//aquí debes trabajar con datos de un JSON
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>
    var w = 450;
var h = 450;
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");


var data = [
{ name: 'Tatooine', diameter: 10465},
{ name: 'Alderaan', diameter: 12500},
{ name: 'Yavin IV', diameter: 10200},
{ name: 'Hoth', diameter: 7200},
{ name: 'Dagobah', diameter:8900} 
];
//selecciona el svg
var svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height)

  .style("background-image","url('https://images3.alphacoders.com/762/thumb-1920-762343.jpg')")
  .style("background-size","cover")
  .style("background-position","center center");
    
    //seleccionar el grupo

var g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")  
  .attr("transform", "translate(100,0)")
//dentro del grupo, crear círculos
g.append("circle")
  .attr("cx", function(d, i) { return i * (width/(data.length+1)) + 50; })
  .attr("cy", function(d) { return height/2; })
  .attr("r", function(d) { return d.diameter/200; })
  .attr("fill","#1A2183")
//dentro del mismo grupo, agregar un texto
g.append("text")
  .attr("x", function(d, i) { return i * (width/(data.length+1)) + 48; })
  .attr("y", (height/2)+1)
  .attr("fill","#FFFFFF")
  .text(function(d) { return "" + d.name; })
    .attr("text-anchor","middle")
    .attr("font-weight","bold")
//dentro del mismo grupo, agregar otr texto
g.append("text")
  .attr("x", function(d, i) { return i * (width/(data.length+1)) + 56; })
  .attr("y", (height/2)+16)
  .attr("fill","#FFFFFF")
  .text(function(d) { return "("+d.diameter+")"; })
  .style("font-size","10px")
  .attr("text-anchor","middle")
</script>