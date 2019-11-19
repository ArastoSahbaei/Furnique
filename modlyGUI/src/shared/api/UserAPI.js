import Axios from 'axios'

      export const registerNewUser = (user) => { Axios.post('http://localhost:8080/register', user)
      .then(function (response) {
        return alert("We've sent you mail! Please confirm your user.");
       })
       .catch(function (error) {
         return alert(error);
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

     export const getAllEmailsFromConfirmedUsers = () => { return Axios.get('http://localhost:8080/users/confirmedusers') }