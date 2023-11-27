import React from 'react';
import Random from "../Assets/Random.jpg";
import SignButton from './SignButton';
function SmallCard({text}){
    return(
        <div className="UserPageCard">
            <div className="UserPageCardDiv1"> 
                <div className="UserPageCardImg">
                    <img className="UserPageCardImage" src={Random} alt="image" />
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>

            <div className="UserPageCardDiv2">
                <SignButton text={"View"} />
                <SignButton text={"Edit"} />
            </div>

        </div>
    )
}
export default SmallCard;