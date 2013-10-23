$(document).ready(function() {
  var job_id = false;
  function checkStatus(){
    $.get("/status/" + job_id, function(response){
      if(response == "true"){
        $('#pending').toggle();
        alert("Your Tweet was sent, dude");
        clearInterval(interval);
      }
    });
  }

 var interval =  setInterval(function(){checkStatus()}, 2000);

  $('#tweetbox').on('submit', function(event){
    event.preventDefault();
    $('#tweet').prop('disabled', true);
    $('#submit').prop('disabled', true);
    var data = {jonsdecision : $('#tweet').val(), time : $('#time').val() };
    $.post('/tweet', data, function(response){
      $('#submit').replaceWith("<div id='pending'><h5>Your Post is Pending</h5></div>")
      job_id = response;
    });
  });
});

