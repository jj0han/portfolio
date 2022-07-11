// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
    document.getElementsByClassName("view").style.minHeight = window.innerHeight + "px"
};

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:

    window.addEventListener("resize", setHeight);

// call the function once to set initial height:

    setHeight();
}