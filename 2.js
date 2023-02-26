const yourName = prompt('Введите свое имя');
greeting(yourName);

function greeting(name) {
    console.log(`Привет еще раз, ${name}!`);
    alert(`Привет, ${name}!, зайди в консоль,нажав кнопку F12 или через левую кнопку мыши и просмотреть код)`);
}