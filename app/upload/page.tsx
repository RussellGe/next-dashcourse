"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="image"
        ></CldImage>
      )}

      <CldUploadWidget
        uploadPreset="vayjpwmb"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(res) => {
          if (res.event === "success" && res.info) {
            const info = res.info as CloudinaryResult;
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload</button>;
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
