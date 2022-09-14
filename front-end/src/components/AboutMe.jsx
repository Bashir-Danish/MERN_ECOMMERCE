import React from "react";

const AboutMe = () => {
   return (
      <div className="am-container">
         <div className="am-row">
            <h2 className="sh-title">About Me</h2>    
         </div>
         <div className="am-row">
            <div className="am-left">
                <img src="./assets/images/user/user.png" alt="" className="user-img"/>
            </div>
            <div className="am-right">
                <h3 className="fullName">Dos Danish</h3>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;
