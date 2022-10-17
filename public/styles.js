var cursor = document.querySelector("div.cursor");

window.addEventListener('mousemove', function (event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})


document.addEventListener('mouseleave', function (event) {
    cursor.style.opacity = 0;
})

document.addEventListener('mouseenter', function (event) {
    cursor.style.opacity = 1;
})

document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.contentWindow.addEventListener('mousemove', function (event) {
        var x = event.clientX;
        var y = event.clientY;
        // take iframe's parent position into account
        var rect = iframe.getBoundingClientRect();
        cursor.style.left = `${x + rect.left}px`;
        cursor.style.top = `${y + rect.top}px`;        
    })
})