import React from "react";
import ReactPlayer from "react-player";
const App = () => {
  return (
    <div>
      <ReactPlayer
        controls
        loop
        url={"https://www.youtube.com/watch?v=cE4yArMbIVc"}
      />
    </div>
  );
};

export default App;
