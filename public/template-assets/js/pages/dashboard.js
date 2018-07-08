/*
File				: dashboard.js
Associated file		: index.html
Plugin dependency	: - plugins/counter-up-master/jquery.counterup.min.js
					  - plugins/chart.js/Chart.bundle.js
					  - plugins/DataTables/js/jquery.dataTables.min.js
					  - js/pages/table-data.js
					  - plugins/peity/jquery.peity.min.js
					  - plugins/card-refresh/refresh.js
*/

$(function() {

	'use strict';
	
	/* =========== CounterUp Number (4 cards at the top) ================= */
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

	/* =========== Device resource (bar chart) ================= */
	var ctx = $("#chart_verticalBar");
	var chart_verticalBar = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
			datasets: [{
				label: 'Dataset 1',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: '#ff0000'
			}, {
				label: 'Dataset 2',
				data: [10, 11, 7, 6, 6, 9],
				backgroundColor: '#0000ff'
			}, {
				label: 'Dataset 2',
				data: [14, 15, 8, 9, 7, 4],
				backgroundColor: '#DDD'
			}]
		},
		options: {
			legend:{
				display:false
			},
			tooltips: {
				mode: 'index',
				intersect: false
			},
			responsive: true,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true
				}]
			}
		}
	});
	/* ------------------------------------------------ */

	/* =========== Server load (pie chart) ================= */
	var ctx2 = $("#chart_pie");
	var chart_pie = new Chart(ctx2, {
		type: 'pie',
		data: {
			labels: ["DNS", "Mail", "Router", "Blog"],
			datasets: [{
				label: 'Visitors',
				data: [19023, 104962, 11107, 76551],
				backgroundColor: [
					'#ff0000',
					'#ff9900',
					'#0000FF',
					'rgba(75, 192, 192, 1)',
				]
			}]
		},
		options: {
			legend: {
				display: false
			},
			responsive: false
		}
	});
	/* ------------------------------------------------ */

	/* =========== Invoice DataTables (JS Call) ================= */
	$('#mytable').DataTable( {
		"order": [[ 3, "desc" ]]
	});
	/* ------------------------------------------------ */
	
	/* =========== Pie Progress on Invoice table (JS Call) ================= */
	$.fn.peity.defaults.pie = {
		delimiter: null,
		fill: ["#563d7c", "#e0e0e0", "#b2dfdb"],
		height: null,
		radius: 8,
		width: null
	};
	$("span.pie").peity("pie");
	/* ------------------------------------------------ */

	/* =========== Card refresh (Device resource) ================= */
	$('#refresh1').refreshMe({
		parentSelector:function(ele){ele.html(".card")}
	});
	/* ------------------------------------------------ */
	
});