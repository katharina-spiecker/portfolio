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
        // 5 sections: intro, about, tech stack, projects 1, projects 2
        // some sections need different transition height than others
        // intro
        console.log(sections[0].getBoundingClientRect().bottom)

        if (sections[0].getBoundingClientRect().bottom > 200) {
            let newColor = sections[0].dataset.color;
            changeColor(newColor);
        // about
        } else if (sections[1].getBoundingClientRect().bottom > 100) {
            let newColor = sections[1].dataset.color;
            changeColor(newColor);
        // tech stack
        } else if (sections[2].getBoundingClientRect().bottom > 100) {
            let newColor = sections[2].dataset.color;
            changeColor(newColor);
            let rand = Math.floor(Math.random() * boxes.length);
            let randStyle = transformStyles[Math.floor(Math.random() * transformStyles.length)];
            boxes[rand].style = "transform:" + randStyle;
        // project 1
        } else if (sections[3].getBoundingClientRect().bottom > 200) {
            let newColor = sections[3].dataset.color;
            changeColor(newColor);
        // project 2
        } else if (sections[4].getBoundingClientRect().bottom > 100) {
            let newColor = sections[4].dataset.color;
            changeColor(newColor);
        // project 3
        } else if (sections[5].getBoundingClientRect().bottom > 0) {
            let newColor = sections[5].dataset.color;
            changeColor(newColor);
        }
    });

    function changeColor(hexCode) {
        document.body.style = "background-color:" + hexCode;
    }
})();

// title move downwards animation
(function(){
    let targets = document.querySelectorAll(".animation-section-fade-in");
    let animationCompleted = [];
    targets.forEach(() => {
        animationCompleted.push(false)
    })
    // Check on page load (in case the section is already in the viewport)
    addAnimationWhenVisible();
    // Check on scroll in case element is lower in DOM
    window.addEventListener("scroll", addAnimationWhenVisible);

    function addAnimationWhenVisible() {
        targets.forEach((target, i) => {
            if (isElementInViewport(target)) {
                target.classList.add("downwards-fade-in");
                target.classList.remove("animation-hidden");
                // Remove the scroll event listener to prevent unnecessary checks
                // mark as completed
                animationCompleted[i] = true;
                // if all completed: remove event listener
                if(!animationCompleted.includes(false)) {
                    window.removeEventListener("scroll", addAnimationWhenVisible);
                } 
            }
        })
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
})();