import React from 'react';

const Card = () => {
    return (
        <div className='tc h-40 w-20 bcck bfinal br3 borgrad ma4 pa3 ma2 dib bw2 '>
            <img alt='notepad' src={`https://i.ibb.co/Xkh1M9V/notepad.png`} />
            <div>
                <h2>{"Fast & Easy"}</h2>
                <p>{"AVIEW guarantees a 24-hour turnaround on subtitle and 48-hour on dubbed content."}</p>
            </div>
        </div>
    );
}

export default Card;
