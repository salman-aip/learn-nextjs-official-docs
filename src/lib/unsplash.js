import axios from "axios";

const getPhotos = async () => {
  let photos = [];

  await axios
    .get("https://api.unsplash.com/photos/?client_id=9LshQR5BF1bI7agAqN_T_E5jHp5fXxkP16opnaMWzes")
    .then((res) => {
      photos = res.data;
    });

  return photos;
};

const getPhoto = async (id) => {
  let photo = {};

  await axios
    .get(
      `https://api.unsplash.com/photos/${id}/?client_id=9LshQR5BF1bI7agAqN_T_E5jHp5fXxkP16opnaMWzes`,
    )
    .then((res) => {
      photo = res;
    });

  return photo;
};

export { getPhotos, getPhoto };
