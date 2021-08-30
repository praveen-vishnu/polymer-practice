import { html, LitElement } from "lit-element";

class Nav extends LitElement {
    render() {
        return html`
        <style>
        ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        }

        li {
        float: left;
        }

        li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        }

        li a:hover {
        background-color: #111;
        }
        </style>
        <ul>
            <li><a>Home</a></li>
        </ul>
        `;
    }
}
customElements.define('nav-element',Nav);