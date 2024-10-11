function submitQuiz() {
    // Define the correct answers
    const correctAnswers = {
        q1: "A", // Paris
        q2: "A", // William Shakespeare
        q3: "B"  // Mars
    };

    // Get the form
    const form = document.getElementById('quizForm');

    // Track the user's score
    let score = 0;

    // Loop through the questions and check answers
    for (let question in correctAnswers) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Calculate the percentage
    const totalQuestions = Object.keys(correctAnswers).length;
    const percentage = (score / totalQuestions) * 100;

    // Display the result
    const result = document.getElementById('result');
    result.textContent = `You scored ${score} out of ${totalQuestions} (${percentage}%).`;

    // Optionally, you can also show correct answers
    result.innerHTML += '<br>Correct Answers:';
    for (let question in correctAnswers) {
        result.innerHTML += `<br>Question ${question.charAt(1)}: ${correctAnswers[question]}`;
    }
}