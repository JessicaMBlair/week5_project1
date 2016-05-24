$(document).ready(function() {
	
  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];
  
// 5. Add the CDN for jQuery UI script to grocery.html
// You can find the snippet here: https://developers.google.com/speed/libraries/#jquery-ui

// 6. Add a remove button at the bottom below the total. When clicked, it should remove
// the last item and update the total.
  function calculateNewTotal() {
  var total = 0;
  for (var i = 0; i < groceries.length; i++) {
    total += (groceries[i].quantity * groceries[i].price);
  }

  $('.totalCost').find('span').text('$' + total.toFixed(2));
  }

  $('.remove').click(removeLastItem);
  
  function removeLastItem() {
    groceries.pop();
    $('#list').children().eq(-1).remove();
    calculateNewTotal();
  }

// 7. Make each grocery item (each li element) draggable using .sortable().
// Use the example here https://johnny.github.io/jquery-sortable/ to figure out how to implement this.
// The three steps under 'Getting Started' should get you there. You do not NEED the css provided.

  $(function  () {
    $("ul#list").sortable();
  });

// 8. In the HTML document, add a list below "#list" called "purchased". All of the items that are status complete
// should go in the purchased list.

function statusComplete () {
	  
	  for (var i = 0; i <= groceries.length; i++) {
		  var item = groceries[i];
		  if (item.status === "complete") {	
		   $("#purchased").append($("<li>" + item.name + " " + item.status + " (" + item.quantity + ") @ $" + item.price + "</li>"))	 
		  }
	  }
  };
  
statusComplete();

/*  for(i=0; i<groceries.length; i++){
	  var item = groceries[i]
		if (item.status === "complete") {	
	  		$("#purchased").append($("<li>" + item.name + item.status + " (" + item.quantity + ") @ $" + item.price + "</li>"))
		}
}*/
// 9. When one of the grocery items in "#list" is double-clicked the status for that item
// should change to "complete" and populate in the complete list.

  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];
 
 ///Not working... 
	$('#list li').dblclick(function() {
		$(this).css("background-color", "pink");
		for(i=0; i<groceries.length; i++){
  		var item = groceries[i] 
 			if (item.status === "needed"){
				$(item.status).replace(/needed/g, "complete");
			}
		}
	});

// More not working options

	// 	$('#list li').dblclick(function() {
	// 	for(i=0; i<groceries.length; i++){
 // 		var item = groceries[i]; 
 //			if (item.status === "needed"){
	// 			$(this).replaceWith($("<li>" + item.name + " complete" + " (" + item.quantity + ") @ $" + item.price + "</li>"));
	// 		}
	// 	}
	// });



	// $('#list li').dblclick(function() {
	// 	for(i=0; i<groceries.length; i++){
 // 		var item = groceries[i]; 
 //			if (item.status === "needed"){
	// 			$(this).replaceWith("complete");
	// 		}
	// 	}
	// });

	
});
