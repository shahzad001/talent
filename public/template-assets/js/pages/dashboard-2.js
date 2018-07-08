/*
File				: dashboard-2.js
Associated file		: index-2.html
Plugin dependency	: - plugins/counter-up-master/jquery.counterup.min.js
					  - plugins/chart.js/Chart.bundle.js
					  - plugins/card-refresh/refresh.js
*/

$(function() {

	'use strict';
	
	/* =========== CounterUp Number (4 cards at the middle) ================= */
	$('.counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
				$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			}
		});
	});
	/* ------------------------------------------------ */

	/* =========== Social feeds, meet new member, whats new card scrollbar ================= */
	jQuery('.dashboard-scroll-3').scrollbar();
	/* ------------------------------------------------ */
	
	/* =========== Card refresh (Current VS Last week) ================= */
	$('#refresh1').refreshMe({
		parentSelector:function(ele){ele.html(".card")}
	});
	/* ------------------------------------------------ */

	/* =========== Current VS Last Week card (line w/ background chart) ================= */
	var ctx = $("#chart_verticalBar");
	var chart_verticalBar = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
			datasets: [{
				label: 'Visitors',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: 'rgba(177,149,219, 1)',
				borderColor: 'rgba(86,61,124, 1)',
				pointRadius: 2,
				borderWidth: 1
			}, {
				label: 'Visitors',
				data: [4,15,20,10,11,7],
				backgroundColor: 'rgba(204,204,204, .5)',
				borderColor: 'rgba(204,204,204, 1)',
				pointRadius: 2,
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					},
					display: false,
					scaleLabel: {
						display: false
					}
				}],
				xAxes: [{
					display: false,
					scaleLabel: {
						display: false
					}
				}]
			}
		}
	});
	/* ------------------------------------------------ */

	/* =========== Current VS Last Week card (line chart) ================= */
	var ctx4 = $("#chart_basicLine");
	var chart_basicLine = new Chart(ctx4, {
		type: 'line',
		data: {
			labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
			datasets: [{
				label: "My First dataset",
				data: [12, 19, 3, 5, 2, 3, 0],
				fill: false,
				backgroundColor: 'rgba(86,61,124, 1)',
				borderColor: 'rgba(86,61,124, 1)',
				borderWidth: 2
			}]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Your Weekly Login Stat'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: false
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: false
					}
				}]
			}
		}
	});
	/* ------------------------------------------------ */

});