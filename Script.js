// DOM Elements
const startScreen = document.getElementById("start-screen");
const levelScreen = document.getElementById("level-screen");
const quizScreen = document.getElementById("quiz-screen");
const levelCompleteScreen = document.getElementById("level-complete-screen");
const gameCompleteScreen = document.getElementById("game-complete-screen");
const startButton = document.getElementById("start-btn");
const backButton = document.getElementById("back-to-start");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const failCounterSpan = document.getElementById("fail-counter");
const currentLevelSpan = document.getElementById("current-level");
const progressBar = document.getElementById("progress");
const levelGrid = document.getElementById("level-grid");
const levelScoreSpan = document.getElementById("level-score");
const levelFailsSpan = document.getElementById("level-fails");
const levelMessage = document.getElementById("level-message");
const advanceLevelBtn = document.getElementById("advance-level-btn");
const nextLevelSpan = document.getElementById("next-level");
const tryAgainBtn = document.getElementById("try-again-btn");
const levelCompleteTitle = document.getElementById("level-complete-title");
const totalGameScoreSpan = document.getElementById("total-game-score");
const playAgainBtn = document.getElementById("play-again-btn");

// ==================== ALL 100 QUESTIONS (10 Levels × 10 Questions) ====================
const allQuestions = [
    // Level 1: General Knowledge
    [
        { question: "Who is the owner of Chomsoccafeeds?", answers: ["Njurumbe", "Mama Abi", "Smith", "Kingangi"], correct: 1 },
        { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 },
        { question: "Who painted the Mona Lisa?", answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"], correct: 0 },
        { question: "What is the largest mammal?", answers: ["Blue Whale", "Fin Whale", "Humpback Whale", "Sperm Whale"], correct: 0 },
        { question: "Who wrote 'To Kill a Mockingbird'?", answers: ["J.K. Rowling", "Harper Lee", "Jane Austen", "F. Scott Fitzgerald"], correct: 1 },
        { question: "What is the chemical symbol for gold?", answers: ["Go", "Gd", "Au", "Ag"], correct: 2 },
        { question: "Which country is known as the Land of the Rising Sun?", answers: ["China", "Japan", "Korea", "Thailand"], correct: 1 },
        { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correct: 2 },
        { question: "Which animal is known as the King of the Jungle?", answers: ["Elephant", "Lion", "Tiger", "Gorilla"], correct: 1 },
        { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 }
    ],
    // Level 2: Coding
    [
        { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { question: "Which language is used for styling web pages?", answers: ["HTML", "CSS", "JavaScript", "Python"], correct: 1 },
        { question: "What does CSS stand for?", answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correct: 0 },
        { question: "Which symbol is used for comments in JavaScript?", answers: ["//", "/*", "#", "<!--"], correct: 0 },
        { question: "What is the correct way to declare a variable in JavaScript?", answers: ["var myVar", "variable myVar", "v myVar", "let = myVar"], correct: 0 },
        { question: "Which company developed JavaScript?", answers: ["Microsoft", "Apple", "Netscape", "Google"], correct: 2 },
        { question: "What is the output of 2 + '2' in JavaScript?", answers: ["4", "22", "Error", "NaN"], correct: 1 },
        { question: "Which tag is used for largest heading in HTML?", answers: ["<h1>", "<h6>", "<head>", "<header>"], correct: 0 },
        { question: "What does API stand for?", answers: ["Application Programming Interface", "Application Program Integration", "Advanced Programming Interface", "Application Protocol Interface"], correct: 0 },
        { question: "Which is not a programming language?", answers: ["Python", "Java", "HTML", "C++"], correct: 2 }
    ],
    // Level 3: Cars
    [
        { question: "Which car company makes the Mustang?", answers: ["Chevrolet", "Ford", "Dodge", "Toyota"], correct: 1 },
        { question: "What does BMW stand for?", answers: ["Bavarian Motor Works", "British Motor Works", "Berlin Motor Works", "Benz Motor Works"], correct: 0 },
        { question: "Which country is Ferrari from?", answers: ["Germany", "Italy", "France", "UK"], correct: 1 },
        { question: "What is the fastest production car in the world?", answers: ["Bugatti Veyron", "Hennessey Venom GT", "SSC Tuatara", "Koenigsegg Jesko"], correct: 2 },
        { question: "Which car has a prancing horse logo?", answers: ["Lamborghini", "Ferrari", "Porsche", "Maserati"], correct: 1 },
        { question: "What year was the first car invented?", answers: ["1886", "1900", "1910", "1920"], correct: 0 },
        { question: "Which Japanese company makes the Skyline?", answers: ["Honda", "Toyota", "Nissan", "Mitsubishi"], correct: 2 },
        { question: "What does SUV stand for?", answers: ["Sports Utility Vehicle", "Super Utility Vehicle", "Standard Utility Vehicle", "Sport Utility Van"], correct: 0 },
        { question: "Which car company makes the Model S?", answers: ["Ford", "Tesla", "GM", "BMW"], correct: 1 },
        { question: "What is the most expensive car brand?", answers: ["Rolls-Royce", "Bugatti", "Lamborghini", "Ferrari"], correct: 1 }
    ],
    // Level 4: Science
    [
        { question: "What is the hardest natural substance?", answers: ["Iron", "Diamond", "Gold", "Platinum"], correct: 1 },
        { question: "What is the chemical symbol for water?", answers: ["O2", "H2O", "CO2", "NaCl"], correct: 1 },
        { question: "What planet is closest to the sun?", answers: ["Venus", "Mercury", "Mars", "Earth"], correct: 1 },
        { question: "What is the largest organ in the human body?", answers: ["Heart", "Brain", "Liver", "Skin"], correct: 3 },
        { question: "How many bones are in the adult human body?", answers: ["206", "208", "210", "212"], correct: 0 },
        { question: "What is the speed of light?", answers: ["299,792 km/s", "300,000 km/s", "299,792 m/s", "300,000 m/s"], correct: 0 },
        { question: "What is the atomic number of oxygen?", answers: ["6", "8", "10", "12"], correct: 1 },
        { question: "Which planet has the most moons?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 3 },
        { question: "What is the study of fungi called?", answers: ["Biology", "Mycology", "Botany", "Zoology"], correct: 1 },
        { question: "What is the smallest unit of matter?", answers: ["Atom", "Molecule", "Cell", "Electron"], correct: 0 }
    ],
    // Level 5: Movies
    [
        { question: "Which movie won the first Oscar?", answers: ["Wings", "The Jazz Singer", "Sunrise", "7th Heaven"], correct: 0 },
        { question: "Who directed 'Titanic'?", answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"], correct: 1 },
        { question: "What is the highest-grossing film of all time?", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], correct: 0 },
        { question: "Who played Iron Man?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1 },
        { question: "Which movie features the song 'My Heart Will Go On'?", answers: ["The Bodyguard", "Titanic", "Romeo + Juliet", "Moulin Rouge"], correct: 1 },
        { question: "What is the name of Simba's father in The Lion King?", answers: ["Scar", "Mufasa", "Rafiki", "Timon"], correct: 1 },
        { question: "Which year was the first Harry Potter movie released?", answers: ["1999", "2000", "2001", "2002"], correct: 2 },
        { question: "Who played Jack in Titanic?", answers: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"], correct: 1 },
        { question: "Which movie won Best Picture in 2020?", answers: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"], correct: 1 },
        { question: "What is the name of the superhero in 'Black Panther'?", answers: ["T'Challa", "Killmonger", "M'Baku", "Shuri"], correct: 0 }
    ],
    // Level 6: Music
    [
        { question: "Which band sang 'Bohemian Rhapsody'?", answers: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"], correct: 1 },
        { question: "Who is known as the King of Pop?", answers: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"], correct: 1 },
        { question: "What instrument does Yo-Yo Ma play?", answers: ["Violin", "Piano", "Cello", "Guitar"], correct: 2 },
        { question: "Which year was Mozart born?", answers: ["1756", "1760", "1770", "1750"], correct: 0 },
        { question: "Who won the first American Idol?", answers: ["Kelly Clarkson", "Ruben Studdard", "Fantasia Barrino", "Carrie Underwood"], correct: 0 },
        { question: "What is Beyoncé's last name?", answers: ["Knowles", "Carter", "Williams", "Jones"], correct: 1 },
        { question: "Which band sang 'Stairway to Heaven'?", answers: ["Led Zeppelin", "The Who", "Deep Purple", "Black Sabbath"], correct: 0 },
        { question: "Who is the best-selling artist of all time?", answers: ["Elvis Presley", "Michael Jackson", "The Beatles", "Madonna"], correct: 2 },
        { question: "What genre is Miles Davis known for?", answers: ["Rock", "Jazz", "Classical", "Pop"], correct: 1 },
        { question: "Which song has the most streams on Spotify?", answers: ["Blinding Lights", "Shape of You", "Dance Monkey", "Rockstar"], correct: 0 }
    ],
    // Level 7: Sports
    [
        { question: "How many players in a soccer team?", answers: ["9", "10", "11", "12"], correct: 2 },
        { question: "Who has won the most Grand Slams in tennis?", answers: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], correct: 2 },
        { question: "Which country won the first World Cup?", answers: ["Brazil", "Uruguay", "Argentina", "Italy"], correct: 1 },
        { question: "What is the diameter of a basketball hoop?", answers: ["16 inches", "18 inches", "20 inches", "22 inches"], correct: 1 },
        { question: "Who is the all-time leading scorer in NBA history?", answers: ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant"], correct: 0 },
        { question: "How many holes in a standard golf course?", answers: ["9", "12", "18", "24"], correct: 2 },
        { question: "Which boxer was known as 'The Greatest'?", answers: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"], correct: 1 },
        { question: "What is the length of an Olympic swimming pool?", answers: ["25 meters", "50 meters", "100 meters", "200 meters"], correct: 1 },
        { question: "Which sport uses a shuttlecock?", answers: ["Tennis", "Badminton", "Squash", "Racquetball"], correct: 1 },
        { question: "Who has won the most Ballon d'Or awards?", answers: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], correct: 1 }
    ],
    // Level 8: Geography
    [
        { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
        { question: "What is the longest river?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
        { question: "Which desert is the largest?", answers: ["Sahara", "Arabian", "Gobi", "Kalahari"], correct: 0 },
        { question: "What is the smallest country?", answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correct: 2 },
        { question: "Which mountain is the highest?", answers: ["K2", "Everest", "Kangchenjunga", "Lhotse"], correct: 1 },
        { question: "How many time zones does Russia have?", answers: ["9", "10", "11", "12"], correct: 2 },
        { question: "What is the capital of Japan?", answers: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], correct: 2 },
        { question: "Which African country has the largest population?", answers: ["Egypt", "Ethiopia", "Nigeria", "South Africa"], correct: 2 },
        { question: "What is the longest wall in the world?", answers: ["Hadrian's Wall", "Great Wall of China", "Berlin Wall", "Western Wall"], correct: 1 },
        { question: "Which country has the most islands?", answers: ["Sweden", "Norway", "Finland", "Canada"], correct: 0 }
    ],
    // Level 9: History
    [
        { question: "Who was the first US president?", answers: ["John Adams", "Thomas Jefferson", "George Washington", "Abraham Lincoln"], correct: 2 },
        { question: "What year did WW2 end?", answers: ["1944", "1945", "1946", "1947"], correct: 1 },
        { question: "Who discovered America?", answers: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"], correct: 0 },
        { question: "When did the Berlin Wall fall?", answers: ["1987", "1988", "1989", "1990"], correct: 2 },
        { question: "Who was the first man on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"], correct: 1 },
        { question: "Which empire built the Colosseum?", answers: ["Greek", "Roman", "Egyptian", "Persian"], correct: 1 },
        { question: "Who was known as the Maid of Orleans?", answers: ["Joan of Arc", "Cleopatra", "Queen Elizabeth I", "Marie Antoinette"], correct: 0 },
        { question: "What year did the Titanic sink?", answers: ["1911", "1912", "1913", "1914"], correct: 1 },
        { question: "Who wrote the Declaration of Independence?", answers: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], correct: 1 },
        { question: "Which ancient wonder still exists?", answers: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid", "Lighthouse of Alexandria"], correct: 2 }
    ],
    // Level 10: Mixed - Everything!
    [
        { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Core Processing Unit"], correct: 0 },
        { question: "Which element has the symbol 'Fe'?", answers: ["Iron", "Gold", "Silver", "Copper"], correct: 0 },
        { question: "Who invented the telephone?", answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], correct: 0 },
        { question: "What is the fastest land animal?", answers: ["Lion", "Cheetah", "Peregrine Falcon", "Horse"], correct: 1 },
        { question: "Which language is most spoken worldwide?", answers: ["English", "Spanish", "Mandarin", "Hindi"], correct: 2 },
        { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Onion", "Avocado", "Pepper"], correct: 2 },
        { question: "Who painted the Sistine Chapel ceiling?", answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 1 },
        { question: "What is the square root of 144?", answers: ["10", "11", "12", "13"], correct: 2 },
        { question: "Which planet has the Great Red Spot?", answers: ["Mars", "Jupiter", "Saturn", "Neptune"], correct: 1 },
        { question: "What year did the internet become public?", answers: ["1983", "1991", "1995", "2000"], correct: 1 }
    ]
];

// Game state
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let failCount = 0;
let maxFailsPerLevel = 3;
let answerDisabled = false;
let completedLevels = new Array(10).fill(false);
let levelScores = new Array(10).fill(0);
let levelFails = new Array(10).fill(0);
let totalScore = 0;

// Initialize
totalQuestionSpan.textContent = "10";

// Event listeners
startButton.addEventListener("click", showLevelScreen);
backButton.addEventListener("click", () => {
    levelScreen.classList.remove("active");
    startScreen.classList.add("active");
});
advanceLevelBtn.addEventListener("click", advanceToNextLevel);
tryAgainBtn.addEventListener("click", retryCurrentLevel);
playAgainBtn.addEventListener("click", resetGame);

function showLevelScreen() {
    startScreen.classList.remove("active");
    levelScreen.classList.add("active");
    renderLevelGrid();
}

function renderLevelGrid() {
    levelGrid.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const levelBtn = document.createElement("button");
        levelBtn.classList.add("level-btn");
        levelBtn.textContent = `Level ${i}`;
        
        if (completedLevels[i-1]) {
            levelBtn.classList.add("completed");
            levelBtn.textContent += ` ✓`;
        }
        
        // Check if level is locked (can only play current level or completed ones)
        if (i > currentLevel && !completedLevels[i-1]) {
            levelBtn.classList.add("locked");
            levelBtn.disabled = true;
        }
        
        levelBtn.addEventListener("click", () => selectLevel(i));
        levelGrid.appendChild(levelBtn);
    }
}

function selectLevel(level) {
    if (level > currentLevel && !completedLevels[level-1]) return;
    currentLevel = level;
    startQuiz();
}

function startQuiz() {
    // Reset level state
    currentQuestionIndex = 0;
    score = 0;
    failCount = 0;
    answerDisabled = false;
    
    // Update UI
    scoreSpan.textContent = score;
    failCounterSpan.textContent = `${failCount}/${maxFailsPerLevel}`;
    currentLevelSpan.textContent = currentLevel;
    
    // Show quiz screen
    levelScreen.classList.remove("active");
    quizScreen.classList.add("active");
    
    // Start first question
    showQuestion();
}

function showQuestion() {
    // Reset answer state
    answerDisabled = false;
    
    const levelQuestions = allQuestions[currentLevel - 1];
    const currentQuestion = levelQuestions[currentQuestionIndex];
    
    // Update UI
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (score / 10) * 100; // Progress based on correct answers only
    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;
    
    // Clear and create answer buttons
    answerContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.dataset.index = index;
        button.dataset.correct = index === currentQuestion.correct;
        button.addEventListener("click", selectAnswer);
        answerContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answerDisabled) return;
    
    answerDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    // Show correct/incorrect styling
    Array.from(answerContainer.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton && !isCorrect) {
            button.classList.add("incorrect");
        }
    });
    
    // Update score or fail count
    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    } else {
        failCount++;
        failCounterSpan.textContent = `${failCount}/${maxFailsPerLevel}`;
    }
    
    // Update progress bar based on correct answers
    const progressPercent = (score / 10) * 100;
    progressBar.style.width = progressPercent + "%";
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < 10) {
            showQuestion();
        } else {
            showLevelComplete();
        }
    }, 1000);
}

// ============= COMPLETED FUNCTIONS =============

function showLevelComplete() {
    quizScreen.classList.remove("active");
    
    // Save level results
    levelScores[currentLevel - 1] = score;
    levelFails[currentLevel - 1] = failCount;
    totalScore += score;
    
    // Update UI
    levelScoreSpan.textContent = score;
    levelFailsSpan.textContent = failCount;
    
    // Determine if level is passed (less than max fails)
    const isPassed = failCount < maxFailsPerLevel;
    
    if (isPassed) {
        completedLevels[currentLevel - 1] = true;
        levelCompleteTitle.textContent = "Level Complete! 🎉";
        levelCompleteTitle.style.color = "#48bb78";
        
        // Set message based on score
        if (score === 10) {
            levelMessage.textContent = "Perfect! You're amazing! 🌟";
        } else if (score >= 8) {
            levelMessage.textContent = "Great job! Almost perfect! 👍";
        } else if (score >= 6) {
            levelMessage.textContent = "Good effort! You passed! 💪";
        } else {
            levelMessage.textContent = "You passed! Keep practicing! 📚";
        }
        
        // Show advance button, hide try again
        advanceLevelBtn.style.display = "inline-block";
        tryAgainBtn.style.display = "none";
        
        // Update next level text
        if (currentLevel < 10) {
            nextLevelSpan.textContent = currentLevel + 1;
            advanceLevelBtn.innerHTML = 'Advance to Level <span id="next-level">' + (currentLevel + 1) + '</span>';
        } else {
            advanceLevelBtn.innerHTML = '🏆 Complete Game';
        }
    } else {
        levelCompleteTitle.textContent = "Level Failed 😢";
        levelCompleteTitle.style.color = "#f56565";
        levelMessage.textContent = "Practice makes perfect! You might make it next round!";
        
        // Hide advance button, show try again
        advanceLevelBtn.style.display = "none";
        tryAgainBtn.style.display = "inline-block";
    }
    
    levelCompleteScreen.classList.add("active");
}

function advanceToNextLevel() {
    if (currentLevel < 10) {
        currentLevel++;
        levelCompleteScreen.classList.remove("active");
        startQuiz();
    } else {
        // Game complete!
        totalGameScoreSpan.textContent = totalScore;
        levelCompleteScreen.classList.remove("active");
        gameCompleteScreen.classList.add("active");
    }
}

function retryCurrentLevel() {
    levelCompleteScreen.classList.remove("active");
    startQuiz();
}

function resetGame() {
    // Reset all game state
    currentLevel = 1;
    currentQuestionIndex = 0;
    score = 0;
    failCount = 0;
    totalScore = 0;
    completedLevels = new Array(10).fill(false);
    levelScores = new Array(10).fill(0);
    levelFails = new Array(10).fill(0);
    
    // Hide all screens and show start
    gameCompleteScreen.classList.remove("active");
    levelCompleteScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    levelScreen.classList.remove("active");
    startScreen.classList.add("active");
}
     