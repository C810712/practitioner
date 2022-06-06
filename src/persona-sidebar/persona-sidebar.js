import { LitElement, html, css } from 'lit-element';  
import {sandbox} from '../sandbox/sandbox.js'; 
class PersonaSidebar extends LitElement {
	static get properties() {
		return {			
		};
	}

	static get styles() {
        return css `

            .btnplus{
                position:fixed;
				z-index:1;
				left:94%;
				bottom:2%;				
            }

			.btnplus button{
				border-radius:calc(50vw + 50vh);
				color:white;
				font-size:calc(2vw + 2vh);
				padding: 0 calc(0.7vw + 0.7vh) 0 calc(0.7vw + 0.7vh);
				opacity:0.8;
			}

            `;
    }

	constructor() {
		super();			
	}

	render() {
		return html`		
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			
			<div class="mt-5 btnplus ">
				<button title="Agregar persona" @click="${this.newPerson}" class="w-100 btn bg-success" ><i class="fa fa-plus" aria-hidden="true"></i></button>
			<div>	
		`;
	}  
    
    newPerson(e) {
        console.log("newPerson en persona-sidebar");
        console.log("Se va a crear una nueva persona");

		sandbox.dispatch('new-person', {},this);
      
    }
}  
customElements.define('persona-sidebar', PersonaSidebar) 