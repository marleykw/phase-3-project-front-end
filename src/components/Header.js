import React from "react";
import NewItemForm from "./NewItemForm";


function Header() {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <NewItemForm />
    </header>
  );
}

export default Header;