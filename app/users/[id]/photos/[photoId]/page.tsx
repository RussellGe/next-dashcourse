import React from "react";
interface UserPhotoDetailProps {
  params: {
    photoId: number;
    id: number;
  };
}
const UserPhotoDetail = ({ params: { photoId, id } }: UserPhotoDetailProps) => {
  return (
    <div>
      User, {id}, PhotoDetail, {photoId}
    </div>
  );
};

export default UserPhotoDetail;
