import React from 'react'
import EcardComponent from './ECard/EcardComponent'
import 'react-credit-cards/es/styles-compiled.css'

export default function EcardsComponent() {
    return (
        <div className="row">
            <div className="col-6 ">
                <EcardComponent cvv="588" type_card="credit" valid_thru = "06/21" name="Jenil J Gandhi" cardnumber = "1234-3456-2234-9900"></EcardComponent>
            </div>
            <div className="col-6 ">
                <EcardComponent cvv="588" valid_thru="06/21" name="Jenil J Gandhi" cardnumber="1234-3456-2234-9900"></EcardComponent>
            </div>
            <div className="col-6 ">
                <EcardComponent cvv="588" valid_thru="06/21" name="Jenil J Gandhi" cardnumber="1234-3456-2234-9900"></EcardComponent>
            </div>
            <div className="col-6 ">
                <EcardComponent cvv="588" valid_thru="06/21" name="Microsoft corp." cardnumber="1234-3456-2234-9900"></EcardComponent>
            </div>
            <div className="col-6 ">
                <EcardComponent cvv="588" valid_thru="06/21" name="Jenil J Gandhi" cardnumber="1234-3456-2234-9900"></EcardComponent>
            </div>

        </div>
    )
}
