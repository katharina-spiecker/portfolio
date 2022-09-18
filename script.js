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