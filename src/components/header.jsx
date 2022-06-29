import React from "react";

function Header(props) {
   return(<header>
        <p className="main-logo">{props.title}</p>
    </header>
   );
}

export default Header;