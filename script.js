// typewriter effect
(function(){
    const targetText = document.querySelector(".typewriter");
    const splitTargetText = targetText.innerText.split("");
    let newTargetText = "";
    splitTargetText.forEach((character) => {
        newTargetText += "<span>" + character + "</span>";
    });
    
    targetText.innerHTML = newTargetText;
    let index = 0;
    const spans = targetText.querySelectorAll("span");
    const timer = setInterval(onTick, 250);
    
    function onTick() {
        spans[index].classList.add("visible");
        index++;
        if (index === spans.length) {
            clearInterval(timer);
        }
    }
})();


// when scrolling over sections, background changes
(function(){
    const sections = document.querySelectorAll(".section");
    let transitionHeight = sections[0].offsetHeight;
    let transformStyles = ["translateX(15px)", "translateX(-15px)", "translateY(15px)", "translateY(-15px)"];
    let boxes = document.querySelectorAll(".box");

    // technology section moving effect on scroll and mousemove
    document.querySelector(".technologies-grid").addEventListener('mousemove', () => {
        // select a random box
        let rand = Math.floor(Math.random() * boxes.length);
        let randStyle = transformStyles[Math.floor(Math.random() * transformStyles.length)];
        boxes[rand].style = "transform:" + randStyle;
    })

    document.addEventListener("scroll", () => {
        // 4 sections: intro, about, tech stack, projects
        // some sections need different transition height than others
        // intro
        if (window.scrollY < transitionHeight - 300) {
            let newColor = sections[0].dataset.color;
            changeColor(newColor);
        // about
        } else if (window.scrollY < (transitionHeight - 200) * 2) {
            let newColor = sections[1].dataset.color;
            changeColor(newColor);
        // tech stack
        } else if (window.scrollY < (transitionHeight - 100) * 3) {
            let newColor = sections[2].dataset.color;
            changeColor(newColor);
            let rand = Math.floor(Math.random() * boxes.length);
            let randStyle = transformStyles[Math.floor(Math.random() * transformStyles.length)];
            boxes[rand].style = "transform:" + randStyle;
        } else if (window.scrollY < (transitionHeight - 200) * 4) {
            let newColor = sections[3].dataset.color;
            changeColor(newColor);
        }
    });

    function changeColor(hexCode) {
        document.body.style = "background-color:" + hexCode;
    }
})();