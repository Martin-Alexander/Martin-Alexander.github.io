$(document).ready(function () {
	$('.btn-primary').click(function () {
		var players_alive = parseFloat($('input[name=players-alive]').val());
		var players_dead = parseFloat($('input[name=players-dead]').val());
		var cs_alive = parseFloat($('input[name=cs-alive]').val());
		var cs_dead = parseFloat($('input[name=cs-dead]').val());
		if (isNaN(players_alive)) {
			$('.box1').css({"color": "red"});
		} else {
			$('.box1').css({"color": "black"});
		};
		if (isNaN(players_dead)) {
			$('.box2').css({"color": "red"});
		} else {
			$('.box2').css({"color": "black"});
		};
		if (isNaN(cs_alive)) {
			$('.box3').css({"color": "red"});
		} else {
			$('.box3').css({"color": "black"});
		};
		if (isNaN(cs_dead)) {
			$('.box4').css({"color": "red"});
		} else {
			$('.box4').css({"color": "black"});
		};		
		if (!isNaN(players_alive) && !isNaN(players_dead) && !isNaN(cs_alive) && !isNaN(cs_dead)) {
			$('.output').empty();
			$('.error').empty();
			$('.output').append('<div>' + (Math.floor(1.443 * Math.log(players_alive + 0.5 * players_dead) + 7 + 16.023 * Math.log(cs_alive + 0.5 * cs_dead) - 13.758)) + '</div>');
		} else {
			$('.output').empty();
			$('.error').empty();
			$('.error').append("<div> Error: All Fields Must Contain Numbers <div>");
		};
	});
});

