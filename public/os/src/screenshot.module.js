import html2canvas from "./screenshot.dep.js";


export async function screenshot() {
    // use html2canvas to take a screenshot of the iframe.app element and export hex data link
    const canvas = await html2canvas(document.querySelector("iframe.app"), {
        scale: 1,
        useCORS: true,
        logging: true,
        allowTaint: true,
        backgroundColor: "#000000",
        imageTimeout: 0,
        removeContainer: true,
        foreignObjectRendering: true,
        ignoreElements: (element) => {
            return element.classList.contains("no-screenshot");
        },
    });
    // add canvas.mirror
    let preview = document.querySelector("canvas.mirror");
    if (preview) {
        // delete preview
        preview.remove();

    }

    // const mirror = document.createElement("canvas");
    // mirror.classList.add("mirror");
    // mirror.width = canvas.width;
    // mirror.height = canvas.height;
    // mirror.getContext("2d").drawImage(canvas, 0, 0);
    // document.body.appendChild(mirror);

    return canvas.toDataURL("image/png");
}