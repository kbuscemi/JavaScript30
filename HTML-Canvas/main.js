const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName) //there are multiple transitionend that will be fired so what to find the one we are looking for by console logging
    //by clicking on a panel it will start a transition and when the transition finishes, console.log will tell us what transitioned.
    // flex-size and flex-grow transition but we only care about flex-grow
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// take each panel and loop over it. listen for a click on each panel and when we hear a click we want to find
// toggleOpen function and run it. won't say toggleOpen() because that would run on page load
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));