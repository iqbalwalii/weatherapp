import axios from "axios";
import { ENDPOINT } from "@env";

export const getLocation = ({ location, language }) => {
  console.log("aaaaaaaaa");
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json
?q=srinagar&lang=english&key=607bcc927cd742378e0125052232405`
    )
    .then((res) => res.json());
};
