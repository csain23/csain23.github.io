// JS David Sain - 10/06/2023
(function () {
   'use strict';
}());

//CONTACT FORM AREA
function checkForm() {
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var error = document.getElementById("formErrors");
	var errorsFound = false;
	
	//firstName
	if (!firstName.value) {
		errorsFound = true;
		var firstNameErr = document.createElement("li");
		firstNameErr.textContent = "Missing first name.";
		error.appendChild(firstNameErr);
		//css input.error
		var hidden1 = document.getElementById("firstName");
		hidden1.classList.add("error");
	}
	//lastName
	if (!lastName.value) {
		errorsFound = true;
		var lastNameErr = document.createElement("li");
		lastNameErr.textContent = "Missing last name.";
		error.appendChild(lastNameErr);
		//css input.error
		var hidden2 = document.getElementById("lastName");
		hidden2.classList.add("error");
	}
	//email
	if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
		errorsFound = true;
		var emailErr = document.createElement("li");
		emailErr.textContent = "Invalid or missing email address.";
		error.appendChild(emailErr);
		//css input.error
		var hidden3 = document.getElementById("email");
		hidden3.classList.add("error");
	}
	//clear errors
	if (errorsFound === false) {
		error.style = "display: none";
		firstName.style = "border: 1px solid #aaa;";
		lastName.style = "border: 1px solid #aaa;";
		email.style = "border: 1px solid #aaa;";
		document.getElementById("contactForm").reset();
		window.alert("Thanks for dropping us a line.");
	}
}

document.getElementById("mySubmit").addEventListener("click", function(event) {
	checkForm();
	event.preventDefault();
});
//END CONTACT FORM AREA



/*ORDER MENU EXPAND START*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "grid") {
            content.style.display = "none";
        } else {
            content.style.display = "grid";
        }
    });
}
	
/*ORDER MENU EXPAND END*/

