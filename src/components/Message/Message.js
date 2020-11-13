import React from "react";

function Message(props) {
  const getStyle = (props) => {
    let baseClass = "alert ";
    if (props.message.msgError) {
      baseClass = baseClass + "alert-danger";
    } else baseClass = baseClass + "alert-primary";
    return baseClass;
  };
  return (
    <div className={getStyle(props)} role="alert">
      {props.message.msgBody}
    </div>
  );
}

export default Message;
