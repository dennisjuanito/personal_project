import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/emoticons.min.js'	
import 'froala-editor/css/plugins/emoticons.min.css'
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.min.css'

import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
window.$ = $;



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
