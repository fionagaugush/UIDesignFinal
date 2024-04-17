$(document).ready(function() {

var bird1 = document.getElementById('bird1');

var bird2 = document.getElementById('bird2');


bird1.value = first;

bird2.value = second;
  bird1.addEventListener('change', function() {

    var newFirst = this.value;

    var newURL = "/compare/"  + newFirst + "/" + second;

    window.location.href = newURL;
    })

    var bird2 = document.getElementById('bird2');
      bird2.addEventListener('change', function() {

        var newSecond = this.value;

        var newURL = "/compare/"  + first + "/" + newSecond;

        window.location.href = newURL;
        })








 $("#listen_first").click(function() {
             var play = document.getElementById("listen_first");
              var audio = document.getElementById("audio_first");

              if (audio.paused) {
                    audio.play();
                    play.textContent = 'Pause Sound';
                } else {
                    audio.pause();
                    play.textContent = 'Play Sound';
                }

    });


$("#listen_second").click(function() {
             var play = document.getElementById("listen_second");
              var audio = document.getElementById("audio_second");

              if (audio.paused) {
                    audio.play();
                    play.textContent = 'Pause Sound';
                } else {
                    audio.pause();
                    play.textContent = 'Play Sound';
                }

    });


 $("#list_button").click(function(){
              var newURL =  '/learn';
               window.location.href = newURL;

             })
              $("#quiz_button").click(function(){
               var newURL =  '/quiz';
               window.location.href = newURL;

                  })

    })


