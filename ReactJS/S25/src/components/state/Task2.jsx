import { useState } from "react";

function Task2() {
  var [image, setImage] = useState(
    "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?rs=1&pid=ImgDetMain"
  );

  function changeToAngular() {
    setImage(
      "https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png"
    );
  }

  function changeToReact() {
    setImage(
      "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?rs=1&pid=ImgDetMain"
    );
  }

  return (
    <div>
      <h2>React Image</h2>
      <img src={image} width={500} height={300} />
      <br />
      <br />
      <button onClick={changeToReact}>React Image</button>

      <button onClick={changeToAngular}>Angular Image</button>
    </div>
  );
}

export default Task2;
