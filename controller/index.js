async function main() {
    const gameplay = document.querySelector("#gameplay");
    const description = document.querySelector("#description");
    const model = new Model();
    await model.setdata();
    const arrows = [document.querySelector("#left_arrow"), document.querySelector("#right_arrow")];

    for (let arrow of arrows) {
        arrow.addEventListener("click", () => {
            var indexChanged = model.setIndex(arrow);
            if(!indexChanged) return;
            var index = model.getIndex();
            var data = model.getData(index);
            description.textContent = data.description;
            gameplay.src = `./../../assets/videos/${data.gameplay_name}`;
            description.style.animationName = "none";
            requestAnimationFrame(() => {
                description.style.animationName = "";
            })
        });
    }
}

main();

