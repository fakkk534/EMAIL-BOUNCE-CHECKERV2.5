/*
   $ TEAM    : https://instagram.com/darkxcode_
   $ AUTHOR  : https://t.me/zlaxtert
   $ CODE    : https://t.me/zexkings
   $ DESIGN  : https://t.me/danielsmt
   $ SITE    : https://www.darkxcode.pw/
   $ VERSION : 4.0
*/

(() => {
    "use strict";

    const $ = (sel, root = document) => root.querySelector(sel);

    $("#year").textContent = new Date().getFullYear();

    // Line counters on the textareas
    document.querySelectorAll("[data-count]").forEach((area) => {
        const out = $(area.dataset.count);
        const noun = area.dataset.countNoun || "items";
        const render = () => {
            const n = area.value.split("\n").filter((line) => line.trim()).length;
            out.textContent = `${n} ${noun}`;
            out.classList.toggle("is-set", n > 0);
        };
        area.addEventListener("input", render);
        render();
    });

    // Uploading a list fills the textarea
    $("#fileUpload").addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const area = $("#emailList");
            area.value = e.target.result;
            area.dispatchEvent(new Event("input"));
        };
        reader.readAsText(file);
    });

    // Start checking always routes to the web platform
    const modal = $("#webModal");
    $("#checkerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        modal.showModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-close]")) modal.close();
        // click on the backdrop closes too
        if (event.target === modal) modal.close();
    });
})();