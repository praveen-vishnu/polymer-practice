import { LitElement,html } from 'lit-element';
import './conditional-element.js'
import './repeat-element.js'
class FirstElement extends LitElement{
    static get properties(){
        return {
            items: {
                type : Array
            }
        }
    }
    constructor(){
        super();
        this.message = "vishnu";
        this.items = [
            {
                id:1,
                name: 'praveen'
            },
            {
                id:2,
                name: 'vishnu'
            },
            {
                id:3,
                name: 'samshipur'
            }
        ]
    }
   render(){
        return html`<repeat-element .items="${this.items}"></repeat-element>`;
    }
}
customElements.define('first-element', FirstElement);
