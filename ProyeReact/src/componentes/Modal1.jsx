import React from 'react';
import PropTypes from 'prop-types';
//import Modal1 from './ModalBase1';
import './Modal1.css';


var Dat1;
GetGato();


window.onload = function() {

    GetGato();
  };



function GetGato(){

    var first = JSON.parse(sessionStorage.getItem("Pochoclos"));

    if(first != null){
        Dat1 = first;
        console.log(Dat1)

        document.getElementById('text1').innerHTML = Dat1[0].name;
    }
    
}
/**
 * Primary UI component for user interaction
 */
export const Modal = ({ label, ...props }) => {
  //const Dat1 = "hola";

  return (
    
    // <label

    //   {...props}
    // >
    //   {label}
    // </label>

    <div>
    <a href="#modal-opened" class="link-1" id="modal-closed">Abrir Modal</a>
    <div class="modal-container" id="modal-opened">
    <div class="modal">
    
        <div class="modal__details">
        <h1 class="modal__title">{label}</h1>
        <p class="modal__description">Cuadro de Dialogo Formato USIP PostGrado FULLSTACK</p>
        <label id='text1' class="modal__description"></label>
        </div>
    
        <p  class="modal__text">Opciones</p>
        
        <ul>
          <li>{props.label2}</li>
          <li>Opcion2</li>
        </ul>
        <button class="modal__btn">Button &rarr;</button>
    
        <a href="#modal-closed" class="link-2"></a>
    
    </div>
    </div>
</div>


  );
};

Modal.propTypes = {

  label: PropTypes.string.isRequired,
  label2: PropTypes.string
};
