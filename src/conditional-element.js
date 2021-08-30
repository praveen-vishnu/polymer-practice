import { html, LitElement } from "lit-element";

class ConditionalELement extends LitElement{

    static get properties(){
        return{
            isLoggedIn:{
                type:Boolean
            }
        }
    }
    constructor(){
        super();
        //this.isLoggedIn = true;
    }
    render(){
        return html`${this.getUserMsg()}`;
    }
    getUserMsg(){
        if(this.isLoggedIn){
            return html`<h1>Welcome User</h1>`;
        }
        else{
           return html`<h1>Please Login </h1>`;
        }
    }
}
customElements.define('conditional-element',ConditionalELement);