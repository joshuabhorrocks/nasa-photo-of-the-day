import React, {useState, useEffect} from "react";
import axios from "axios";

const Picard = () => {
    const [pic, setPic] = useState({});

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=0sbHsPgDoR6LgrckcntZqm8xwkPzmVaTut6cTIvO")
        .then(response => {
          console.log(response)
          //console.log(response.data)
          setPic(response.data)
        })
        .catch(error => {
          console.log("Space ain't your final frontier.", error)
        })
      }, [])
    return (
        <div className="space-card">
            <img className="space-img" alt="random from nasa" src={pic.hdurl}/>
            <h2 className="title">{pic.title}</h2>
            <h4 className="date">{pic.date}</h4>
        </div>
        
    )
}
export default Picard;