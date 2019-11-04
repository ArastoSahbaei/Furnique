import Axios from 'axios'

    export const sendEmail = (contactInformation) => { Axios.post('http://localhost:8080/contact/send', contactInformation)
     .then(function (response) {
        console.log(response);
   })
     .catch(function (error) {
        console.log(error);
   });
}

