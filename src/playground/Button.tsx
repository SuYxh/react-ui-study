import React from "react";
import Button from "../components/Button";

function ButtonComp() {
  return (
    <>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://google.com">
        {" "}
        link button{" "}
      </Button>
    </>
  );
}

export default ButtonComp;
