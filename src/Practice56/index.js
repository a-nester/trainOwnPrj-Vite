const burgerBtn = document.querySelector(".burger");
const list = document.querySelector(".list");

burgerBtn.addEventListener("click", handleClick);

function handleClick(event) {
    // console.dir(list);
    const instance = basicLightbox.create(`
    <div class="modal" width="800" height="600">
    ${list.outerHTML}
    </div>`);
    
    
    // modal.append(list);
    instance.show();
}


// 