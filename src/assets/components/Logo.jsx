import React from "react";

function Logo() {
  return (
    <img
      src="/src/assets/images/logo.png"
      alt="BetterReads Logo"
      className="auth-logo"
      style={{
        width: "250px", // Adjust width as needed
        height: "auto", // Maintain aspect ratio
      }}
    />
  );
}

export default Logo;

// import React from "react";

// function Logo() {
//   return <img src="/src/assets/images/logo.png" alt="BetterReads Logo" className="auth-logo" />;
// }

// export default Logo;
