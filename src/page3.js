
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Page3 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>View Three</h1>
        </div>
    `;
  }
}

window.customElements.define('my-page3', Page3);
