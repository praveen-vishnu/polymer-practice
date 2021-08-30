import {PolymerElement, html} from '@polymer/polymer';
class OfficeElement extends PolymerElement{
    static get properties() {
        return {
            employees: {
                type: Array,
                observer: '_employeeChanged'
            },
            total2Wheeler:{
                type: Number
            },
            total4Wheeler:{
                type: Number
            }
        }
    }
 
    _employeeChanged(newVal, oldVal) {
        this.total2Wheeler = this.employees.filter(e=> e.has2Wheeler).length;
        this.total4Wheeler = this.employees.filter(e=> e.has4Wheeler).length;
    }
    static get template() {
        return html`
            <style>
            .emp-c {
                margin: 5px;
                font-weight: bold;
                padding: 5px;
                color: white;
                width: 100%;
            }
            .emp-h{
                display: flex;
                width: 100%;
                background: blueviolet;
            }
            .emp-v{
                padding: 5px;
                width: 100%;
                margin: 5px;
            }
            .emp-r{
                display: flex;
                width: 100%;
            }
            .emp-tab{
                text-align: center;
            }
            </style>
            <div class="emp-tab">
                <div class="emp-h">
                    <div class="emp-c">
                       Total Employees
                    </div>
                    <div class="emp-c">
                       Total 2 Wheelers
                    </div>
                    <div class="emp-c">
                       Total 4 Wheelers
                    </div>
                </div>
                <div class="emp-r">
                     <div class="emp-v">{{employees.length}}</div>
                     <div class="emp-v">{{total2Wheeler}}</div>
                     <div class="emp-v">{{total4Wheeler}}</div>
                </div>
            </div>
        `;
    }
    constructor(){
        super();
    }
}
customElements.define('office-element' , OfficeElement);