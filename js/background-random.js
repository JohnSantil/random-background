$(function() {
	var images = ['am.jpg', 'dc.jpg', 'vp.jpg', 'bo.jpg', 'pf.jpg', 'fh.jpg', 'dt.jpg'];
	$('.background-random').css({'background-image': 'url(media/' + images[Math.floor(Math.random() * images.length)] + ')'});
});