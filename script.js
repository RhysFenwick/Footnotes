
 class FtNoteElement extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.toggleContent);
        this.isToggled = false;
        this.boxText = this.getAttribute('box') || 'false'; // TODO: Could this be Boolean?
    }
  
    toggleContent(event) {
        if (this.isToggled) {
            this.innerHTML = this.indicator;
            this.isToggled = false;
        } else if (this.boxText === 'true') {
            this.isToggled = true;
            this.innerHTML = this.indicator + "<p class='ftp'>" + this.originalContent + "<p>";
        } else {
            this.isToggled = true;
            this.innerHTML = this.originalContent;
        }
        event.stopPropagation();
    }
  
    connectedCallback() {
        this.originalContent = this.innerHTML;
        this.indicator = this.getAttribute('indicator') || '*';
        this.textContent = this.indicator;
    }
}
  
customElements.define('ft-note', FtNoteElement);
