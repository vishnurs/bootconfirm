/**
 *A jQuery Function to alert data based on Twitter Bootstrap Modal
 * 
 * @author Vivek. V
 * www.vivekv.com 
 * 
 * How to call the function ?
 * -----------------------------
 * Simply use the function as
 * 
 * $.bootalert("Success", "Your message has been posted!") ;
 * 
 */

$.extend({
	bootalert: function(heading, msg, btnClass) {
		
		var btnClass = btnClass || 'btn-primary' ;
		
		if (!$('#dataAlertModal').length) {
			$('body').append('<div id="dataAlertModal" class="modal fade" role="dialog" aria-labelledby="dataAlertLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 id="dataAlertLabel">Notification</h3></div><div class="modal-body"></div><div class="modal-footer"><button class="btn ' + btnClass + '" data-dismiss="modal" aria-hidden="true">Ok</button></div></div>');
		}
			$('#dataAlertModal #dataAlertLabel').text(heading);
			$('#dataAlertModal').find('.modal-body').text(msg);
			$('#dataAlertModal').modal({
				show : true
			});
	}
});

