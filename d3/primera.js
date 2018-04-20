var ciudades = [
    {name:'Ecuador 35%',population:6},
    {name:'Colombia 18%',population:3},
    {name:'Venezuela 12%',population:2},
    {name:'Perú 12%',population:2},
 
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#3371FF')
    .attr('r', function(d) {
      return d.population / 0.1;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#222222')                      
    .text(function(d) {
      return ". " + d.name;
    });