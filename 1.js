const celc = +prompt('Введите температуру по Цельсию');
alert(`Цельсий: ${celc} это в  ${Math.round(convCelToFaren(celc))} Фаренгейтах`);

function convCelToFaren(num) {
    return ((9/5) * celc + 32);    
}

//Math.round для округления