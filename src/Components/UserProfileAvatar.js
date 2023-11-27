import React from 'react';
import Avatar from '../Assets/Avatar.png';
import Random from '../Assets/Random.jpg';
import SearchButton from './SearchButton';
function UserProfileAvatar({imageUrl}){
    return(
        <div className="UserProfileAvatar"> 
            <div className="UserProfileAvatarImageDiv">
                <img className="UserProfileAvatarImage" src={Random} alt="image" />
            </div>
            <div className="UserProfileAvatarTitle">
                <SearchButton text={"Jenny fernandez"} />
            </div>
        </div>
    )
}
export default UserProfileAvatar;