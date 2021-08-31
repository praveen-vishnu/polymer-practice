

import { PolymerElement, html } from '@polymer/polymer';

class Page2 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>View Two</h1>
      </div>
    `;
  }
}

window.customElements.define('my-page2', Page2);
