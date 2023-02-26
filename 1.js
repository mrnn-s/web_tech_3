const celc = +prompt('Введите температуру по Цельсию');
alert(`Цельсий: ${celc} это  примерно ${Math.round(convCelToFaren(celc))} в Фаренгейтах`);

function convCelToFaren(num) {
    return ((9/5) * num + 32);    
}

//Math.round для округления