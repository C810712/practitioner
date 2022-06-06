import { LitElement, html, css } from 'lit-element';
import {sandbox} from '../sandbox/sandbox.js';

class PersonaHeader extends LitElement {

    static get properties() {
        return {
            numPersonas:{type:Number}
        };
    }

    static get styles() {
        return css `

            h1{
                text-align:center;
                display:inline-block;
                background-color:#4680B1;
                color:white;
                padding: calc(1vw + 1vh);
                top:0;
            }
            label{
                float:right;
                z-index:1;
                top:5%;
                position:fixed;
                left:95%;
                background-color:#4680B1;
                border-radius:calc(1vw + 1vh);
                padding:calc(0.5vw + 0.5vh);
                color:white;

            }
            div{
                text-align:center;
                margin-bottom:calc(2vw + 2vh);
                margin-top:calc(1vw + 1vh);
            }

            `;
    }

    constructor() {
        super();
        this.numPersonas = 0;
        sandbox.on('counter',this.updateCounter.bind(this))
        
    }

    updateCounter(e){
        this.numPersonas = e;
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

            <div>
            <h1 class="col-12">App Persona  </h1>
            <label ><i class="fa fa-user" aria-hidden="true"></i> ${this.numPersonas}</label>
            </div>
        `;
    }
}

customElements.define('persona-header', PersonaHeader)