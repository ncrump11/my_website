//this function begins the function process when the webpage loads
function initialize(){
    cities();
    addEvents();
    clickme();
    // addColumns();
    jQueryAjax();
    debugAjax();
    
    
};
//this creates an array of our cities and populations
//this is a global variable

//this function creates the table for City and Population
function cities(){   
    var cityPop = [
        {   
            city: 'Gothenburg',
            population: 491630
        },
        {   
            city: 'Helsinki',
            population: 599676
        },
        {   
            city: 'Oshkosh',
            population: 66778
        },
        {   
            city: 'Oslo',
            population: 618683
        }
    ];
    //this command creates a table in our div
    $("#mydiv").append("<table>");

    //this command adds a row to our table
    $("table").append("<tr>");

    //this command adds a header row to our table
    //with our City and Population titles
    $("tr").append("<th>City</th><th>Population</th>");
    
    //this for loop takes each city and population from the cityPop
    //array and adds it to our table columns
    for (var i = 0; i < cityPop.length; i++){
        //the variable rowHtml is made because otherwise
        //our command would be too long to read easily
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><tr>"; 
        $("table").append(rowHtml);
    };
    // //this function adds the column City Size to our table
    // function addColumns(cityPop){
    //     //the each command loops through our cityPop array
    //     //in a more efficient way than a for loop would
    //     $('tr').each(function(i){
    //         //this if statement adds the header city Size to our table
    //         //if i == 0
    //         if (i == 0){
    //            $(this).append('<th>City Size</th>');
    //         } else {
    //             //the variable citySize is created to loop through
    //             //each cityPop population and determine if it is 
    //             //within the parameters for small, medium or large
    //             var citySize;
    //             console.log(cityPop[i-1]);
    //             if (cityPop[i-1].population < 100000){
    //                 citySize = 'Small';

    //             } else if (cityPop[i-1].population < 500000){
    //                 citySize = 'Medium';

    //             } else {
    //                 citySize = 'Large';
    //             };
    //             //when the loop decides which population is what
    //             //size, it then adds that size identifier to the table
    //             $(this).append('<td>' + citySize + '</td>');
    //         };
    //     });
    // };
    // addColumns(cityPop);
};

//this function causes the table to change color
//when you move your mouse over it
function addEvents(){

    //this defines the mouseover function
    $('table').mouseover(function(){
        
        var color = "rgb(";
        //this for loop creates the variable random and
        //fills it with a random number of the RGB spectrum
        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);
            //this adds the randomized number to the variable
            //color, which formats it in the proper color format
            color += random;

            //this adds a second random number to the color variable
            if (i<2){
                color += ",";
            //this adds the final number to the variable, creating a
            //real RGB color
            } else{
                color += ")";
        };
        //we have then added this color to the table's color
        //feature, since it is in proper RGB format. The mouseover
        //function means that this color will change randomly each
        //time your mouse moves over the table
        $(this).css('color', color);
       };
    })
}
//this function adds a click event listener
function clickme(){

    //this will pop up when the table is clicked
    alert('Hey, you clicked me!');
    //this turns on the click listener
    $('table').on('click', clickme);
    
};

function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;
            //the data can be accessed because it is within the callback function
            console.log(mydata)
        }
    });

    //the data cannot be accessed here because it is outside the callback function
    console.log(mydata)
};

//this will call the initialize function when the page
//is loaded, so that nothing loads before the website itself
$(document).ready(initialize);

    
function debugAjax(){
    //this creates the mydata variable
    var mydata;

    //this requests the MegaCities data from our datafolder
    //and specifies the data type
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        //when the data is loaded, the functionis executed, which
        //gives the mydata variable the data. 
        success: function(response){

            mydata=response;
            
            //rather than pass the data to an outside function, it is possible
            //to simply perform the code within the debugCallback function
            //within the success function. If we wanted to pass the data to
            //an outside function however, we would simply call that function
            //here
            $('#mydiv').append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
        }
    });
}
