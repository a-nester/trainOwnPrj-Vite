document.addEventListener("keydown", handlePress)

// function handlePress(event) {
//     if(event.code === 'Escape'){
//         console.log("Press Escape");    
//     } else {
//         console.log("Hello!");
//     }
// }

function handlePress(event) {
    if(event.ctrlKey && event.code === "KeyC") {
        event.preventDefault(); //відлючили дефолтну поведінку. Ctrl+C не працює
        console.log("Ok");
    }
}