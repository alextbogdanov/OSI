// READ MORE JS
$('#read-more').click(function() {
    let text = $('#read-more-text')

    if($(text).hasClass('hidden')) {
        $(this).html('Покажи по-малко')
        $(text).removeClass('hidden')
        $(text).addClass('shown')
    } else {
        $(this).html('Покажи повече')
        $(text).removeClass('shown')
        $(text).addClass('hidden')
    }
})

// QUESTIONNAIRE JS
$('.question').click(function() {
    let index = $(this).index('.question')
    
    $('.answer').eq(index).slideToggle()
})