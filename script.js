$(document).ready(function () {
	$('.btn-primary').click(function () {
		var players_alive = parseFloat($('input[name=players-alive]').val());
		var players_dead = parseFloat($('input[name=players-dead]').val());
		var cs_alive = parseFloat($('input[name=cs-alive]').val());
		var cs_dead = parseFloat($('input[name=cs-dead]').val());
		$('.output').empty();
		$('.output').append('<div>' + (Math.floor(1.443 * Math.log(players_alive + 0.5 * players_dead) + 7 + 16.023 * Math.log(cs_alive + 0.5 * cs_dead) - 13.758)) + '</div>');
	});
});