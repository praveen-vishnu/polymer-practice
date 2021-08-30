import {PolymerElement, html} from '@polymer/polymer';
 
class EmployeeElement extends PolymerElement {
  static get template() {
        return html`
            <style>
                .emp-c {
                    margin: 5px;
                    font-weight: bold;
                    padding: 5px;
                    color: white;
                    width:25%;
                }
                .emp-h{
                    display: flex;
                    width: 100%;
                    background: blueviolet;
                }
                .emp-v{
                    padding: 5px;
                    width:25%;
                    margin: 5px;
                }
                .emp-r{
                    display: flex;
                    width: 100%;
                }
            </style>
                           
            <div class="emp-tab">
                <div class="emp-h">
                    <div class="emp-c">
                        First Name
                    </div>
                    <div class="emp-c">
                        Last Name
                    </div>
                    <div class="emp-c">
                        2 Wheeler
                    </div>
                    <div class="emp-c">
                        4 Wheeler
                    </div>
                </div>
                <template is="dom-repeat" items="{{employees}}">
                    <div class="emp-r">
                        <div class="emp-v">{{item.firstName}}</div>
                        <div class="emp-v">{{item.lastName}}</div>
                        <div class="emp-v"><input value="{{item.empId}}-2" type="checkbox" on-click="toggleCheck" checked={{item.has2Wheeler}}></div>
                        <div class="emp-v"><input value="{{item.empId}}-4" type="checkbox" on-click="toggleCheck" checked={{item.has4Wheeler}}></div>
                    </div>
                </template>
            </div>
        `;
    }
    
    static get properties() {
        return {
            employees: {
                type: Array,
                notify: true
            }
        }
    }
 
    constructor() {
        super();
    }
    
    toggleCheck(e){
          var checkboxId = e.target.value.split("-");
        this.employees.map(emp =>{
            if(emp.empId == checkboxId[0]){
                if(checkboxId[1] == "2"){
                    emp.has2Wheeler = !emp.has2Wheeler;
                }
                else{
                    emp.has4Wheeler = !emp.has4Wheeler;
                }
            }
        })
        this.employees = JSON.parse(JSON.stringify(this.employees));
    }
}
customElements.define('employee-element', EmployeeElement);