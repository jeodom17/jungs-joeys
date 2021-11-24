import React from "react";

var style = {
  backgroundColor: "lime",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          
          <div style={style}>
              { children }
          </div>
          
      </div>
  )
}

export default Footer;

// export default function Nav() {
//     return (
//       <>
//       <footer class="page-footer">
//          <h2>Footer</h2>
//             <div class="container">
//             © 2014 Copyright Text
//             <a class="white-text text-lighten-4 right" href="#!">More Links</a>
//             </div>
           
          
//         </footer>
//       </>
//     );
//   }