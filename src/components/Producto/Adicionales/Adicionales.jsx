import React from "react";
import adicionalesBase from './adicionalesBase.json';

const Adicionales = () => {
    <div>
    <details>
    <summary>Adicionales</summary>
    {
    adicionalesBase.map(adicional => {
        return (
            <div className="form-check extras" id="extras" key={adicional.id}> {adicional.name} = ${adicional.price}
            <input className="form-check-input" type="checkbox" value="" id="adicional"/>
            </div>
        )
    } )
    }
    </details>
    </div>
    }

export default Adicionales