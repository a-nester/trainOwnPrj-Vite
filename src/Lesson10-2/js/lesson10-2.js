/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */


// const startBtn = document.querySelector(".start-btn");
// const container = document.querySelector(".container");
// const result = document.querySelector(".result");

// startBtn.addEventListener("click", handleClick);

// function handleClick() {
//     startBtn.disabled = true;
//     result.textContent = "";

//     const promises = [...container.children].map(() => {
//         return new Promise((resolve, reject) => {
//             const random = Math.random();

//             if(random > 0.5) {
//                 resolve("🤑");
//             } else {
//                 reject("👿")
//             }
//         })
//     })


const selectors = {
    startBtn: document.querySelector(".start-btn"),
    container: document.querySelector(".container")
};

selectors.startBtn.addEventListener('click', handlerStart)

function handlerStart() {
    const promises = [...selectors.container.children].map((_) =>
        createPromise());
    
    Promise.allSettled(promises)
        .then(items => {
        items.forEach((item, index) => {
            selectors.container.children[index].textContent = '';
            setTimeout(() => {
                selectors.container.children[index].textContent = item.value ?? item.reason;
                if (index === items.length - 1) {
                    console.log(isWinner);
                    const instance = basicLightbox
                        .create(`<h1>${isWinner ? 'Winner!' : 'Loser!'}</h1>`, {
                            color: 'white',
                            className: 'modal',
                        });
                    instance.show();
                }
            }, 1000 * (index + 1))
        });
        const isWinner =
            items.every(item => item.status === "fulfilled") ||
            items.every(item => item.status === "rejected");
    });
}

function createPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve('🤑');
        } else {
            reject('👿');
        }
    })
}
