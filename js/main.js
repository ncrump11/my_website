
function initialize(){
	cities();

	addColumns();

	// addEvents();

	// clickme();
};
var cityPop = [
	{
		city: 'Kenosha',
		population: 99218
	},
	{	city: 'Wausau',
		population: 39106
	},
	{	city: 'Baraboo',
		population: 12048
	},
	{	city: 'Portage',
		population: 10324
	},
	{	city: 'Appleton',
		population: 66083
	},
	{	city: 'Milwaukee',
		population: 594833

	}];
function cities(){
		$("#mydiv").append("<table>");

	$("table").append("<tr>");

	$("tr").append("<th>City</th><th>Population</th>");
	$("tr").append("<th>City Size</th>")

	for (var i = 0; i < cityPop.length; i++){
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><tr>"	
		$("table").append(rowHtml);
	};
	 var theid = $('#mydiv').attr('id');

   
    // $('#mydiv').append(theid);

    
    $('#mydiv').attr('class', 'foo');
    
    $('#mydiv').css('color', 'orange');

    // $('#mydiv').css({
    //     'font-size': '2em',
    //     'text-align': 'left'
    // });

    // var thecolor = $('#mydiv').css('color');
    // $('#mydiv').append(thecolor);

    // $('script').each(function(){
    //     var thesource = $(this).attr('src');
    //     $('#mydiv').append(thesource);
    // });

  //   $('table').on('click', function(){
  //   	alert('Madison Rocks! Go Badgers!');
  //   });
  //   $('table').click(function(){
  //   	alert('Visit Superior and see the big lake!');
	 // });
	}
function addColumns(){


    $('tr').each(function(i){

    	console.log(cityPop[i])

    	// if (i=0){

    	// 	$('tr').append('<th> City Size </th>');
    	// } 
    	// else {
    		var pop = cityPop[i].population
    		// console.log(pop)
    		var citySize;

    		if (pop < 100000){
    			citySize = 'Small';

    		} else if (pop < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
    		// console.log(citySize)
    		$(this).append('<tr><td>' + citySize + '</td><tr>');
    	// };
    });
}

// 	function addEvents(){


// 	$('table').mouseover(function(){
		
// 		var color = "rgb(";

// 		for (var i=0; i<3; i++){

// 			var random = Math.round(Math.random() * 255);

// 			color += random;
// 			console.log(color)

// 			if (i<2){
// 				color += ",";
			
// 			} else{
// 				color += ")";
// 		};

// 		$(this).css('color', color);
// 	};
// }
// )}

// 	function clickme(){

// 	alert('Hey, you clicked me!');

// 	$('table').on('click', clickme);
	
// };

$(document).ready(initialize)