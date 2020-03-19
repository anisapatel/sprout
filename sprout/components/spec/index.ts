/** @format */
const axios = require('axios');

export const getUser = async username => {
  const { data } = await axios.get(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}`
  );
  return data;
};

export const deleteuser = username => {
  axios.delete(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}`
  );
};

export const addPlantToGarden = async (newPlant, username) => {
  await axios.patch(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/garden`,
    newPlant
  );
};

export const getUserGarden = async username => {
  const { data } = await axios.get(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/garden`
  );
  return data;
};

export const getUserMedals = async username => {
  const { data } = await axios.get(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/medals`
  );
  return data;
};

export const getUserScannedPlants = async username => {
  const { data } = await axios.get(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/scanned-plants`
  );
  return data;
};

export const getUserWishlist = async username => {
  const { data } = await axios.get(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/wishlist`
  );
  return data;
};

export const addPlantToScanned = async (newPlant, username) => {
  console.log(newPlant);
  await axios.patch(
    `https://0ky9ja1k3b.execute-api.eu-west-2.amazonaws.com/Dev/users/${username}/scanned-plants`,
    newPlant
  );
};
