/*
File				: form-validations.js
Associated file		: form-validations.html
*/

(function() {
	
	"use strict";
	
	window.addEventListener("load", function() {
		var form = document.getElementById("needs-validation");
		form.addEventListener("submit", function(event) {
			if (form.checkValidity() == false) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add("was-validated");
		}, false);
	}, false);

}());