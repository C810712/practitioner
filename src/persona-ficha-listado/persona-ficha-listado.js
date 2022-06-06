import { LitElement, html, css } from 'lit-element';
import {sandbox} from '../sandbox/sandbox.js';

class PersonaFichaListado extends LitElement {

    static get properties() {
		return {
			name: {type: String},
			yearsInCompany: {type: Number},
			profile: {type: String},
			photo: {type: Object}
		};
	}

    static get styles() {
        return css `

            .ficha{
                border-radius:calcl(0.5vw + 0.5vh);
                border: 2px solid #4680B1;
                margin:calc(0.5vw + 0.5vh);
                text-align:center;
                width:calc(18vw + 18vh);
                display:inline-block;
            }
            .imgperson{
                width:20%;
                height:auto;
            }

            .bodyc{
                max-width:100%;
            }

            .parent-div{
                display:inline-block;
                border: calc(0.1vw + 0.1vh) solid white;
                text-align:center;
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

            <div class="parent-div">

                <div class="ficha card h-100 ">
                        <img src="${this.photo.src}" alt="${this.photo.alt}" class=" imgperson">
                        <div class="card-body bodyc">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text bodyc">${this.profile}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
                            </ul>
                        </div>
                    <div class="card-footer">
                        <button @click="${this.deletePerson}" class="btn btn-danger col-5"><strong><i class="fa fa-trash" aria-hidden="true"></i></strong></button>
                    </div>				
                </div>  
            </div>      
        `;
    }

    deletePerson(e) {
        console.log("deletePerson en persona-ficha-listado");
        console.log("Se va a borrar la persona de nombre " + this.name); 

            sandbox.dispatch('delete-person',{detail: {
                name: this.name
            }},this);
        }
}

customElements.define('persona-ficha-listado', PersonaFichaListado)