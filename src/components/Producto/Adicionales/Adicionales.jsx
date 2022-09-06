import React from "react";
import adicionalesBase from './adicionalesBase.json';

const Adicionales = () => {
    <div>
    <details>
    <summary>Adicionales</summary>
    {
    adicionalesBase.map(Adicional => {
        return (
            <div className="form-check extras" id="extras" key={Adicional.id}> {Adicional.nombre} = ${Adicional.precio}
            <input className="form-check-input" type="checkbox" value="" id="adicional"/>
            </div>
        )
    } )
    }
    </details>
    </div>
    }

export default Adicionales