/*ORDER POPUP START*/
$(document).ready(function() {
  

	$( "a" ).click(function( event ) {
  		event.preventDefault();
	});

	var numOfOrders = 0;
	$(".num").text(numOfOrders);

	// hide dialogs on start
	$("#thanksMessage, #checkOrderHamburger, #checkOrderMacaroni, #checkOrderPizza, #checkOrderSalad, #checkOrderSpaghetti, #checkOrderRisotto, #finishOrderDialog").hide();

	// open dialog on click
	$("#addToCartHamburger").on("click", function () {
		$("#checkOrderHamburger").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartMacaroni").on("click", function () {
		$("#checkOrderMacaroni").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartPizza").on("click", function () {
		$("#checkOrderPizza").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartSalad").on("click", function () {
		$("#checkOrderSalad").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartSpaghetti").on("click", function () {
		$("#checkOrderSpaghetti").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartRisotto").on("click", function () {
		$("#checkOrderRisotto").dialog({
				hide: "blind",
            	show : "blind",
            	width: "400px",
              closeText: "X"});
	})

	// increase/decrease the price of order if an item is added/removed
	function checkboxChange(x) {
		var priceDialog = 0;
		$("#recipe"+x).children("li").children("input").each(function () {
			if($(this).is(":checked")){
				priceDialog+=3;
			}
				$("#totalDialog"+x+">span").text(priceDialog);
			$(this).change(function () {
				if ($(this).is(":checked")) {
					priceDialog += 3;
					console.log(priceDialog);
					$("#totalDialog"+x+">span").text(priceDialog);
				}else{
					priceDialog -= 3;
					$("#totalDialog"+x+">span").text(priceDialog);
				}
			})
		});
	}

	$('#recipe1').children('li').click(checkboxChange(1));
	$('#recipe2').children('li').click(checkboxChange(2));
	$('#recipe3').children('li').click(checkboxChange(3));
	$('#recipe3').children('li').click(checkboxChange(4));
	$('#recipe3').children('li').click(checkboxChange(5));
	$('#recipe3').children('li').click(checkboxChange(6));

	$(".addIngredient").on("click", function () {
		// Creates input field and two buttons for adding an ingrediant that's not on the list
		var inputIng = '<input type="text" id="newIngredient">';
		var confirmInput = '<a class="btnStyle3 btnStyle confirmInput">&#10004;</a>';
		var cancelInput = '<a class="btnStyle3 btnStyle cancelInput">&#10008;</a>';
		var inputWrap = '<div class="addIngredientWrap">' + inputIng + confirmInput + cancelInput + '</div>'
		$(this).parent().children("ul").after(inputWrap);
    $("#newIngredient").focus();
    $("#newIngredient").attr("placeholder", "separate ingredients with a comma");

		// Confirm button adds the new ingrediant to the list of ingrediants
		$(".addIngredientWrap > .confirmInput").on("click", function () {
			if ($("#newIngredient").val() != "") {
        //split takes the value of the input and splits it into separate array elements after every comma
				var newIngredient = ($(".addIngredientWrap input").val()).split(",");
				var newCheckbox = '<input type="checkbox" checked>';
        
        for (var i = 0; i < newIngredient.length; i++){
         $(this).parent().siblings("ul").append("<li>" + newCheckbox + newIngredient[i] + "  (+3$)</li>");
        }
				

				$('#recipe1').children('li').click(checkboxChange(1));
				$('#recipe2').children('li').click(checkboxChange(2));
				$('#recipe3').children('li').click(checkboxChange(3));
				$('#recipe3').children('li').click(checkboxChange(4));
				$('#recipe3').children('li').click(checkboxChange(5));
				$('#recipe3').children('li').click(checkboxChange(6));

				$(this).parent().remove();
			}else{
				$("#newIngredient").attr("placeholder", "Please add ingrediant");
			}
		});
		// Remove button hides the input
		$(".addIngredientWrap > .cancelInput").on("click", function () {
			$(this).parent().remove();
		})
	})// add ingredient button

	$(".listOver").on("click", function () {
		var orderName = '<h3 class="orderName"><span>' + $(this).parent().siblings(".ui-dialog-titlebar").children("span").text() + '</span><a class="delBtn">&#10008;</a>' +'</h3>';
		var orderIngredients = '<ul class="orderIngredients"></ul>';
		var orderPrice = '<h3 class="orderPrice"><span>' + $(this).parent().children(".totalDialog").children("span").text() + '</span>$<h3>'
		var horisontalLine = '<hr>';
		$(".cart").children("#listOfOrders").append("<li>" + orderName + orderIngredients + orderPrice + horisontalLine + "</li>");

		$(this).parent().children("ul").children().children("input:checked").each(function () {
			var selectedIngredient = $(this).parent().text();
			$(".orderIngredients").last().append("<li>" + selectedIngredient + "</li>");
		})

		// opens the cart side menu
		if ($('#cartToggle').prop('checked')) {
			$("#cartToggle").prop("checked", true);
		}else{
			$("#cartToggle").prop("checked", true);
		}

		$(this).parent(".ui-dialog-content").dialog("close");

		numOfOrders = $("#listOfOrders").children().length;
		$(".num").text(numOfOrders);

		// display total price in cart orders
		var totalOrderPrice = 0;
		$("#listOfOrders").children("li").children(".orderPrice").children("span").each(function () {
			var price = parseFloat($(this).text());
			totalOrderPrice += price;
			$(".cart > h3 > span").text(totalOrderPrice + "$");
		});

		// remove order from cart
		$(".delBtn").on("click", function () {
			var removePrice = $(this).parent().parent().children(".orderPrice").children("span").text();
			totalOrderPrice -= removePrice;
			$(".cart > h3 > span").text(totalOrderPrice + "$");

			$(this).parents("li").remove();
			numOfOrders = $("#listOfOrders").children().length;
			$(".num").text(numOfOrders);
		})
	}); // List over (done button)

	$(".finishOrder").on("click", function () {
     $("#finalOrderList > ol").children().remove();
		$(".orderName").children("span").each(function(){
			var finalOrder = '<li>' + $(this).text() + '</li>';
			$("#finalOrderList > ol").append(finalOrder);
		})

		$("#finishOrderDialog").dialog({
			hide: "blind",
	    	show : "blind",
	    	width: "500px",
        closeText: "X"
	    });
	})

	$(".order").on("click", function () {
		var name = $("#buyerName").val();
		var number = $("#buyerNumber").val();
		var address = $("#buyerAddress").val();

		if (name != "" && number != "" && address != "") {
			$("#finishOrderDialog").dialog("close");
			$("#buyerInfo").children("p").remove();
			$("#thanksMessage").dialog({
				hide: "blind",
		    	show : "blind",
		    	width: "400px"
		    });
		    setTimeout(function(){
		    	$("#thanksMessage").dialog("close");
		    }, 3000);
		}else{
			$("#buyerInfo").append('<p>Fill up all the inputs</p>');
		}
	})

})


/*ORDER POPUP END*/