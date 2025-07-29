import Spinner from "react-bootstrap/Spinner";
import React from "react";

export const Loading: React.FC = () => {
  return (
    <>
      <span className={"my-margin-r3"}></span>
      <span className={"my-margin-r3"}></span>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </>
  )
}
