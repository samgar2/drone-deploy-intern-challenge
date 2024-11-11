//pulling in the connection to my local database
const client = require("./client");

const { images } = require("./seedData");

//Drop tables for data cleanliness
const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
        DROP TABLE IF EXISTS images;
        `);
    console.log("Tables dropped!");
  } catch (error) {
    console.log("Error dropping tables: ", error);
  }
};

//Create tables to give data a home <3
const createTables = async () => {
  try {
    console.log("building tables...");
    await client.query(`
        CREATE TABLE images (
            "image_id" SERIAL PRIMARY KEY,
            timestamp varchar(50) UNIQUE NOT NULL,
            latitude varchar(50) UNIQUE NOT NULL,
            longitude varchar(50) UNIQUE NOT NULL,
            altitude_m varchar(50) NOT NULL,
            heading_deg varchar(50) NOT NULL,
            file_name varchar(50) NOT NULL,
            camera_tilt_deg varchar(50) NOT NULL,
            focal_length_mm varchar(50) NOT NULL,
            iso varchar(50) NOT NULL,
            shutter_speed varchar(50) NOT NULL,
            aperture varchar(50) NOT NULL,
            color_temp_k varchar(50) NOT NULL,
            image_format varchar(50) NOT NULL,
            file_size_mb varchar(50) NOT NULL,
            drone_speed_mps varchar(50) NOT NULL,
            battery_level_pct varchar(50) NOT NULL,
            gps_accuracy_m varchar(50) NOT NULL,
            gimbal_mode varchar(50) NOT NULL,
            subject_detection varchar(50) NOT NULL,
            image_tags varchar(50) UNIQUE NOT NULL,
        );
        `);
    console.log("tables built!");
  } catch (error) {
    console.error(error);
  }
};

//Populate tables to have data later :)
//Create images
const createInitialImages = async () => {
  try {
    for (const image of images) {
      console.log(image);
      const {
        rows: [images],
      } = await client.query(
        `
                INSERT INTO images(image_id, timestamp, latitude, longitude, altitude_m, heading_deg, file_name, camera_tilt_deg, focal_length_mm, iso, shutter_speed, aperture, color_temp_k, image_format, file_size_mb, drone_speed_mps, battery_level_pct, gps_accuracy_m, gimbal_mode, subject_detection, image_tags)

                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21);
            `,
        [
          image.timestamp,
          image.latitude,
          image.longitude,
          image.altitude_m,
          image.heading_deg,
          image.file_name,
          image.camera_tilt_deg,
          image.focal_length_mm,
          image.iso,
          image.shutter_speed,
          image.aperture,
          image.color_temp_k,
          image.image_format,
          image.file_size_mb,
          image.drone_speed_mps,
          image.battery_level_pct,
          image.gps_accuracy_m,
          image.gimbal_mode,
          image.subject_detection,
          image.image_tags,
        ]
      );
    }
    console.log("created images");
  } catch (error) {
    throw error;
  }
};

//Call my functions to build my database
const buildDb = async () => {
  try {
    //ACTUALLY CONNECT to my local database
    client.connect();

    //Run our functions
    await dropTables();
    await createTables();

    await createInitialImages();
  } catch (error) {
    console.error(error);
    //finally will ALWAYS run, whether the catch triggers or not
  } finally {
    //close our connection to my local database
    client.end();
  }
};

buildDb();
