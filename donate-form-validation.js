(function($) {
	jQuery(document).ready(function($) {

	$('#bboxdonation_billing_txtFirstName').change(function() {
		alert('change');
	});


	/* for first/last name */
	function cleanName(str) {
		capitalize(str.trim());
	}

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase;
	}
});
}) ( jQuery );
