import React from "react";
import "./Profile.css";
import rofile from "../../assets/profile.JPG";

function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-grid'>
        <div className='profile-box-1'>
          <img className='profile-image' src={rofile} alt='' />
        </div>
        <div className="profile-box-2">
            ชื่อ : นายรัตนพลศรีโนนยาง รหัส 66044213 <br />
            อายุ  : 24 ปี <br />
            วันเกิด : วันจันทร์ เดือนมีนาคม พ.ศ. 2543 <br />
            อาชีพ : นักศึกษา <br />
            การศึกษา : นักศึกษาปี 2 มหาวิทยาลัยศรีปทุม <br />
            สาขา : วิทยาการคอมพิวเตอร์ (Fullstack-developer)
        </div>
      </div>
    </div>
  );
}

export default Profile;
