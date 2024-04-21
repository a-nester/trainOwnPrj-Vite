const form = document.querySelector(".feedback-form")

const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

form.addEventListener("submit", start);

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if (count > 100) {
            reject(new Error("Too much push ups!"));
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    }); 
};

function squatting(count) {
    return new Promise((resolve, reject) => {
        if (count > 1000) {
            reject (new Error("Too much squatting!"))
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

function start(event) {
    event.preventDefault();
    const pushUps = event.target[0].value;
    const squads = event.target[1].value;
    if (pushUps <= 0 || squads <= 0) {
        return console.log("Wrong numbers!");
    }
    console.log("Start training");
    wringOut(pushUps)
        .then(() => {
            console.log(`I pushed up ${pushUps} times`);
            return squatting(squads);
        }).then(() => {
            console.log(`I squatted ${squads} times`);
        }).catch((err) => {
            console.log(err.toString());
        });
}

// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success!");
//         } else {
//             reject("Error!");
//         }
//     }, 2000)
// });

// console.log(promise);
// promise.then((value) => {
//     console.log(value)
// }
// );