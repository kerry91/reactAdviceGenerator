import { useEffect, useState} from 'react';
import patternDivider from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';

const Card = () => {

        const endpoint = 'https://api.adviceslip.com/advice';

        const [set_id, setID] = useState("")
        const [set_ad, setAD] = useState("")

        useEffect(() => {
            fetch(endpoint)
            .then(response => response.json())
            .then(advice => {
                setID({ ID : advice.slip.id})
                setAD({ AD : advice.slip.advice})
            })
        }, [setID, setAD]
        ) 
        

    return (
      <>
        <div className="section">
        <div class="card">
                <h6 class="card-title">ADVICE  #{set_id.ID}</h6>
                <p class="card-quote">"{set_ad.AD}"</p>
                <br/>
                <img class="divider" src={patternDivider} alt="divider"/>
                <button class="dice-wrapper" onClick={() => window.location.reload(false)} >
                <img class="icon-dice" src={iconDice} alt="icon dice" />
                </button>
            </div>
          </div>
      </>
    );
  };
  
export default Card;