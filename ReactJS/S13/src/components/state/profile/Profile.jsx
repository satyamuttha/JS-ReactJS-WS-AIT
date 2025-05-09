import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Yash Mehta");
  const [gender, setGender] = useState("male");

  const changeToVaishnavi = () => {};

  const changeToYash = () => {};

  return (
    <div className="profile">
      <div className="imgContainer">
        <img
          src={
            "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
          }
          width="100%"
          height={500}
        />
      </div>

      <div className="contentContainer">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>Yash Mehta</dd>

          <dt>
            <b>Gender</b>
          </dt>
          <dd>male</dd>

          <dt>
            <b>Email Id</b>
          </dt>
          <dd>Yash@gmail.com</dd>

          <dt>
            <b>Phone</b>
          </dt>
          <dd>999999999999999</dd>

          <dt>
            <b>City</b>
          </dt>
          <dd>Pune</dd>

          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            magnam et. Facere maxime dicta esse eius, reiciendis ut velit illo
            sapiente alias, aut consequuntur porro sint incidunt eligendi
            recusandae harum!magnam et. Facere maxime dicta esse eius,
            reiciendis ut velit illo sapiente alias, aut consequuntur porro sint
            incidunt eligendi recusandae harum!
          </dd>
        </dl>

        <div>
          <input type="radio" name="gender" onChange={changeToYash} />
          <label>Yash Mehta</label>
          <input type="radio" name="gender" onChange={changeToVaishnavi} />
          <label>Vaishnavi Reddy</label>
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Check to Switch Dark Mode</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
