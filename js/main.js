function initialize(){
	cities();
};

function cities(){
	var cityPop = [
	{
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
	];


	$("#mydiv").append("<table>");

	$("table").append("<tr>");

	$("tr").append("<th>City</th><th>Population</th>");

	for (var i = 0; i < cityPop.length; i++){
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><tr>"	
		$("table").append(rowHtml);
	};
	 var theid = $('#mydiv').attr('id');

   
    $('#mydiv').append(theid);

    
    $('#mydiv').attr('class', 'foo');
    
    $('#mydiv').css('color', 'orange');

    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'left'
    });

    var thecolor = $('#mydiv').css('color');
    $('#mydiv').append(thecolor);

    $('script').each(function(){
        var thesource = $(this).attr('src');
        $('#mydiv').append(thesource);
    });

    $('table').on('click', function(){
    	alert('Madison Rocks! Go Badgers!');
    });
    $('table').click(function(){
    	alert('Visit Superior and see the big lake!');
    });
};

$(document).ready(initialize);