import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  // var theme = "darkThemeContentContainer";
  // const [name, setName] = useState("Yash Mehta");
  // const [gender, setGender] = useState("male");
  // const [image, setImage] = useState(
  //   "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
  // );

  const [user, setUser] = useState({
    name: "Rohan Verma",
    image:
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d",
    gender: "male",
    city: "Bhopal",
    phone: 88888888888,
    email: "rohan@gmail.com",
  });

  const [theme, setTheme] = useState("lightThemeContentContainer");
  const [themelabel, setThemeLabel] = useState("Check to Switch Dark Mode");

  const changeToVaishnavi = () => {
    setUser({
      name: "Vaishnavi Reddy",
      image:
        "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg",
      gender: "female",
      city: "Gurugram",
      phone: 999988888,
      email: "vaishnavi@gmail.com",
    });

    // setName("Vaishnavi Reddy");
    // setGender("female");
    // setImage(
    //   "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
    // );
  };

  const changeToYash = () => {
    setUser({
      name: "Rohan Verma",
      image:
        "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d",
      gender: "male",
      city: "Bhopal",
      phone: 88888888888,
      email: "rohan@gmail.com",
    });
    // setName("Yash Metha");
    // setGender("male");
    // setImage(
    //   "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    // );
  };

  return (
    <div className="profile">
      <div className="imgContainer">
        <img src={user.image} width="100%" height={500} />
      </div>

      <div className={theme}>
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{user.name}</dd>

          <dt>
            <b>Gender</b>
          </dt>
          <dd>{user.gender}</dd>

          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{user.email}</dd>

          <dt>
            <b>Phone</b>
          </dt>
          <dd>{user.phone}</dd>

          <dt>
            <b>City</b>
          </dt>
          <dd>{user.city}</dd>

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
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setTheme("darkThemeContentContainer");
                setThemeLabel("Uncheck to Switch Light Mode");
              } else {
                setTheme("lightThemeContentContainer");
                setThemeLabel("Check to Switch Dark Mode");
              }
            }}
          />
          <label>{themelabel}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
