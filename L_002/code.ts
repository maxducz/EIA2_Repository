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
   
    function setInfoBox(_event: MouseEvent): void {
       // console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
        let span: HTMLElement = <HTMLElement>document.querySelector("span");
         let box: string = ""
        span.innerText = box
        span.style.top = _event.clientY + "px";
        span.style.left = _event.clientX + "px";
    }
    function handleClick(event: MouseEvent): void {
        console.log(`Click event: Target=${event.target}`);
    }
    function handleKeyUp(event: KeyboardEvent): void {
        console.log(`Keyup event: Key=${event.key}`);
    }
    function logInfo(_event: Event): void {
        console.log(_event.type)
        console.log(_event.target)
        console.log(_event.currentTarget)
        console.log(_event);
    }
    function customEvent(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let newEvent: CustomEvent = new CustomEvent("buttonClicked", { bubbles: true });

        button.dispatchEvent(newEvent);
    }

    function logCustomEvent(_event: Event): void {
        console.log("Button Geklickt");
    }
}


    


