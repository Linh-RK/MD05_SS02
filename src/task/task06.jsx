import React from "react";

export default function Task06() {
  const timeNow = new Date();
  return (
    <>
      <div>Xin chào các bạn!</div>
      <div>Bây giờ là: {timeNow.toLocaleTimeString()}</div>
    </>
  );
}
