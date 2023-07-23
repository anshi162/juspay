import React from "react";
import { useDrag } from "react-dnd";

import './Codestyles.css'

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <div className="img2">
    <img src={url} ref={drag} alt='images' width="70px" height="70px" style={{ border: isDragging ? "1px solid pink" : "0px" }} />
    </div>
  );
}

export default Picture;