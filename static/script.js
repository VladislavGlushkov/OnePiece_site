const items = ["🍗 Meat", "🧭 Log pose"];

const inventory_key = "pirateInventory"
function get_inventory() {
    const storage = localStorage.getItem(inventory_key)
    return storage ? JSON.parse(storage) : []
}

function save_inventory(inventory) {
    localStorage.setItem(inventory_key, JSON.stringify(inventory));
}

function add_item(item) {
    const inventory = get_inventory();
    if (!inventory.includes(item)) {
        show_text(item)
        inventory.push(item)
        save_inventory(inventory)
        render_inventory()
    }
}

function render_inventory() {
    const ul = document.getElementById("inventory")
    ul.innerHTML = ""
    const inventory = get_inventory();
    inventory.forEach((item) => {
        const li = document.createElement("li");
        li.textContent=item;
        ul.appendChild(li);
    });
}

function show_text(item){
    const text=document.getElementById("text");
    text.textContent=item;
    text.classList.add("show")

    setTimeout(() =>{
        text.classList.remove("show");
    },3000)
}

render_inventory();