$(document).ready(function() {

 $("#listen_more").click(function() {
             var play = document.getElementById("listen_more");
              var audio = document.getElementById("audio_more");
              console.log("hi")
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
              $("#compare_button").click(function(){
               var newURL =  '/compare/0/1';
               window.location.href = newURL;

                  })

    })


