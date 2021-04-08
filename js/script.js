$(document).ready(function() {
    $('.teaser-home-content').on('click', '#btn-bowner', function(e) {
    	e.preventDefault();
        $('.teaser-home-content').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.teaser-home-owner').removeClass('fadeOutLeft').addClass('fadeInLeft');
        setTimeout(function() {
            $('.teaser-home-content').addClass('hide');
            $('.teaser-home-owner').removeClass('hide');
        }, 1000);
    });
    $('.teaser-home-owner').on('click', '#btn-bowner-back', function(e) {
    	e.preventDefault();
        $('.teaser-home-owner').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.teaser-home-content').removeClass('fadeOutLeft').addClass('fadeInLeft');
        setTimeout(function() {
            $('.teaser-home-content').removeClass('hide');
            $('.teaser-home-owner').addClass('hide');
        }, 1000);
        
    });
});
