import { LitElement, html, css } from 'lit-element';
import '../persona-ficha-listado/persona-ficha-listado.js';
import '../persona-form/persona-form.js';
import {sandbox} from '../sandbox/sandbox.js';

class PersonaMain extends LitElement {
    
    static get properties() {
        return {
            people: {type: Array},
            showPersonForm: {type: Boolean}
        };
    }

    static get sandbox() {
        return sandbox;
    }

    static get styles() {
        return css `
            h2{
                color:#4680B1;
            }

            .parent_fichas{
                margin-left:calc(5vw + 5vh);
                margin-right:calc(-5vw + -5vh);
            }
           `;
    }

    constructor() {
        super();

        this.people = [
            {
                name: "Ellen Ripley",
                yearsInCompany: 10,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Ellen Ripley"
                }, 
                profile: "Lorem ipsum dolor sit amet."
            }, {
                name: "Bruce Banner",
                yearsInCompany: 2,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Bruce Banner"
                }, 
                profile: "Lorem ipsum."
            }, {
                name: "Éowyn",
                yearsInCompany: 5,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Éowyn"
                }, 
                profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                name: "Turanga Leela",
                yearsInCompany: 9,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Turanga Leela"
                }, 
                profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit."
            }, {
                name: "Tyrion Lannister",
                yearsInCompany: 1,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Tyrion Lannister"
                }, 
                profile: "Lorem ipsum."
            }
        ];
        this.showPersonForm = false;
        sandbox.on('delete-person',this.deletePerson.bind(this));
        sandbox.on('persona-form-store',this.personFormStore.bind(this));
    }

    updated(changedProperties) { 
        console.log("updated");	
        if (changedProperties.has("showPersonForm")) {
            console.log("Ha cambiado el valor de la propiedad showPersonForm en persona-main");
            this.showPersonFormData();            
        }
        sandbox.dispatch('counter',this.people.length,this)
    }

    deletePerson(e) { 
        console.log("deletePerson en persona-main");
        console.log("Se va a borrar la persona de nombre " + e.detail.name);
      
        this.people = this.people.filter(
            person => person.name != e.detail.name
        );
    }

    showPersonList() {
        console.log("showPersonList");
        console.log("Mostrando listado de personas");
        this.shadowRoot.getElementById("peopleList").classList.remove("d-none");
        this.shadowRoot.getElementById("personForm").classList.add("d-none");	
    }  
    showPersonFormData() {
        console.log("showPersonFormData");
        console.log("Mostrando formulario de persona");
        if(this.shadowRoot.getElementById("personForm").classList.contains("d-none")){
            this.shadowRoot.getElementById("personForm").classList.remove("d-none");	
        }
        else{
            this.shadowRoot.getElementById("personForm").classList.add("d-none");
        }
        
    } 

    render() {
        return html` 
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

            <h2 class="text-center">Personas</h2>
            <div class="row col-12 parent_fichas" id="peopleList">			
                <div class="row row-cols-1 row-cols-sm-4">
                    ${this.people.map(
                        person => 
                        html`<persona-ficha-listado 
                                name="${person.name}" 
                                yearsInCompany="${person.yearsInCompany}" 
                                profile="${person.profile}" 
                                .photo="${person.photo}"
                                @delete-person="${this.deletePerson}">
                            </persona-ficha-listado>`
                    )}
                </div>
            </div>
            <persona-form id="personForm" class=" border rounded border-primary"
                @persona-form-close="${this.personFormClose}">
            </persona-form>
        `;
    }

    personFormStore(e) {
        console.log("personFormStore");
        console.log("Se va a almacenar una persona  "+JSON.stringify(e));	
                            
        this.people.push(e.detail.person);
      
        console.log("Persona almacenada");	
        this.showPersonForm = false;
    }

    personFormClose() {
        console.log("personFormClose");
        console.log("Se ha cerrado el formulario de la persona");
        this.showPersonForm = false;
    }
    
}

customElements.define('persona-main', PersonaMain)