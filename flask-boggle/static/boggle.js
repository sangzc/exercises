
//wait for DOM to load
$(document).ready(async function(e){
    

    //listener on submit form
    let $submitForm = $('#guess-form');
    let $answerResult = $('#answer-result');
    let $scoreKeeping = $('#score-keeping');
    let $stopWatch = $(".stop-watch");
    




    //listen for form submit
    $submitForm.on('submit', async function(e){
        e.preventDefault()
        let guess_word = $('#guess-word').val();
        let response = await $.post('/guess_check/',{guess:guess_word});
        let response = await $.post('/guess_check/',{guess:guess_word});
        $answerResult.text('Your guess was ' + response.result +'.');
        let newScore = getScore(response, guess_word);
        $scoreKeeping.text(newScore);
        
    });


    function getScore(response,guess_word){
        let currentScore = $scoreKeeping.text();
        currentScore = parseInt(currentScore);
        if(response.result === "ok"){
            return currentScore + guess_word.length;
        }
        else{
            return currentScore;
        }
    }

    function timer(){
        
    }
    
    
    
});


