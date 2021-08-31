import { PolymerElement, html } from "@polymer/polymer";
import "./eployee-row-element.js";
class EmployeeElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .emp-c {
          margin: 5px;
          font-weight: bold;
          padding: 5px;
          color: white;
          width: 20%;
        }
        .emp-h {
          display: flex;
          width: 100%;
          text-align: center;
          background: blueviolet;
        }
      </style>

      <div class="emp-tab">
        <div class="emp-h">
          <div class="emp-c">First Name</div>
          <div class="emp-c">Last Name</div>
          <div class="emp-c">2 Wheeler</div>
          <div class="emp-c">4 Wheeler</div>
          <div class="emp-c"></div>
        </div>
        <template is="dom-repeat" items="{{employees}}">
          <employee-row employee="{{item}}"></employee-row>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      employees: {
        type: Array,
        notify: true,
      },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("employeeUpdated", (e) => {
      this.employees.map((emp) => {
        if (emp.empId == e.detail.empId) {
          emp = e.detail;
        }
      });
      this.employees = JSON.parse(JSON.stringify(this.employees));
    });
    window.addEventListener("employeeRemove", (e) => {
      const index = this.employees.indexOf(e.detail);
      if (index > -1) {
        this.employees.splice(index, 1);
      }
      this.employees = JSON.parse(JSON.stringify(this.employees));
    });
  }
}
customElements.define("employee-element", EmployeeElement);
