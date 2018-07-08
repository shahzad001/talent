$(document).ready(function() {
  	$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
		var $total = navigation.find('li').length;
		var $current = index+1;
		var $percent = ($current/$total) * 100;
		var $percent2 = $percent - 25; // olehku
		$('#rootwizard .progress-bar').css({width:$percent+'%'});
	}});
});