// Start quiz when start button is clicked
$(document).ready(function() {
    display_choices();

    // Hide next question button until a choice is made
    $("#next-question-button").hide();

    if (question_number >= total_num_questions) {
        $("#next-question-button").text("View Results");
    }
    else {
        $("#next-question-button").text("Next Question");
    }

    // Go to next question or end of test
    $("#next-question-button").click(function() {

        if (question_number >= total_num_questions) {
            window.location.href = "/quiz_results";
        }

        else {
            window.location.href = "/quiz/" + (question_number + 1);
        }
    });

    //Render audio clip if one is provided
    if (question.hasOwnProperty("audioURL")) {
        let baseURL = "/static/"

        let audio = $("<audio controls></audio>");
        audio.attr("src", baseURL + question["audioURL"]);
        audio.attr("type", "audio/mpeg");
        $("#question-audio").append(audio);
    }

});

function display_choices() {
    $("#choices").empty();
    let choices = question["choices"];

    for (let i = 0; i < choices.length; i++) {

        let choice_button = $("<button></button>");
        choice_button.text(choices[i]);
        choice_button.addClass("choice-button");
        choice_button.attr("id", i);
        choice_button.click(handle_choice_click);

    
        $("#choices").append(choice_button);
        $("#choices").append("<br>");
    }
}

// Handle when a choice-button is clicked
function handle_choice_click() {
    let choice_id = $(this).attr("id");


    let correct_answer_id = question["correctAnswer"];
    let awarded_points = 0;

    // Correct answer
    if (choice_id == correct_answer_id) {
        $(this).addClass("correct");
        awarded_points = 1;
        
    } else {
        $(this).addClass("incorrect");
        let correct_choice = $("#" + correct_answer_id);
        correct_choice.addClass("correct");
    }

    // Disable all buttons after a choice is made
    $(".choice-button").prop("disabled", true);


    //Update User data
    let user_data = {        
        "step": 2,
        "currentQuizQuestion": question_number,
        "quizScore": parseInt($("#score-value").text()) + awarded_points
    };
    
    save_user_data(user_data);

    

    give_feedback($(this).text(), $("#" + correct_answer_id).text(), awarded_points);

    // Show next question button
    $("#next-question-button").show();
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
            $("#score-value").text(user_data["quizScore"]);
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(request);
            console.log(status);
        }
    });
}

function give_feedback(choice, correct_answer, is_correct) {
    if (is_correct == 1){
        $("#feedback").html("<h3>Correct! Good job!<h3>");
        $("#feedback").addClass("correct-text");
    }

    else {
        let header = $("<h3>Incorrect</h3>").addClass("incorrect-text");
        let user_choice = $("<p> <span class='grey-text'> You selected: </span> " + choice + "</p>");
        let correct_choice = $("<p> <span class='grey-text'> Correct answer: </span> " + correct_answer + "</p>");
        $("#feedback").append(header);
        $("#feedback").append(user_choice);
        $("#feedback").append(correct_choice);
    }
}


