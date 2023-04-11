import { defineCustomElement } from 'vue';
import  AppComponent from './App.vue'

const simpleSample = defineCustomElement(AppComponent);

customElements.define('simple-sample', simpleSample)
