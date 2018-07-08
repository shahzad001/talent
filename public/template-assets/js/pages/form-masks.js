/*
File				: form-masks.js
Associated file		: form-masks.html
Plugin dependency	: plugins/formatter.js/jquery.formatter.min.js
*/

/* =========== Date & Time ================= */
$('#date-input').formatter({
	'pattern': '{{9999}}-{{99}}-{{99}}'
});
$('#date-input1').formatter({
	'pattern': '{{99}}/{{99}}/{{9999}}'
});
$('#time-demo1').formatter({
	'pattern': '{{99}}:{{99}}'
});
$('#date-time').formatter({
	'pattern': '{{9999}}/{{99}}/{{99}} {{99}}:{{99}}:{{99}}'
});
$('#time-demo2').formatter({
	'pattern': '{{99}}:{{99}}:{{99}}'
});
/* ------------------------------------------------ */

/* =========== Text ================= */
$('#characters-demo').formatter({
	'pattern': '{{aaaaaaaaaa}}'
});
/* ------------------------------------------------ */

/* =========== Phone ================= */
$('#phone-demo').formatter({
	'pattern': '({{999}}) {{999}}-{{9999}}',
	'persistent': true
});
$('#phone-code').formatter({
	'pattern': '+91 {{99}}-{{99}}-{{999999}}',
	'persistent': true
});
/* ------------------------------------------------ */

/* =========== Currency ================= */
$('#currency-demo').formatter({
	'pattern': '$ {{999}}-{{999}}-{{999}}.{{99}}',
	'persistent': true
});
/* ------------------------------------------------ */

/* =========== Misc ================= */
$('#credit-demo').formatter({
	'pattern': '{{9999}}-{{9999}}-{{9999}}-{{9999}}',
	'persistent': true
});
$('#product-key').formatter({
	'pattern': 'm{{*}}-{{999}}-{{999}}-C{{99}}',
	'persistent': true
});
$('#purchase-code').formatter({
	'pattern': 'ISBN{{9999}}-{{9999}}-{{9999}}-{{9999}}',
	'persistent': true
});
/* ------------------------------------------------ */