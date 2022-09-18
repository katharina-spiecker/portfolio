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
        spans[index].style = "display:inline-block";
        index++;
        if (index === spans.length) {
            clearInterval(timer);
        }
    }
})();

// technology section moving effect
(function(){
    let transformStyles = ["translateX(15px)", "translateX(-15px)", "translateY(15px)", "translateY(-15px)"];
    let boxes = document.querySelectorAll(".box");
    document.querySelector(".technologies-grid").addEventListener('mousemove', () => {
        // select a random box
        let rand = Math.floor(Math.random() * boxes.length);
        let randStyle = transformStyles[Math.floor(Math.random() * transformStyles.length)];
        boxes[rand].style = "transform:" + randStyle;
    })
})();

// when scrolling over sections, background changes
(function(){
    const sections = document.querySelectorAll(".section");
    const sectionHeight = sections[0].offsetHeight;

    document.addEventListener("scroll", () => {
        if (window.scrollY < sectionHeight) {
            let newColor = sections[0].dataset.color;
            changeColor(newColor);
        } else if (window.scrollY < sectionHeight * 2) {
            let newColor = sections[1].dataset.color;
            changeColor(newColor);
        } else if (window.scrollY < sectionHeight * 3) {
            let newColor = sections[2].dataset.color;
            changeColor(newColor);
        } else if (window.scrollY < sectionHeight * 4) {
            let newColor = sections[3].dataset.color;
            changeColor(newColor);
        }
    });

    function changeColor(hexCode) {
        document.body.style = "background-color:" + hexCode;
    }
})();