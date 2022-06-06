import { LitElement, html,css } from 'lit-element'; 
import {sandbox} from '../sandbox/sandbox.js'; 
class PersonaForm extends LitElement {
	static get properties() {
		return {		
            person: {type: Object}	
		};
	}

    static get styles() {
        return css `

            .modal_form{
                width:80%;
                height:80%;
                margin:5% 10% 5% 10%;
                padding:5% 5% 5% 5%;
                background-color:white;
                
            }
            .modal_parent{
                z-index:2;
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color:rgba(0,0,0,0.6);
            }
            h1{
                text-align:center;
                margin-bottom:calc(1vw + 1vh);
                margin-top:calc(-3vw + -3vh);
                background-color:#4680B1;
                color:white;
                padding: calc(1vw + 1vh);
            }
            .btns{
                margin-top:calc(0.5vh + 0.5vw);
            }
            .btnguardar{
                float:right;
            }

            `;
    }

	constructor() {
		super();		
        this.person = {};				
	}

	render() {
		return html`	
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">	
            <div class = "modal_parent">
                <div class="modal_form">
                    <h1>Agregar persona</h1>
                    <form>
                        <div class="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" @input="${this.updateName}" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
                        <div>
                        <div class="form-group">
                            <label>Perfil</label>
                            <textarea @input="${this.updateProfile}" class="form-control" placeholder="Perfil" rows="5"></textarea>
                        <div>
                        <div class="form-group">
                            <label>Años en la empresa</label>
                            <input type="text" @input="${this.updateYearsInCompany}" class="form-control" placeholder="Años en la empresa"/>
                        <div>
                        <button @click="${this.goBack}" class="btn btn-primary btns"><strong>Atrás</strong></button>
                        <button @click="${this.storePerson}" class="btn btn-success btns btnguardar"><strong>Guardar</strong></button>
                    </form>
                </div>	
            </div>
		`;
	}  

    updateName(e) {
        console.log("updateName");
        console.log("Actualizando la propiedad name con el valor " + e.target.value);
        this.person.name = e.target.value;
    }
    updateProfile(e) {
            console.log("updateProfile");
            console.log("Actualizando la propiedad profile con el valor " + e.target.value);
            this.person.profile = e.target.value;
    }
    updateYearsInCompany(e) {
            console.log("updateYearsInCompany");
            console.log("Actualizando la propiedad yearsInCompany con el valor " + e.target.value);
            this.person.yearsInCompany = e.target.value;
    }
    
    goBack(e) {
        console.log("goBack");	  
        e.preventDefault();	
        sandbox.dispatch('persona-form-close', {},this);
    }

    storePerson(e) {
        console.log("storePerson");
        e.preventDefault();
        
        this.person.photo = {
            "src": "./img/persona.jpg",
            "alt": "Persona"
        };
            
        console.log("La propiedad name vale " + this.person.name);
        console.log("La propiedad profile vale " + this.person.profile);
        console.log("La propiedad yearsInCompany vale " + this.person.yearsInCompany);
        
        sandbox.dispatch('persona-form-store', {detail:{
            person:  {
                    name: this.person.name,
                    profile: this.person.profile,
                    yearsInCompany: this.person.yearsInCompany,
                    photo: this.person.photo
                }
            }}
        ,this);
    }
}  
customElements.define('persona-form', PersonaForm) 