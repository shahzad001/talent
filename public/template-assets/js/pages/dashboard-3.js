/*
File				: dashboard-3.js
Associated file		: index-3.html
Plugin dependency	: - plugins/counter-up-master/jquery.counterup.min.js
					  - plugins/chart.js/Chart.bundle.js
					  - plugins/jvectormap/jquery-jvectormap-2.0.2.min.js
					  - plugins/jvectormap/jquery-jvectormap-world-mill-en.js
					  - plugins/card-refresh/refresh.js
*/

$(function() {

	'use strict';
	
	/* =========== CounterUp Number (Est. earning & balance) ================= */
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

	/* =========== Scrollbar (Distribution table card; Useful & Top 10 card) ================= */
	jQuery('.dashboard-scroll-3').scrollbar();
	jQuery('.distribution-scroll').scrollbar();
	/* ------------------------------------------------ */

	/* =========== Card opt refresh (distribution sales card) ================= */
	$('#refresh1').refreshMe({
		parentSelector:function(ele){ele.html(".card")}
	});
	/* ------------------------------------------------ */

	/* =========== CounterUp Number (4 cards at the middle) ================= */
	var onlineUsers = {
			'US':1277,
			'CN':1802,
			'CA':295,
			'DE':1081,
			'GB':1005,
			'NL':91,
			'FR':305,
			'BR':339,
	};
	var $el = $('#world-map-markers');
	$el.vectorMap({
		map: 'world_mill_en',
		normalizeFunction: 'polynomial',
		hoverOpacity:0.7,
		hoverColor:false,
		backgroundColor:'transparent',
		regionStyle:{
			initial: {
				'fill':'rgba(210, 214, 222, 1)',
				'fill-opacity':1,
				'stroke':'none',
				'stroke-width':0,
				'stroke-opacity':1
			},
			hover: {
				'fill-opacity':0.7,
				'cursor':'pointer'
			},
			selected: {
				'fill':'yellow'
			},
			selectedHover:{}
		},
		series: {
			regions:[{
				values: onlineUsers,
				scale:['#C2ACE3','#886DB0'],
				normalizeFunction:'polynomial'
			}]
		},
		onRegionTipShow: function(e,el,code){
				if( onlineUsers[code]!== undefined ){
					el.html(el.html()+': $'+ onlineUsers[code]+' gross revenue');
				}
		}
	});
	/* ------------------------------------------------ */

	/* =========== Revenue composition (%) ================= */
	var ctx2 = $("#chart_pie");
	var chart_pie = new Chart(ctx2, {
		type: 'pie',
		data: {
			labels: ["Maintenance", "Project", "Hosting", "Consultant", "Assistance"],
			datasets: [{
				label: 'Visitors',
				data: [12, 19, 3, 5, 2],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'
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
	
});