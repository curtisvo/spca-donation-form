(function($) {
jQuery(document).ready(function($) {
	$('body #mongo-form').waitUntilExists(function() {
		
		// Update donation dollar amounts
		$('#bboxdonation_gift_rdlstGivingLevels .BBFormRadioAmount').each(function(index, value){
			var dollarval = $(this).html();
			dollarval = dollarval.replace('$','');
			$(this).html(dollarval+' $');
		})
		$('#bboxdonation_gift_rdlstGivingLevels .BBFormRadioDescriptionOther').html('Autre');
		$('#bboxdonation_recurrence_lblRecurringGift').html('Donnez mensuellement');
		
		$('#lblRecurrenceNextGiftDate').html(function(index,html){
		    return html.replace('Your first gift will occur on','Votre premier don aurai lieu le');
		});
		
		$('#bboxdonation_recurrence_divRecurrenceInfo').html(function(index,html){
			html = html.replace('Give','Donnez');
			html = html.replace('monthly','Mensuellement');
			html = html.replace(' on ',' le ');
			html = html.replace('day 15 of each month','15 de chaque mois');
		    return html;
		});
		
		$('#bboxdonation_tribute_txtTributeRecordName').attr('placeholder', 'Nom complet');
		$('#bboxdonation_tribute_lblTributeAcknowledgee').html('SVP veuillez la personne suivante de mon don');
		
		$('#bboxdonation_billing_txtFirstName').attr('placeholder', 'PrÃ©nom');
		$('#bboxdonation_tribute_txtFirstName').attr('placeholder', 'PrÃ©nom');
		
		$('#bboxdonation_billing_txtLastName').attr('placeholder', 'Nom de famille');
		$('#bboxdonation_tribute_txtLastName').attr('placeholder', 'Nom de famille');
		
		$('#bboxsecure').html('Les paiements sont traitÃ©s par Blackbaud');
		
		$('#bboxdonation_payment_cboCardType option:first-child').html('&lt;SVP sÃ©lectionnez&gt;');
		
		$('#bboxdonation_payment_cboMonth option:first-child').html('Mois');
		$('#bboxdonation_payment_cboYear option:first-child').html('AnnÃ©e');
		
		$('#bboxdonation_giftattributes_ctl00_ddYesNo option:nth-of-type(2)').html('Oui');
		$('#bboxdonation_giftattributes_ctl00_ddYesNo option:nth-of-type(3)').html('Non');

		$('#bboxdonation_comment_txtComments').attr('placeholder', 'Optionnel');
		
	});
	
	// CSC popup content doesn't appear until link is clicked
	$('body #divCSCWhatsThis').waitUntilExists(function() {

		$("#cluetip-title").contents().filter(function(){return this.nodeType == 3;})[0].nodeValue = "Qu'est-ce que le code de sÃ©curitÃ© de votre carte?"; 
		$('#cluetip-close a').html('fermer');
		$('.DonationHelpFormCSCTable table tr:first-of-type td div').html("Le code de sÃ©curitÃ© de la carte (CSC) est un numÃ©ro Ã  3 ou 4 chiffres qui ne fait pas partie du numÃ©ro de carte de crÃ©dit.<br /><br />Le numÃ©ro apparaÃ®t uniquement sur la carte elle-mÃªme (et non sur les reÃ§us ou les dÃ©clarations), de sorte qu'il donne une certaine assurance que la carte physique est en votre possession. Cela nous aide Ã  rÃ©duire la fraude.");
		
		$('.DonationHelpFormCSCTable table tr:nth-of-type(3) td:nth-of-type(2) b').html("Le CSC correspond aux trois derniers chiffres du panneau du numÃ©ro de compte.");
		$('.DonationHelpFormCSCTable table tr:nth-of-type(5) td:nth-of-type(2) b').html("Le SCC est un numÃ©ro Ã  quatre chiffres imprimÃ© au-dessus et Ã  la droite du numÃ©ro de compte.");
		$('.DonationHelpFormCSCTable table tr:nth-of-type(6) td:nth-of-type(2) b').html("Le SCC est un numÃ©ro Ã  quatre chiffres imprimÃ© au-dessus et Ã  gauche du numÃ©ro de compte.");
	});
	
	// Blackbaud popup content doesn't appear until link is clicked
	$('body #divBBSecure').waitUntilExists(function() {
		$("#cluetip-title").contents().filter(function(){return this.nodeType == 3;})[0].nodeValue = "Apprenez-en plus sur la faÃ§on dont vos informations de carte de crÃ©dit sont protÃ©gÃ©s par Blackbaud"; 
		
		$('#cluetip-close a').html('fermer');
		$('#cluetip-inner .DonationHelpFormCSCTable h2:first-of-type').html('Le paiement a Ã©tÃ© traitÃ© par Blackbaud');
		$('#cluetip-inner .DonationHelpFormCSCTable p:first-of-type').html("Blackbaud traite votre don au nom de cette organisation Ã  but non lucratif. Pour protÃ©ger les informations de votre carte de crÃ©dit, lorsqu'il est utilisÃ© conformÃ©ment aux instructions du fabricant, Blackbaud:");
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(2)').html("Chiffre les informations personnelles et de carte de crÃ©dit durant toutes les transactions.<br />Envoie un courriel de confirmation automatisÃ© pour toutes les transactions.");
		$('#cluetip-inner .DonationHelpFormCSCTable h2:nth-of-type(2)').html('Ã€ propos de Blackbaud');
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(3)').html("Au service des secteurs Ã  but non lucratif et de l'Ã©ducation depuis 30 ans, Blackbaud (NASDAQ: BLKB) allie technologie et expertise pour aider les organisations Ã  rÃ©aliser leurs missions. Blackbaud travaille avec plus de 27 000 clients dans plus de 60 pays qui soutiennent l'enseignement supÃ©rieur, les soins de santÃ©, les services sociaux, les arts et la culture, la foi, l'environnement, l'Ã©ducation K-12 indÃ©pendante, le bien-Ãªtre animal et d'autres causes caritatives. Blackbaud est basÃ©e Ã  Charleston, S.C., et a des opÃ©rations aux Ã‰tats-Unis, en Australie, au Canada, au Mexique, aux Pays-Bas et au Royaume-Uni. Pour plus d'informations, visitez www.blackbaud.com.");
		$('#cluetip-inner .DonationHelpFormCSCTable p:nth-of-type(4)').html("Copyright Â© 2016 Blackbaud, Inc. Tous droits rÃ©servÃ©s.");	
	});
});
}) ( jQuery );
