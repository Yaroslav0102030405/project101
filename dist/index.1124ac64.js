const o={containerEl:document.querySelector(".js-modal"),backdrop:document.querySelector(".js-backdrop")};o.containerEl.addEventListener("click",function(e){e.target.classList.contains("btn")&&(console.log(e.target),document.body.classList.remove("show-modal"),o.backdrop.classList.add("is-hidden"))});
//# sourceMappingURL=index.1124ac64.js.map
