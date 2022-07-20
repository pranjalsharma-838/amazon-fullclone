import { BookLoader } from "react-awesome-loaders";
import React from "react";

export default function Loading() {
  return (
    <div
      className="Loading"
    
    >
      <BookLoader
        background={"linear-gradient(135deg, #cd9042, #cd9042)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#cd9042"}
        text={'Please Wait.....'}
        size={'100px'}
      />
    </div>
  );
}
