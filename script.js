// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    let currentQuestion = 0;

    function showNextQuestion() {
        questions[currentQuestion].classList.remove('active');
        currentQuestion++;
        if(currentQuestion < questions.length) {
            questions[currentQuestion].classList.add('active');
        }
    }

    document.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', showNextQuestion);
    });

    document.querySelectorAll('.proposal-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert("🎉 Yay! My heart is bursting with joy! Let's create our forever story together! ❤️");
        });
    });
});