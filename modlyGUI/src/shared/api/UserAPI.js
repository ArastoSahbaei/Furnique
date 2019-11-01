import Axios from 'axios'

      export const registerNewUser = (user) => { Axios.post('http://localhost:8080/users', user)
        .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
     }

     export const verifyEmail = (token) => { Axios.get('http://localhost:8080/confirm-account?token=' + token)
        .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
     }