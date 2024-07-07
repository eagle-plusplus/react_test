import React, {useState} from "react"

function Component(){
    const [name, setName] = useState("GUESst"); 

    const [last, setLast] = useState("lsar"); 

    const change = () =>{
        setName("ektoras")
    }

    function updateName(e){
        setLast(e.target.value); //9
    }

    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={change}>SEt name</button><hr />
            <input type="text" value={last} onChange={updateName}/>
            <p> Last: {last}</p>
        </div>
    );

}

export default Component
