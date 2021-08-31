import { html, PolymerElement } from "@polymer/polymer";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/iron-icons/iron-icons.js";
import "./office-element.js";
import "./employee-element.js";
class HomeElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .card {
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.5rem;
          margin: 10px;
        }
        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        h4 {
          text-align: center;
          margin: 10px 0;
        }
        .btn-add {
          float: right;
          margin-right: 5px;
          color: blueviolet;
          background-color: transparent;
          border: 2px solid blueviolet;
          border-radius: 5px;
          text-transform: uppercase;
          cursor: pointer;
        }
      </style>
      <div class="container">
        <div class="card">
          <div><h4>Office</h4></div>
          <office-element employees="{{employees}}"></office-element>
        </div>
        <div class="card">
          <div>
            <h4>
              Employee <button on-click="add" class="btn-add">Add</button>
            </h4>
          </div>
          <employee-element employees="{{employees}}"></employee-element>
        </div>
      </div>
    `;
  }

  async add() {
    const { value: formValues } = await Swal.fire({
      title: "Ennter Your Name",
      html:
        '<input id="swal-input1" placeholder="First Name" class="swal2-input">' +
        '<input id="swal-input2" placeholder="Last Name" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      const vehicleOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            2: "2 Wheeler",
            4: "4 wheeler",
          });
        }, 1000);
      });

      const { value: vehicle } = await Swal.fire({
        title: "Select Vehicle",
        input: "radio",
        inputOptions: vehicleOptions,
        inputValidator: (value) => {
          if (!value) {
            return "You need to choose something!";
          }
        },
      });

      if (vehicle) {
        var employee = {
          empId: "E" + (this.employees.length + 1),
          firstName: formValues[0],
          lastName: formValues[1],
          fullName: formValues[0] + " " + formValues[1],
          has2Wheeler: vehicle == 2 ? true : false,
          has4Wheeler: vehicle == 4 ? true : false,
        };
        this.employees.push(employee);
        this.employees = JSON.parse(JSON.stringify(this.employees));
      }
    }
  }
  static get properties() {
    return {
      employees: {
        type: Array,
        value: [
          {
            empId: "E1",
            firstName: "Romin",
            lastName: "Irani",
            fullName: "Romin Irani",
            has2Wheeler: false,
            has4Wheeler: true,
          },
          {
            empId: "E2",
            firstName: "Neil",
            lastName: "Irani",
            fullName: "Neil Irani",
            has2Wheeler: true,
            has4Wheeler: false,
          },
          {
            empId: "E3",
            firstName: "Tom",
            lastName: "Hanks",
            fullName: "Tom Hanks",
            has2Wheeler: false,
            has4Wheeler: true,
          },
        ],
        notify: true,
      },
    };
  }
  constructor() {
    super();
  }
}
customElements.define("my-home", HomeElement);
