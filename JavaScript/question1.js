let students = [
    { id: 1, name: "Alicia", scores: [88, 93, 91] },
    { id: 2, name: "Marco", scores: [72, 85, 79] },
    { id: 3, name: "Tina", scores: [95, 90, 98] }
];

// Inssert random scores for a new exam
students.forEach(student => {
    let randomScore = Math.floor(Math.random() * 101); // Score between 0 and 100
    student.scores.push(randomScore);
});

// Update scores
students.forEach(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.name}, New Average Score: ${average.toFixed(2)}`);
});

// Delete radnom score
students.forEach(student => {
    if (student.scores.length > 0) {
        let randomIndex = Math.floor(Math.random() * student.scores.length);
        student.scores.splice(randomIndex, 1);
    }

    // Map()
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.name}, Updated Average Score after deletion: ${average.toFixed(2)}`);
});

// Filter()
let highAchievers = students.filter(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    return average >= 85;
});

// Reduce()
let overallAverage = students.reduce((acc, student) => {
    let total = student.scores.reduce((scoreAcc, score) => scoreAcc + score, 0);
    return acc + (total / student.scores.length);
}, 0) / students.length;
console.log(`Overall Average Score of all Students: ${overallAverage.toFixed(2)}`);

console.log("High Achievers:");
highAchievers.forEach(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.name}, Average Score: ${average.toFixed(2)}`);
});