


$(document).ready(function() {

	$('form').submit(function() {

		var first = $('#first_name').val();
		var last = $('#last_name').val();
		var email = $('#email').val();
		var tel = $('#tel').val();

		$('tbody').append('<tr></tr>');
		$('tbody tr:last-child').append("<td>"+first+"</td>")
		$('tbody tr:last-child').append("<td>"+last+"</td>")
		$('tbody tr:last-child').append("<td>"+email+"</td>")
		$('tbody tr:last-child').append("<td>"+tel+"</td>")
		return false;
	})







})