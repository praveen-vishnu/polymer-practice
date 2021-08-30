import {PolymerElement, html} from '@polymer/polymer';
import "./office-element.js"
import "./employee-element.js"
import "./nav.js"
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
 
class MyApp extends PolymerElement {
    static get properties() {
        return {
            employees: {
                type: Array,
                value:  [
                            {
                                "empId":"E1",
                                "firstName": "Romin",
                                "lastName": "Irani",
                                "fullName": "Romin Irani",
                                "has2Wheeler": false,
                                "has4Wheeler": true
                            },
                            {
                                "empId":"E2",
                                "firstName": "Neil",
                                "lastName": "Irani",
                                "fullName": "Neil Irani",
                                "has2Wheeler": true,
                                "has4Wheeler": false
                            },
                            {
                                "empId":"E3",
                                "firstName": "Tom",
                                "lastName": "Hanks",
                                "fullName": "Tom Hanks",
                                "has2Wheeler": false,
                                "has4Wheeler": true
                            }
                        ],
                notify: true
            }
        }
    }

    static get template() {
        return html`
            <style>
                .card {
                    background-color: #fff;
                    border: 1px solid rgba(0,0,0,.125);
                    border-radius: .5rem;
                    margin: 10px;
                }
                .container {
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
                h4{
                    text-align: center;
                    margin: 10px 0;
                }
            </style>
            <nav-element></nav-element>
            <div class="container">
                <div class="card">
                    <div><h4>Office</h4></div>
                    <office-element employees="{{employees}}"></office-element>
                </div>
                <div class="card">
                    <div><h4>Employee</h4></div>
                    <employee-element employees="{{employees}}"></employee-element>
                </div>
            </div>
        `;
    }
    constructor() {
        super();
    }
}
 
customElements.define('my-app', MyApp);