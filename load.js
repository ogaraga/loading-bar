let loading = document.querySelector(".loading"),
    percent = document.querySelector(".percent"),
    bar = document.querySelector(".bar"),
    loadMe = document.querySelector("#load");

let c = 0;
let x;
function update() {
    loading.textContent = "loading---";
    percent.textContent = c + "%";
    bar.style.width = c + "%";

    c++;
    if (c < 101) {
        x = setTimeout(update, 30);
    }
    else if (c = 100) {
        clearTimeout(x);
        loading.textContent = `loaded`;
        update();
    }
    else {
        return update();
    }

}
