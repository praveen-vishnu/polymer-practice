import { PolymerElement, html } from "@polymer/polymer";
import {} from "@polymer/polymer/lib/elements/dom-repeat.js";
import {} from "@polymer/polymer/lib/elements/dom-if.js";

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import { setRootPath } from '@polymer/polymer/lib/utils/settings.js';

import("./home-element.js");
import("./page2.js");
import("./page3.js");

setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: "_pageChanged",
      },
      routeData: Object,
      subroute: Object
    };
  }

  connectedCallBack(){
    super.connectedCallBack();
    console.log(this.routeData);
  }
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header,app-toolbar {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>


      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>[[page]]</app-toolbar>
          <iron-selector
            selected="[[page]]"
            attr-for-selected="name"
            class="drawer-list"
            role="navigation"
          >
            <a name="home" href="[[rootPath]]home">Home</a>
            <a name="page2" href="[[rootPath]]page2">Page 2</a>
            <a name="page3" href="[[rootPath]]page3">Page 3</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <div main-title=""></div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-home name="home"></my-home>
            <my-page2 name="page2"></my-page2>
            <my-page3 name="page3"></my-page3>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }
  constructor() {
    super();
    console.log(this.routeData);

  }
  static get observers() {
    return ["_routePageChanged(routeData.page)"];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = "home";
    } else if (["home", "page2", "page3"].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = "view404";
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
  _pageChanged(page) {
    switch (page) {
      case "home":
        import("./home-element.js");
        break;
      case "page2":
        import("./page2.js");
        break;
      case "page3":
        import("./page3.js");
        break;
    }
  }
}

window.customElements.define("my-app", MyApp);
