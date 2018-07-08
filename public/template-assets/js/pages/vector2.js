$(function() {

	var onlineUsers = {
			'TR':1250,
			'DE':1120,
			'RU':1800,
			'AR':918,
			'CA':1122,
			'US':1624,
			'HU':242,
			'VE':125,
			'AU':417
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
				values:onlineUsers,
				scale:['#a7dad5','#009688'],
				normalizeFunction:'polynomial'
			}]
		},
		onRegionTipShow: function(e,el,code){
				if( onlineUsers[code]!== undefined ){
					el.html(el.html()+': '+ onlineUsers[code]+' online users');
				}
		}
	});
		
	$('.jvector-map + table').dataTable({
		sorting:[[2,'desc']],
		pageLength:5,
		lengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]]
	});

});