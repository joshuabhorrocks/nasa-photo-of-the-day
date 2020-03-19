import React, {useState, useEffect} from "react";
import styled from "styled-components";
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

      const SpaceCard = styled.div `
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 3%;
        margin-bottom: 0%;
      `;

      const NasaImg = styled.img `
        width: 750px;
        height: 750px;
        margin: 2% 40%;
        border: 5px solid white;
        padding: 2%;
      `;

      const ImgTitle = styled.h2 `
        margin: 2%;
      `;

      const ImgDate = styled.h4 `
        margin: 2%;
        padding-top: 3px;
      `;

      const Explanation = styled.h5 `
        color: white;
        font-size: 1rem;
        line-height: 2.5;
        width: 75%;
        display: flex;
        margin-left: 15%;
        margin-bottom: 5%;
        padding-bottom: 5%;
        border-bottom: 5px solid white;
      `;

    return (
      <div>
        <SpaceCard>
            <NasaImg className="space-img" alt="random from nasa" src={pic.hdurl}/>
            <ImgTitle className="title">Name: {pic.title}</ImgTitle>
            <ImgDate className="date">{pic.date}</ImgDate>
        </SpaceCard>
        <Explanation className="desc">{pic.explanation}</Explanation>
      </div>
        
    )
}
export default Picard;