import React from 'react';

const Card = () => {
    return (
        <div className='borgrad tc h-40 bfinal ma4 w-20 bcck br3 pa3 ma2 dib bw2 '>
            <img alt='robots' src={`https://i.ibb.co/LCg7Rdf/Pngtree-business-cooperation-handshake-gesture-5939991.png`} />
            <div>
                <h2>{"Flexible"}</h2>
                <p>{"We offer a personalized payment plan and tailor our process to your needs"}</p>
            </div>
        </div>
    );
}

export default Card;
