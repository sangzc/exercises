
// Toggle form when submit in nav is clicked

$('#submitNav').on('click', function(evt){
    $('#newStoryForm').toggle()
});

// Create a new story when form is submitted

$('#newStoryForm').on("submit", (function(evt){
    evt.preventDefault();

    let title = $('#titleInput').val();
    let url = $('#urlInput').val();

    let lemon = '<i class="far fa-lemon"></i>';
    let storyTitle = `<a class="storyTitle" href="${url}">${title}</a>`;
    let storyLink = `<a class="storyLink" href="${url}">(${url})</a>`;
    $('ol').append(`<li>${lemon} ${storyTitle} ${storyLink}</li>`);
    // return false;
}))

$('i').on("click", function(evt){
    console.log('click the lemon')
    let lemon = $(evt.target)
    console.log(lemon)
    $(evt.target).toggleClass('far fas')
})