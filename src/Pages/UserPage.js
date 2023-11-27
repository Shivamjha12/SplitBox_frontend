import React,{useState} from 'react';
import UserPageCard from '../Components/UserPageCard';
import UserProfileAvatar from '../Components/UserProfileAvatar';
import UserProfileAvatarCard from '../Components/UserProfileAvatarCard';

const badge=["Radiator","Achiever","Developer"]
const listData = ["Title of the List","Title of the List","Title of the List","Title of the List"]
function SearchPage(){
    const [tab, setTab] = useState("all");
    return(
        <div className="UserPage">
            <div className="UserAvatatSection"> 
                <UserProfileAvatar/>
                <div className="UserBadge">
                    {
                        badge.map((item, index) =>(
                            <UserProfileAvatarCard text={item}/>
                        ))}
                </div>
            </div>

            <div className="UserPageList">
                <div className="UserListSelectDiv">
                            <h3 className="UserListSelectDivTitle">Your Activity</h3>
                            <div className="UserListSelectDivButtons"> 
                                <button className={`activity2 ${tab === "all" ? "UserListSelectDivButtonsActivity1" : ""}`}
                                onClick={() => {
                                    setTab("all");
                                  }}
                                >Activity 1</button>
                                <button 
                                className={`activity2 ${tab === "favourite" ? "UserListSelectDivButtonsActivity1" : ""}`}
                                onClick={() => {
                                    setTab("favourite");
                                }} >Activity 2</button>
                            </div>
                </div>
                {listData.map((item, index) =>(
                    <UserPageCard text={item}/>
                ))}
                
            </div>
        </div>
   )
}
export default SearchPage; 