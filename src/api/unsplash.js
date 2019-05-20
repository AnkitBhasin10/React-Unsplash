import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 06a04be2c86169cc9eea39805e65a945a7b77ae896d6365e303524c0f611c3c5"
  }
});
