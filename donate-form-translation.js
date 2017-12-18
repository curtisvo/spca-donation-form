(function($) {
jQuery(document).ready(function($) {
	$('body #mongo-form').waitUntilExists(function() {
		$('#mongo-form').trigger("formReady");
		
		// Update donation dollar amounts
		$('#bboxdonation_gift_rdlstGivingLevels .BBFormRadioAmount').each(function(index, value){
			var dollarval = $(this).html();
			dollarval = dollarval.replace('$','');
			$(this).html(dollarval+' $');
		})
		$('#bboxdonation_gift_rdlstGivingLevels .BBFormRadioDescriptionOther').html('Autre');
		$('#bboxdonation_recurrence_lblRecurringGift').html('Donnez mensuellement');
		
		$('#lblRecurrenceNextGiftDate').html(function(index,html){
		    return html.replace('Your first gift will occur on','Votre premier don sera prélevé le');
		});
		
		$('#bboxdonation_recurrence_divRecurrenceInfo').html(function(index,html){
			html = html.replace('Give','Donnez');
			html = html.replace('monthly','Mensuellement');
			html = html.replace(' on ',' le ');
			html = html.replace('day 15 of each month','15 de chaque mois');
			html = html.replace('day 1 of each month', 'premier de chaque mois');
		    return html;
		});

		$('#bboxdonation_tribute_ddTributeTypes option[value="387"]').html('En l\'honneur de');
		$('#bboxdonation_tribute_ddTributeTypes option[value="388"]').html('À la mémoire de');
		
		$('#bboxdonation_tribute_txtTributeRecordName').attr('placeholder', 'Nom complet');
		$('#bboxdonation_tribute_lblTributeAcknowledgee').html('SVP veuillez aviser la personne suivante de mon don');
		
		$('#bboxdonation_billing_txtFirstName').attr('placeholder', 'Prénom');
		$('#bboxdonation_tribute_txtFirstName').attr('placeholder', 'Prénom');
		
		$('#bboxdonation_billing_txtLastName').attr('placeholder', 'Nom de famille');
		$('#bboxdonation_tribute_txtLastName').attr('placeholder', 'Nom de famille');

		$('#bboxdonation_billing_txtPhone').attr('placeholder', 'Optionnel');
		
		$('#bboxsecure').html('Les paiements sont traités par Blackbaud');
		
		$('#bboxdonation_payment_cboCardType option:first-child').html('&lt;SVP sélectionnez&gt;');
		
		$('#bboxdonation_payment_cboMonth option:first-child').html('Mois');
		$('#bboxdonation_payment_cboYear option:first-child').html('Année');
		
		$('#bboxdonation_giftattributes_ctl00_ddYesNo option:nth-of-type(2)').html('Oui');
		$('#bboxdonation_giftattributes_ctl00_ddYesNo option:nth-of-type(3)').html('Non');

		$('#bboxdonation_comment_txtComments').attr('placeholder', 'Optionnel');
		
                $('#bboxdonation_recurrence_lblRecurringGift').html("J'aimerais devenir un donateur mensuel<br/><span class='uniqueText'>(Cochez pour devenir donateur mensuel)</span>");
	});
	
	// CSC popup content doesn't appear until link is clicked
	$('body #divCSCWhatsThis').waitUntilExists(function() {

		$("#cluetip-title").contents().filter(function(){return this.nodeType == 3;})[0].nodeValue = "Qu'est-ce que le code de sécurité de votre carte?"; 
		$('#cluetip-close a').html('fermer');
		$('.DonationHelpFormCSCTable table tr:first-of-type td div').html("Le code de sécurité de la carte (CSC) est un numéro à  3 ou 4 chiffres qui ne fait pas partie du numéro de carte de crédit.<br /><br />Le numéro apparaît uniquement sur la carte elle-même (et non sur les reçus ou les déclarations), de sorte qu'il donne une certaine assurance que la carte physique est en votre possession. Cela nous aide à réduire la fraude.");
		
		$('.DonationHelpFormCSCTable table tr:nth-of-type(3) td:nth-of-type(2) b').html("Le CSC correspond aux trois derniers chiffres du panneau du numéro de compte.");
		$('.DonationHelpFormCSCTable table tr:nth-of-type(5) td:nth-of-type(2) b').html("Le SCC est un numéro à quatre chiffres imprimé au-dessus et à la droite du numéro de compte.");
		$('.DonationHelpFormCSCTable table tr:nth-of-type(6) td:nth-of-type(2) b').html("Le SCC est un numéro à quatre chiffres imprimé au-dessus et à gauche du numéro de compte.");
	});
	
	// Blackbaud popup content doesn't appear until link is clicked
	$('body #divBBSecure').waitUntilExists(function() {
		$("#cluetip-title").contents().filter(function(){return this.nodeType == 3;})[0].nodeValue = "Apprenez-en plus sur la façon dont vos informations de carte de crédit sont protégés par Blackbaud"; 
		
		$('#cluetip-close a').html('fermer');
		$('#cluetip-inner .DonationHelpFormCSCTable h2:first-of-type').html('Le paiement a été traité par Blackbaud');
		$('#cluetip-inner .DonationHelpFormCSCTable p:first-of-type').html("Blackbaud traite votre don au nom de cette organisation à but non lucratif. Pour protéger les informations de votre carte de crédit, lorsqu'il est utilisé conformément aux instructions du fabricant, Blackbaud:");
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(2)').html("Chiffre les informations personnelles et de carte de crédit durant toutes les transactions.<br />Envoie un courriel de confirmation automatisé pour toutes les transactions.");
		$('#cluetip-inner .DonationHelpFormCSCTable h2:nth-of-type(2)').html('À propos de Blackbaud');
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(3)').html("Au service des secteurs à but non lucratif et de l'éducation depuis 30 ans, Blackbaud (NASDAQ: BLKB) allie technologie et expertise pour aider les organisations à réaliser leurs missions. Blackbaud travaille avec plus de 27 000 clients dans plus de 60 pays qui soutiennent l'enseignement supérieur, les soins de santé, les services sociaux, les arts et la culture, la foi, l'environnement, l'éducation K-12 indépendante, le bien-être animal et d'autres causes caritatives. Blackbaud est basée à Charleston, S.C., et a des opérations aux États-Unis, en Australie, au Canada, au Mexique, aux Pays-Bas et au Royaume-Uni. Pour plus d'informations, visitez www.blackbaud.com.");
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(4)').html("Copyright 2016 Blackbaud, Inc. Tous droits réservés.");	
	});

	$('body #bboxdonation_divThanks').waitUntilExists(function() {
		$('.GLShareHeader').html('Help start a givalanche of good');
		$('.GLBodyText').html(function(index,html){
		    html = html.replace('Share & ask your friends and family to chip in.','Partagez & demandez à vos amis de participer.');
		    html =  html.replace('As others give, your gift will snowball into a Givalanche.','test-');
		    return html.replace('We\'ll keep you updated as your Givalanche grows!','test-We\'ll keep you updated as your Givalanche grows!');
		});
		$('.GLShareTitle').html('Share to get the Givalanche rolling:');
		$('.GLCopyLinkButtonText').html('Copier le lien');
		$('div.BBFormConfirmationTransactionDetails span').html(function(index, html){
			html = html.replace('Your gift details:', 'Détails de votre don:');
			html = html.replace('Amount:', 'Montant:');
			html = html.replace('Payment Method:', 'Méthode de paiement:');
			html = html.replace('Designation:', 'Appellation:');
		});
		$('#difference-text').hide();
	});

	$('body .BBFormInlineErrorItem').waitUntilExists(function() {
		$('div[aria-label="Please enter first name"]').html('Veuillez indiquer votre prénom');
		$('div[aria-label="Please enter last name"]').html('Veuillez indiquer votre nom');
		$('div[aria-label="Please enter courriel"]').html('Veuillez indiquer votre adresse courriel');
		$('div[aria-label="Please enter adresse"]').html('Veuillez indiquer votre adresse');
		$('div[aria-label="Please enter ville"]').html('Veuillez indiquer votre ville');
		$('div[aria-label="Please select province"]').html('Veuillez sélectionner votre province');
		$('div[aria-label="Please enter postal"]').html('Veuillez indiquer votre code postal');
		$('div[aria-label="Please enter nom du détenteur de la carte"]').html('Veuillez indiquer le nom du détenteur de la carte');
		$('div[aria-label="Please enter numéro de la carte"]').html('Veuillez indiquer le numéro de la carte');
		$('div[aria-label="Please select month"]').html('Veuillez sélectionner le mois');
		$('div[aria-label="Please select year"]').html('Veuillez sélectionner l\'année');
		$('div[aria-label="Please enter csc"]').html('Veuillez indiquer le csc');
	});

	$('body #divError').waitUntilExists(function() {
		$('div[aria-label="Please specify a valid téléphone"]').html('Veuillez indiquer un numéro de téléphone valide');
		$('.BBFormServerErrorItem').each(function() {
			$(this).html(function(index, html) {
				html = html.replace('We\'ve run into a slight problem. Correct the following to continue:', 'Veuillez corriger les erreurs suivants pour continuer:');
				html = html.replace('Please specify a valid téléphone', 'Veuiller indiquer un numéro de téléphone valide');
				html = html.replace('Card number is not valid', 'Le numéro de la carte n\'est pas valide');
				html = html.replace('One or more fields in the request contains invalid data', 'Un ou plusieurs champs du formulaire contiennent des données invalide')
				html = html.replace('Please call the number on the back of your card.  Your bank requested that we do not honor this card.', 'Veuillez appeler le numéro au dos de votre carte.  Votre banque ne nous permet pas d\'accepter ce paiement');
				html = html.replace('Expired card.', 'La carte est expiré.');
				return html;
			});
		})
	});
});
}) ( jQuery );
