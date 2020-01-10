const axios = require("axios");

axios.get ("http://localhost:3000/projects")
    .then(resp => {
      let data = resp.data;
          console.log(data);
      })
    .catch(error => {
      console.log(error);
    });