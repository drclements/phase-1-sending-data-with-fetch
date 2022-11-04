// Add your code here

// const formData = {
//     dogName: "Pierre",
//     dogBreed: "Doodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(error => alert("Bad Things! Ragnorok!"));
//     console.log(error.message)


       

function submitData (userName, userEmail) {
    
   return fetch('http://localhost:3000/users', {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json",
   },
   body: JSON.stringify({
    name: userName,
    email: userEmail,
   })
 })
    .then(res => res.json())
    .then(data => {
        const id = document.querySelector('body');

        id.innerHTML = data.id

    })
    .catch(error => {
        const alert = document.querySelector('body');
        alert.innerHTML = error.message        
        console.log(error.message);
    })
}

submitData("Dan", "Dan@email.com");
