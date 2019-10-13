// LAYERS JS
$('.layer h2').click(function() {
    let index = $(this).index('.layer h2')

    $('.layer-content').eq(index).slideToggle()
})