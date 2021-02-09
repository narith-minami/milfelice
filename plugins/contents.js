import axios from "axios";

const getData = (page) => {
  return axios
    .get(`https://naritech.microcms.io/api/v1/${page}`, {
      headers: { "X-API-KEY": "63e9fc87-08da-43bd-ae4a-5e82b31557e7" }
    })
    .then((res) => {
      return res.data.contents;
    });
};

export default ({ app }, inject) => {
  inject("getData", getData);
};
