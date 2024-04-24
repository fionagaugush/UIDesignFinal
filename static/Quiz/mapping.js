// Start quiz when start button is clicked
$(document).ready(function() {
    display_audio_choices();
    display_drop_zones();

    // Hide next question button until a choice is made
    $("#next-question-button").hide();

    if (question_number >= total_num_questions) {
        $("#next-question-button").text("View Results");
    }
    else {
        $("#next-question-button").text("Next Question");  
    }

    $("#next-question-button").click(function() {

        if (question_number >= total_num_questions) {       
            window.location.href = "/quiz_results";
        }
        else {
            window.location.href = "/quiz/" + (question_number + 1);   
        }
    });

    $("#submit-button").click(function() {
        
        $("#error-message").text("");

        // Keep track of mistakes
        let mistakes = [];
        let canSubmit = true;

        // Loop over all droppables
        $(".ui-droppable").each(function() {
            var droppable = $(this);
            
            if (droppable.data('hasItems') === undefined || droppable.data('hasItems') == false) {
                canSubmit = false;
                $('#error-message').text("Please fill in all drop zones");
                 
            }

            else {
                let droppedItem_id = parseInt(droppable.data('droppedItem_id'));
                let correct_id = parseInt(droppable.attr("id"));

                
                // Incrrect Answer
                if (droppedItem_id != correct_id) {
                    console.log("User selected: " + droppedItem_id, "Correct answer: " + correct_id);
                    mistakes.push([droppedItem_id, correct_id]);
                    
                }
            }    
        });


        // Can submit only if all drop zones are filled with a choice
        if (canSubmit) {
            let awarded_points = (mistakes.length == 0) ? 1 : 0;

            //Update User data
            let user_data = {        
                "step": 2,
                "currentQuizQuestion": question_number + 1,
                "quizScore": parseInt($("#score-value").text()) + awarded_points
            };
            
            save_user_data(user_data);

            console.log(mistakes);
            give_feedback(mistakes);

            // Show next question or view results button
            $("#next-question-button").show();
            $("#submit-button").hide();


        }

    });

});

function display_audio_choices() {
    $("#audio-choices").empty();
    let sounds = question["sounds"];

    for (let i = 0; i < sounds.length; i++) {

        let audio_box = $("<div></div>");

        audio_box.text("Audio " + (i + 1));
        audio_box.addClass("mapping-box");
        audio_box.addClass("correct");
        audio_box.attr("id", i);
        audio_box.draggable({
            });

        // Add the audio to the audio box
        let baseURL = "/static/"
        let audio = $("<audio controls></audio>");
        audio.attr("src", baseURL + sounds[i]);
        audio.attr("type", "audio/mpeg");
        audio_box.append(audio);
        
    
        $("#audio-choices").append(audio_box);
        $("#audio-choices").append("<br>");
    }
}

function display_drop_zones() {
    $("bird-choices").empty();


    let bird_order = question["correctAnswer"];

    // Arrange drop boxes in correct order
    for (let i = 0; i < bird_order.length; i++) {
        let row = $("<div></div>");
        row.addClass("drop-row");


        let drop_zone = $("<div></div>");
        drop_zone.text("Place correct audio here");
        drop_zone.addClass("mapping-box");
        drop_zone.addClass("grey");
        drop_zone.attr("id", bird_order[i]);
        drop_zone.droppable({
            drop: function(event, ui) {
                // Lock the draggable in the droppable
                ui.draggable.position({
                  my: "center",
                  at: "center",
                  of: $(this),
                  using: function(pos) {
                    $(this).animate(pos, "fast", "linear");
                  }
                });
                // Keep track if the droppable has an item
                $(this).data('hasItems', true);
                $(this).data('droppedItem_id', ui.draggable.attr('id'));
              },

            out: function(event, ui) {
                $(this).data('hasItems', false);
                $(this).removeData('droppedItem_id');
            }
        });

        $(row).append(drop_zone);
        
        //Display bird image 
        let bird_container = $("<div></div>");
        bird_container.addClass("bird-container");

        let baseURL = "/static/"
        let bird_image = $("<img></img>");

        bird_image.attr("src", baseURL + question["images"][bird_order[i]]);


        $(bird_container).append(bird_image);

        let caption = $("<div></div>");
        caption.addClass("image-caption");

        caption.text(question["birds"][question["correctAnswer"][i]])
        //caption.text(question["correctOrder"][i]);

        $(bird_container).append(caption);



        $(row).append(bird_container);

        $("#bird-choices").append(row);
        $("#bird-choices").append("<br>");
    }
}


// Save user progress in backend
function save_user_data(user_data) {
    $.ajax({
        url: "/update_user_step",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(user_data),
        success: function(result) {
            console.log(result);
            console.log(user_data);
            $("#score-value").text(user_data["quizScore"]);
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(request);
            console.log(status);
        }
    });
}

function give_feedback(mistakes) {
    $("#feedback").empty();
    
    if (mistakes.length == 0){
        $("#feedback").html("<h3>Correct! Good job!<h3>");
        $("#feedback").addClass("correct-text");
    }

    else {

        let header = $("<h3>Incorrect</h3>").addClass("incorrect-text");
        $("#feedback").append(header);

        mistakes.forEach(function(mistake_group) {
            let droppedItem_id = mistake_group[0];
            let correct_id = mistake_group[1];

            let user_choice = question["birds"][droppedItem_id];
            let correct_choice = question["birds"][correct_id];

            let mistake_text = $("<p> <span class='grey-text'> You confused </span> " + user_choice + "<span class='grey-text'> with </span> " + correct_choice + "</p>");
            $("#feedback").append(mistake_text);

            // Highlight incorrect choices
            $(".ui-draggable#"+droppedItem_id).removeClass("correct");
            $(".ui-draggable#"+droppedItem_id).addClass("incorrect");
        
        });

    }
}


