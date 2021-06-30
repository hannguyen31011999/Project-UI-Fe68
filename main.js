document.querySelector("#showMore").addEventListener("click", function() {
    showMore();
    this.classList.add("d-none");
})

document.querySelector("#showLess").addEventListener("click", function() {
    showLess();
    this.classList.add("d-none");
})

function showMore(){
    document.querySelector("#showLess").classList.remove("d-none")
    let listNone = document.querySelectorAll(".moreBox.d-none");
    for (const item of listNone) {
        item.classList.remove("d-none");
    }
}
function showLess(){
    document.querySelector("#showMore").classList.remove("d-none")
    let listNone = document.querySelectorAll(".moreBox");
    for (let item of listNone) {
        item.classList.add("d-none");
    }
}
