import axios from "axios";
export const ReSearchValue = async () => {
  let response = await axios.get("http://localhost:5206/Movie/SearchPerson", {
    params: { Value: "hehe" },
  });
  console.log("response", response);
};
