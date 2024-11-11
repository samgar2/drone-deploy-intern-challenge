import React from "react";
import { useGetImagesQuery } from "../api/droneImagesApi";

//React component for displaying images
const Images = () => {
  const { data = {}, error, isLoading } = useGetImagesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="books">
      {data.map((image) => (
        <div key={image.image_id} className="book">
          <p>{image.timestamp},
          {image.latitude},
          {image.longitude},
          {image.altitude_m},
          {image.heading_deg},
          {image.file_name},
          {image.camera_tilt_deg},
          {image.focal_length_mm},
          {image.iso},
          {image.shutter_speed},
          {image.aperture},
          {image.color_temp_k},
          {image.image_format},
          {image.file_size_mb},
          {image.drone_speed_mps},
          {image.battery_level_pct},
          {image.gps_accuracy_m},
          {image.gimbal_mode},
          {image.subject_detection},
          {image.image_tags}</p>
          <img className="image" src={image.image} alt="Image" />
        </div>
      ))}
    </div>
  );
};

export default Images;
