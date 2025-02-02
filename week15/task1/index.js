const cities = ["Москва", "Санкт-Петербург", "Берлин", "Париж", "Токио" ];
let temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temp = prompt(`Введите температуру в городе ${cities[i]}`, "0");
    temperatures.push(Number(temp));
}


const tempList = document.getElementById('tempList')

for (let i = 0; i < cities.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    tempList.appendChild(li);
}

let maxTemp = Math.max(...temperatures);
let minTemp = Math.min(...temperatures);

document.getElementById("max-temp").textContent = `Максимальная температура: ${maxTemp}°C`;
        document.getElementById("min-temp").textContent = `Минимальная температура: ${minTemp}°C`;