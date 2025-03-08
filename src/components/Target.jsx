import React from "react";

function Target({ position, onHit }) {
    return (
        <img
            src="../assets/aim-black.jpg"
            alt="Target"
            className="target"
            style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "50px",
            height: "50px",
            cursor: "pointer",
            }}
            onClick={onHit}
        />
    );
}

export default Target;
