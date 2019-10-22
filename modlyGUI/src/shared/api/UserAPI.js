import Axios from 'axios'

      export const registerNewUser = (user) => { Axios.post('http://localhost:8080/users', user)
        .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
     }