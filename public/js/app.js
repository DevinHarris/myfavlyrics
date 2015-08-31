(function($) {

	var $artist = $('#artist'),
		$song = $('#song-name'),
		$lyrics = $('#lyrics'),
		$button = $('#new'),
		$body = $('body'),
		$images = ['/images/bg1.jpg', '/images/bg2.jpg', '/images/bg3.jpg'],
		current = 0;

	$button.click(function() {
		getLyrics();
	});

	function getLyrics() {

		// get lyrics from JSON file

		$.getJSON('lyrics/lyrics.json')
			.done(function(data) {

				//generating a random number between 0 and the items in lyrics.json

				var index = Math.floor(Math.random() * data.lyrics.length),
					googleURL = 'http://google.com/search?q=' + data.lyrics[index].artist + "-" + data.lyrics[index].song;

					// regular expression for finding spaces

					removeSpaces = /\s+/gi;
					//used = [],
					//count = 0;
				
				// append the artist to $('$band')

				$artist.text(data.lyrics[index].artist);
				$song.html('');
				$song.append('<a href=' + googleURL.replace(removeSpaces, '+') + '>' + data.lyrics[index].song + '</a>' );
				$lyrics.text(data.lyrics[index].lyrics);
				$song.children('a').prop('target', "_blank");



			})
			.fail(function(err) {
				console.log(err);
			});
	}

	setInterval(function() {
		current++;
		if (current > $images.length-1) {
			current = [0];
		}

		$body.css({
			'background': 'url(' + $images[current] + ') no-repeat center center',
     		'background-size': 'cover'
		});

		
	}, 5000); 

	getLyrics();

})(jQuery);