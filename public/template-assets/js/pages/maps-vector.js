$(function() {
	$('#worldmap').vectorMap({map: 'world_mill_en',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#usamap').vectorMap({map: 'us_aea',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#rusmap').vectorMap({map: 'ru_mill',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#thmap').vectorMap({map: 'th_mill',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#demap').vectorMap({map: 'de_mill',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#us-chicagomap').vectorMap({map: 'us-il-chicago_mill',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});

	$('#us-nymap').vectorMap({map: 'us-ny-newyork_mill',
		backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#8d8d8d'
				}
        	}
	});
});