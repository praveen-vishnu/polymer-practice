import { html, PolymerElement } from "@polymer/polymer";

class EmployeeRowElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .emp-r {
          display: flex;
          width: 100%;
          text-align:center;
        }
        .emp-v{
          padding: 5px;
          width:25%; 
          margin: 5px; 
        }
        .remove{
            color: red;
            background-color: transparent;
            border: 1px solid red;
            border-radius: 5px;
            text-transform: uppercase;
            cursor: pointer;
        }
      </style>
      <div class="emp-r">
        <div class="emp-v">{{employee.firstName}}</div>
        <div class="emp-v">{{employee.lastName}}</div>
        <div class="emp-v">
          <input
            value="{{employee.empId}}-2"
            type="checkbox"
            on-click="toggleCheck"
            checked="{{employee.has2Wheeler}}"
          />
        </div>
        <div class="emp-v">
          <input
            value="{{employee.empId}}-4"
            type="checkbox"
            on-click="toggleCheck"
            checked="{{employee.has4Wheeler}}"
          />
        </div>
        <div class="emp-v"><button on-click="remove" class="remove">X</button></div>
      </div>
    `;
  }

  constructor() {
    super();
  }
  static get properties() {
    return {
      employee: {
        type: Object,
        notify: true,
      },
    };
  }

  remove(){
    var customEvent = new CustomEvent("employeeRemove", {
        detail: this.employee,
      });
      window.dispatchEvent(customEvent);
  }
  toggleCheck(e) {
    var checkboxId = e.target.value.split("-");
    if (this.employee.empId == checkboxId[0]) {
      if (checkboxId[1] == "2") {
        this.employee.has2Wheeler = !this.employee.has2Wheeler;
      } else {
        this.employee.has4Wheeler = !this.employee.has4Wheeler;
      }
    }
    this.employee = JSON.parse(JSON.stringify(this.employee));
    var customEvent = new CustomEvent("employeeUpdated", {
      detail: this.employee,
    });
    window.dispatchEvent(customEvent);
  }
}
customElements.define("employee-row", EmployeeRowElement);
