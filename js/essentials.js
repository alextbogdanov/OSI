// CLICK OUTSIDE JS PLUGIN
(function(jQuery) {
    jQuery.fn.clickoutside = function(callback) {
       var outside = 1, self = $(this);
       self.cb = callback;
       this.click(function() {
          outside = 0;
       });
       $(document).click(function() {
          outside && self.cb();
          outside = 1;
       });
       return $(this);
    }
 })(jQuery); 

// SIDENAV FUNCTIONALITY
$('.toggle-sidenav').click(() => {
    $('body').toggleClass('toggled')
    $('.body-wrapper').toggleClass('toggled')
})
$('.close-sidenav').click(() => {
    $('body').removeClass('toggled')
    $('.body-wrapper').removeClass('toggled')
})
$('.toggle-sidenav, .sidenav').clickoutside(() => {
    $('body').removeClass('toggled')
    $('.body-wrapper').removeClass('toggled')
})

$('.close-sidenav-link').click(function() {
    $('body').removeClass('toggled')
    $('.body-wrapper').removeClass('toggled')
})