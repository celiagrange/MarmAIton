document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const steps = document.querySelectorAll('.recipe__chat__content__text__guide, .recipe__chat__content__text__user');
    const startButton = document.getElementById('startButton');
    const backButton = document.getElementById('backButton')
    let visibleSteps = [];


    function showNextStep() {
        if (currentIndex < steps.length) {
            if (visibleSteps.length === 2) {
                const oldestStep = visibleSteps.shift();
                oldestStep.classList.add('hide');
            }

            steps[currentIndex].classList.remove('hide');
            visibleSteps.push(steps[currentIndex]);
            currentIndex++;

            if (currentIndex > 1) {
                startButton.textContent = "Étape suivante";
            }
        }
    }

    function showPreviousStep() {
        if (currentIndex > 0) {
            if (visibleSteps.length > 0) {
                const currentStep = visibleSteps.pop();
                currentStep.classList.add('hide');
            }

            currentIndex--;
            if(currentIndex > 0){
                const previousStep =steps[currentIndex - 1];
                previousStep.classList.remove('hide');
                visibleSteps.unshift(previousStep);
            }

            if (currentIndex > 1){
                const stepBeforePrevious = steps[currentIndex - 2];
                stepBeforePrevious.classList.remove('hide');
                visibleSteps.unshift(stepBeforePrevious);
            }

            if (currentIndex <= 1) {
                startButton.textContent = "Prêt !";
            }
        }
    }

    startButton.addEventListener('click', function() {
        showNextStep();
    });

    backButton.addEventListener('click', function() {
        showPreviousStep();
    });

    showNextStep();
});