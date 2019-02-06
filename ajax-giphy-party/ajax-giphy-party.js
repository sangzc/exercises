$(function() {
    const giphKey = "IAE9QZ50gOki1JLjO56xcWnXLUCPfAQL"

    //On click of submit button:
    // Get val from search field
    //Submit GET to Giphy, append gif to DOM
    $("#search-form").on("submit", function(evt) {

        evt.preventDefault();
        const hostName = 'https://api.giphy.com/v1/gifs/search?q='
        let searchVal = $("#search").val();

        $.get(`${hostName}${searchVal}&api_key=${giphKey}`, async function(res) {
            let resLength = Object.keys(res.data).length
            let randomNum = await Math.floor(Math.random()*(resLength));    
            let imgUrl = res.data[randomNum].images.original.url;    
            
            $("#display").append(`<img src="${imgUrl}" alt="oh noes!" class="gif">`)

        })
    });

    // On click, reset #display html to blank string.
    $("#reset-button").on("click", function(evt){
        $("#display").html("");
    })

});