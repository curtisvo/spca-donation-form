(function($) {
	$('#mongo-form').on('formReady', function() {

		$('.BBFormTextbox').change(function() {
			alert('change');
			console.log('change');
		});
	});


	/* for first/last name */
	function cleanName(str) {
		capitalize(str.trim());
	}

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase;
	}
}) ( jQuery );
