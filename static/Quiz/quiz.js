// Start quiz when start button is clicked
$(document).ready(function() {

    if (current_question <= 1) {
        $("#continue-quiz").hide();
    }

    $("#start-quiz").click(function() {
        window.location.href = "/quiz/1";
    });

    // Option to continue quiz if user already started
    $("#continue-quiz").click(function() {
        window.location.href = "/quiz/" + current_question;
    });
});
