import axios from "axios";

const getData = (page) => {
  return axios
    .get(`https://milfeliche.microcms.io/api/v1/${page}`, {
      headers: { "X-API-KEY": "67208e66-8604-4353-b492-bdfcbd70da7d" }
    })
    .then((res) => {
      return res.data.contents;
    });
};

export default ({ app }, inject) => {
  inject("getData", getData);
};
