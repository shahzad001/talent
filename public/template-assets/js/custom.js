$(function() {
	
	'use strict';

	/* =========== Mobile button menu ================= */
	$('#mobileBtn').on('click', function() {
		$('.content-header .navbar-right').toggle('show');
		$(this).toggleClass('show');
	});
	/* ------------------------------------------------ */

	/* =========== jQuery scrollbar ================= */
	jQuery('.sidenav .sidebar-wrapper').scrollbar(); // Left sidebar/Main menu
	jQuery('#right-sidebar .sidebar-wrapper').scrollbar(); // Right sidebar
	jQuery('.notification-list').scrollbar(); // Notification lists
	/* ------------------------------------------------ */

	/* =========== Bootstrap caraousel ================= */
	$('.carousel').carousel();
	/* ------------------------------------------------ */

	/* =========== Show/Hide Left sidebar/Main menu ================= */
	$('.btn-bars').on('click', function(){
		$('#sidebar.sidenav').toggleClass('sidenav-off');
		$('.pageheader').toggleClass('pageheader-off');
		$('#main-container .content').toggleClass('content-full');
		$('#page-footer.pagefooter').toggleClass('pagefooter-full');
		$('.parallax-heading').toggleClass('full');
	});
	/* ------------------------------------------------ */

	/* =========== jQuery scrollbar ================= */
	$('.btn-r_sidebar').on('click', function(event){
		$('.r_sidebar').toggleClass('r_sidebar-on');
		$(this).toggleClass('r_on');
	});

	$('#right-sidebar .close-btn').on('click', function(){
		$('#right-sidebar').removeClass('r_sidebar-on');
		$('.btn-r_sidebar').removeClass('r_on');
	});

	/* =========== Bootstrap popover ================= */
	$('.example-popover').popover({
		container: 'body'
	});
	$('.popover-dismiss').popover({
		trigger: 'focus'
	});
	$('[data-toggle="tooltip"]').tooltip();
	/* ------------------------------------------------ */

	/* =========== Help Dropdown modification ================= */
	$('.dropdown-help .dropdown-help-menu').on('click', function(event){
		var events = $._data(document, 'events') || {};
		events = events.click || [];
		for(var i = 0; i < events.length; i++) {
			if(events[i].selector) {
				if($(event.target).is(events[i].selector)) {
					events[i].handler.call(event.target, event);
				}
				$(event.target).parents(events[i].selector).each(function(){
					events[i].handler.call(this, event);
				});
			}
		}
		event.stopPropagation();
	});
	/* ------------------------------------------------ */

	/* =========== Date function (Right sidebar) ================= */
	function getDay() {
		var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var newDate = new Date();
		return dayNames[newDate.getDay()];
	}
	function getMonth() {
		var monthNames = [ "Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
		var newDate = new Date();
		return monthNames[newDate.getMonth()];
	}
	function getYear() {
		var newDate = new Date();
		return newDate.getFullYear();
	}
	function getDate() {
		var newDate = new Date();
		return newDate.getDate();
	}
	$('#prDate').html( getDate() );
	$('#prMonth').html( getMonth() );
	$('#prYear').html( getYear() );
	$('#prDay').html( getDay() );
	/* ------------------------------------------------ */

	/* =========== Expanded Search Form ================= */
	$("input.expand-search").click(function() {
		$(this).addClass("open-search");
	});
	$("input.expand-search").blur(function() {
		$(this).removeClass("open-search");
	});
	/* ------------------------------------------------ */

	$(".edit-profile").on("click", function() {
		//$(".profile-form .form-control-plaintext").toggleClass("form-control");

		var v = $('.profile-form input.form-control').is(":visible");
		if(v == true) {
			$(".profile-form input").removeClass("form-control-plaintext");
			$(".profile-form input").addClass("form-control");
			$(".profile-form input").removeAttr("readonly");
		} else {
			$(".profile-form input").addClass("form-control-plaintext");
			$(".profile-form input").removeClass("form-control");
			$(".profile-form input").attr("readonly");
		}
	});


});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
elems.forEach(function(html) {
	var switchery = new Switchery(html, { size: 'small', color: '#563d7c' });
});