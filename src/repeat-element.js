import { html, LitElement } from "lit-element";
import {repeat} from "lit-html/directives/repeat.js";
class RepeateElement extends LitElement{
    static get properties(){
        return {
            items: {
                type : Array
            }
        }
    }
    render(){
        // const repeatTemplate = [];   
        // for ( const i of this.items) {
        //         repeatTemplate.push(html`<li id="${i.id}">${i.name}</li>`);
        // }
        return html`<ul>${repeat(this.items, (i,index)=>html`<li id="${i.id}">${index}  ${i.name}</li>`)}</ul>`;
    }
    getId(i){
        console.log(i)
    }
    constructor(){
        super();
       
    }
}
customElements.define('repeat-element',RepeateElement);