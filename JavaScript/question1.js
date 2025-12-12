let students = [
    {
        firstName: "Luka",
        lastName: "Doncic",
        scores: [88, 93, 91]
    },
    {
        firstName: "Austin",
        lastName: "Reeves",
        scores: [72, 85, 79]
    },
    {
        firstName: "Kobe",
        lastName: "Byrant",
        scores: [95, 90, 98]
    },
    {
        firstName: "Lebron",
        lastName: "James",
        scores: [60, 65, 70]
    },
    {
        firstName: "Rui",
        lastName: "Hachimura",
        scores: [82, 88, 84]
    },
    {
        firstName: "Marcus",
        lastName: "Smart",
        scores: [78, 80, 75]
    }
];

// Insert random scores for a new exam
students.forEach(student => {
    let randomScore = Math.floor(Math.random() * 41) + 60; // Score between 60 and 100
    student.scores.push(randomScore);
    console.log(`Student: ${student.firstName} ${student.lastName}, New Score Added: ${randomScore}`);
});

// Update scores
students.forEach(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.firstName} ${student.lastName}, New Score: ${average.toFixed(2)}`);
});

// Delete random score
students.forEach(student => {
    if (student.scores.length > 0) {
        let randomIndex = Math.floor(Math.random() * student.scores.length);
        student.scores.splice(randomIndex, 1);
        console.log(`Student: ${student.firstName} ${student.lastName}, Removed Score at Index: ${randomIndex}`);
    }

    // Map()
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.firstName} ${student.lastName}, Updated Scores: ${student.scores}, Average Score: ${average.toFixed(2)}`);
});

// Filter()
let highAchievers = students.filter(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    return average >= 85;
});
highAchievers.forEach(student => {
    let total = student.scores.reduce((acc, score) => acc + score, 0);
    let average = total / student.scores.length;
    console.log(`Student: ${student.firstName} ${student.lastName}, Average Score: ${average.toFixed(2)}`);
});
// Reduce()
let overallAverage = students.reduce((acc, student) => {
    let total = student.scores.reduce((scoreAcc, score) => scoreAcc + score, 0);
    return acc + (total / student.scores.length);
}, 0) / students.length;
console.log(`Overall Average Score of all Students: ${overallAverage.toFixed(2)}`);