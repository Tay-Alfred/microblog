// retrive the user information from the landing page
// const user = JSON.parse(localStorage.getItem('user'));
// const name = user.name;
// const userId = user.id;

// const userNameElement = document.getElementById('username');
// userNameElement.textContent = name;

// saves the new bio to the local server

// const profileBioElement = document.getElementById('profile-bio');

// profileBioElement.addEventListener('input', () => {
//   const newBio = profileBioElement.value;

//   const saveBioButtonElement = document.getElementById('save-bio-button');

// saveBioButtonElement.addEventListener('click', () => {
//   const newBio = profileBioElement.value;

//   // Send a request to the server to save the new bio
//   fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ bio: newBio })
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response from the server
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occur during the request
//     console.error(error);
//   });
// });
// // now display the new bio
// fetch('/api/profile/bio')
//   .then(response => response.json())
//   .then(data => {
//     const profileBioElement = document.getElementById('profile-bio');
//     profileBioElement.value = data.bio;
//   })
//   .catch(error => {
//     console.error(error);
//   });
// });
// profileBioElement.removeEventListener('input', saveBioOnChange);
// localStorage.setItem('profileBioElement', JSON.stringify(user));
// localStorage.setItem('newBio', JSON.stringify(user));

// Get the profile bio text area and save button elements
const profileBioElement = document.getElementById('profile-bio');
const saveBioButtonElement = document.getElementById('save-bio-button');

// Add an event listener to the save button
saveBioButtonElement.addEventListener('click', () => {
  const newBio = profileBioElement.value;

  // Send a request to the server to save the new bio
  fetch('/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bio: newBio })
  })
  .then(response => response.json())
  .then(data => {
    // Display a success message
    alert('Profile bio saved successfully!');
  })
  .catch(error => {
    // Display an error message
    alert('Error saving profile bio: ' + error.message);
  });
});

// Send a request to the server to retrieve the updated bio
fetch('/api/profile/bio')
  .then(response => response.json())
  .then(data => {
    const profileBioElement = document.getElementById('profile-bio');
    profileBioElement.value = data.bio;
  })
  .catch(error => {
    console.error(error);
  });