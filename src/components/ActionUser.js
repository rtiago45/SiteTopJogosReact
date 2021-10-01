import React from 'react'

function ActionUser() {

    function clickHandler(){
        console.log("Button clicked");
    }


    return (
        <div>
            <button className="btn btn-warning" onClick={clickHandler}>Click</button>
        </div>
    )
}

export default ActionUser;
