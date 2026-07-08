const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
    });
});
