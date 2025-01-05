document.getElementById('calculate').onclick = function() {
    const input = document.getElementById('birthday').value;
    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    if (!input) {
        errorMessage.style.display = 'block';
        result.textContent = '';
        return;
    } 
    
    else {
        errorMessage.style.display = 'none';
    }

    const today = new Date();
    const birthDay = new Date(today.getFullYear(), new Date(input).getMonth(), new Date(input).getDate());

    if (birthDay < today) {
        birthDay.setFullYear(today.getFullYear() + 1);
    }

    const dateDiff = birthDay - today; 
    const daysDiff = Math.floor(dateDiff / (1000 * 3600 * 24)); 

    let dayWord = "дней";
    if (daysDiff % 10 === 1 && daysDiff % 100 !== 11) {
        dayWord = "день";
    } 
    
    else if (daysDiff % 10 >= 2 && daysDiff % 10 <= 4 && (daysDiff % 100 < 12 || daysDiff % 100 > 14)) {
        dayWord = "дня";
    }

    result.textContent = `До вашего дня рождения осталось ${daysDiff} ${dayWord}.`;
};

document.getElementById('birthday').oninput = function() {
    const errorMessage = document.getElementById('error-message');
    if (this.value) {
        errorMessage.style.display = 'none';
    }
}