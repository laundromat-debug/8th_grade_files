let answers = [
    "It is certainly so",
    "YES!",
    "Without a doubt.",
    "No way jose",
    "Perhaps.",
    "Signs point to yes.",
    "Of course",
    "Most likely.",
    "Your future is looking good",
    "Sure",
    "Signs point to yes.",
    "Reply hazy, try again.",
];
 
function askQuestion() {
    const questionInput = document.getElementById("question");
    const question = questionInput.value.trim();
   
    if (question === "") {
        alert("Please enter a question!");
        return;
    }
   
 
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    const answerBox = document.getElementById("answer");
    answerBox.textContent = answer;
    questionInput.value = "";
    
}
 
function handleKeyPress(event) {
    if (event.key === "Enter") {
        askQuestion();
    }
}
 