/*
File				: table-data.js
Associated file		: table-data.html
Plugin dependency	: - plugins/DataTables/js/jquery.dataTables.min.js
					  - plugins/DataTables/css/jquery.dataTables.min.css
*/

$(function() {
	
	/* =========== Examples card ================= */
	$('#example1').DataTable( {
		"order": [[ 3, "desc" ]]
	});
	/* ------------------------------------------------ */
		
	/* =========== Row grouping card ================= */
	var table = $('#example2').DataTable({
		"columnDefs": [{
			"visible": false,
			"targets": 2
		}],
		"order": [
				[2, 'asc']
		],
		"displayLength": 25,
		"drawCallback": function(settings) {
				var api = this.api();
				var rows = api.rows({
					page: 'current'
				}).nodes();
				var last = null;
					
				api.column(2, {
					page: 'current'
				}).data().each(function(group, i) {
					if (last !== group) {
						$(rows).eq(i).before(
							'<tr class="group"><td colspan="5">' + group + '</td></tr>'
						);
							
						last = group;
					}
				});
		}
	});
			
	// Order by the grouping
	$('#example2 tbody').on('click', 'tr.group', function() {
		var currentOrder = table.order()[0];
		if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
			table.order([2, 'desc']).draw();
		} else {
			table.order([2, 'asc']).draw();
		}
	});

	$(".dataTables_wrapper .dropdown-content.select-dropdown li").on("click", function() {
		var that = this;
		setTimeout(function() {
			if ($(that).parent().hasClass('active')) {
				$(that).parent().removeClass('active');
				$(that).parent().prev().removeClass('active');
				$(that).parent().hide();
				$(that).removeClass('selected');
			}
		}, 40);
	});
	/* ------------------------------------------------ */
});