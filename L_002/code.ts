namespace L_002EventsExcersice {
    console.log("Start")
    window.addEventListener("load", handleLoad);
    
    function handleLoad(_event: Event): void {
       document.addEventListener('mousemove', setInfoBox);
       document.addEventListener('click', logInfo);
       document.body.addEventListener('click', logInfo);
       const divs = document.querySelectorAll("div");
       divs.forEach(div => {
        div.addEventListener('click', handleClick);
       });

       document.addEventListener("keyup", handleKeyUp);
        document.body.addEventListener("keyup", handleKeyUp);
        divs.forEach(div => {
            div.addEventListener("keyup", handleKeyUp);
        });
    }
    function logInfo(_event: Event): void {
        console.log("mouse")
    }
    function setInfoBox(event: MouseEvent): void {
        console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
    }
    function handleClick(event: MouseEvent): void {
        console.log(`Click event: Target=${event.target}`);
    }
    function handleKeyUp(event: KeyboardEvent): void {
        console.log(`Keyup event: Key=${event.key}`);
    }
}
    


