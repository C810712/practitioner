import { LitElement, html,css } from 'lit-element';

class PersonaFooter extends LitElement {

    static get properties() {
        return {
        };
    }

    static get styles(){
        return css`
            h5{
                text-align:center;
                display:inline-block;
                background-color:rgba(70, 128, 177, 0.7);
                color:white;
                padding: calc(1vw + 1vh);
                top:0;
                width:100%;
            }
            `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <h5>@Persona App 2022</h5>
        `;
    }
}

customElements.define('persona-footer', PersonaFooter)