"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <div>
      error
      <button onClick={() => reset()}>retry</button>
    </div>
  );
};

export default error;
