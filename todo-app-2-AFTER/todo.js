console.log("todo.js");
var compose = document.querySelector("#compose");
var directionsWrapper = document.querySelector("#directions-wrapper");
var directions = document.querySelector("#directions");

function todo(message) {
	var card = document.createElement("div");
	card.setAttribute("class", "card");
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	card.appendChild(checkbox);

	//do message
	card.innerHTML += message;

	//...
	// add delete button
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "button");
	deleteButton.innerHTML = "DELETE";
	deleteButton.setAttribute("id", "deleteButton");

	// event handler for delete INSIDE function
	deleteButton.addEventListener("click", function () {
		card.outerHTML = null;
	});
	card.appendChild(deleteButton);

	// document.querySelector('body').appendChild(card);//visible

	document.querySelector("body").insertBefore(card, directionsWrapper); //visible
} //end todo

// add event handling
directions.addEventListener("click", function () {
	todo(compose.value);
});
