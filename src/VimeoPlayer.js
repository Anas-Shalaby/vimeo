import React from "react";
import Player from "react-vimeo";

const VimeoPlayer = ({ videoId, accessToken }) => {
  return (
    <Player
      videoId={videoId}
      accessToken={accessToken}
      width={640}
      height={360}
      onPlay={() => console.log("Playing...")}
      onPause={() => console.log("Paused...")}
    />
  );
};

export default VimeoPlayer;
