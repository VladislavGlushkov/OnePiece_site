const markers = document.querySelectorAll(".marker");
const info_box = document.getElementById("info_box");

markers.forEach(marker => {
    marker.addEventListener("click", (e) => {
        const name = marker.dataset.name;
        const description = marker.dataset.description;

        info_box.innerHTML = `<strong>${name}</strong><br>${description}`
        info_box.style.top = `${e.pageY - 60}px`
        info_box.style.left = `${e.pageX + 10}px`
        info_box.classList.remove("hidden")
    })
})

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("marker")) {
        info_box.classList.add("hidden")
    }
})