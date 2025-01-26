let grades = [];
let randomGrade = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
console.log('Оценки студентов:', randomGrade);


let averageGrade = randomGrade.reduce((sum, grade) => sum + grade, 0) / randomGrade.length
console.log('Средний бал:', averageGrade)


let maxGrade = Math.max(...randomGrade);
console.log('Наивысший бал:', maxGrade );


let minGrade = Math.min(...randomGrade);
console.log('Наименьший бал:', minGrade );


let positiveGrade = randomGrade.filter(grade => grade >= 60);
let positiveGradeCount = positiveGrade.length;
console.log('Количество студентов с положительной оценкой (60 и выше):',positiveGradeCount);


let negativeGrade = randomGrade.filter(grade => grade < 60);
let negativeGradeCount = negativeGrade.length;
console.log('Количество студентов с отрицательной оценкой (ниже 60):',positiveGradeCount);


let letterGrade = randomGrade.map((grade) => {
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 60 && grade < 79) {
        return 'B';
    } else if (grade >= 40 && grade < 59) {
        return 'C';
    } else if (grade >= 20 && grade < 39) {
        return 'D';
    } else {
        return 'E';
    }
});

console.log('Буквенные оценки студентов:', letterGrade);






