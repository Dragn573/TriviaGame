var correct = 0;
        var incorrect = 0;
        $(".start").on("click", function(){

        function evaluateClick(browser) {
            var x = document.getElementById("result").value = browser;
            if (x == "right") {
                console.log("right");
                correct++;
                totals();
            } else {
                console.log("wrong");
                incorrect++;
                totals();
            }
        }
    function totals() {
        document.getElementById("correct").innerHTML = "Number Correct: " + correct;
        document.getElementById("incorrect").innerHTML = "Number Wrong: " + incorrect;
    }