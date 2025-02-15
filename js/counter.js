document.addEventListener('DOMContentLoaded', function () {
    // Текущее значение счетчика из localStorage
    let cnt = localStorage.getItem('visitCount');
    // Устанавливаем счетчик в 0, если посещение впервые
    if (cnt === null) { cnt = 0; };
    // Увеличиваем счетчик на 1
    cnt++;
    // Обновляем значение счетчика в localStorage
    localStorage.setItem('visitCount', cnt);
    // Выводим значение счетчика на страницу
    document.getElementById('counter').innerText = cnt;
});
