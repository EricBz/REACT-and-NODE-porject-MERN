import { useState, useEffect } from "react"

const Recibe = () => {
    const [message, setMessage] = useState("")
    useEffect(
       () => {
        fetch("/data")
        .then((res) => res.text())
        .then((data) => {setMessage(data)
           // console.log(data)
        }
    )
        .catch((err) => console.log(err))
       }, []
    )
    return(
        
            <h1>{message}</h1>
        
    )
}

export default Recibe