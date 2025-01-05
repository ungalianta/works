document.getElementById('calculate').onclick = function(){
    const inputBirthday = document.getElementById('birthday').value;
    const error = document.getElementById('error-message');
    const result = document.getElementById('result');

if (!inputBirthday) {
    error.style.display = 'block';
    result.textContent = '';
    return
}
else{
    error.style.display = 'none'
}

const today = new Date();
const birthday = new Date(today.getFullYear(), new Date(inputBirthday).getMonth(), new Date(inputBirthday).getDate());

if (birthday < today) {
birthday = today.getFullYear() +1;
}

const timeDiff = birthday - today;
const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

let dayWord = "дней";
if (daysDiff % 10 === 1 && daysDiff % 100 !== 11) {
    dayWord = "день";
} else if (daysDiff % 10 >= 2 && daysDiff % 10 <= 4 && (daysDiff % 100 < 12 || daysDiff % 100 > 14)) {
    dayWord = "дня";
}

result.textContent = `До вашего дня рождения осталось ${daysDiff} ${dayWord}.`;
};

    document.getElementById('birthday').oninput = function() {
    const errorMessage = document.getElementById('error-message');
    
    if (this.value) {
    errorMessage.style.display = 'none';
    }
};





