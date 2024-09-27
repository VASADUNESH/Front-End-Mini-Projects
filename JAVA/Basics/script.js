function checkAnswer(questionNumber, correctAnswer, explanation) {
    const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);

    // Ensure user has selected an option
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    const feedbackElement = document.getElementById(`feedback${questionNumber}`);

    if (selectedOption.value === correctAnswer) {
        feedbackElement.innerHTML = `Correct! ${explanation}`;
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        feedbackElement.innerHTML = `Incorrect! The correct answer is "${correctAnswer}". ${explanation}`;
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }
}
