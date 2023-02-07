import React, { useState } from 'react';
import plusIcon from '../public/icons/plus-icon.png';
import subtractIcon from '../public/icons/subtract-icon.png';
import Image from 'next/image';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);


    return ( 
      
        <div className="accordion__item">
        <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
            <div><h5>{title}</h5></div>
            <div>
                <button>{isActive ? <Image src = {subtractIcon} /> : <Image src = {plusIcon} />}</button>
            </div>
        </div>
        <div className={`accordion__content ${isActive ? "is-active" :''}`}>
            <p>{content}</p>
        </div>
        </div>
     );
}
 
export default Accordion;