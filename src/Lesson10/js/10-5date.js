// const currentDate = new Date();

// console.log(currentDate.getDay());
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());

// currentDate.setFullYear(2055);
// console.log(currentDate);

const date1 = Date.now();

setTimeout(() => {
    const date2 = Date.now();
    console.log("date1", date1);
    console.log("date2", date2);

    console.log(date2 - date1);
}, 2000)