const loggedInLinks = document.querySelectorAll('.logged-in')
const loggedOutLinks = document.querySelectorAll('.logged-out')

const updateNav = (user) => {
  //update navbar links depending on user login state
    if (user) {
      loggedInLinks.forEach((item) => item.style.display = 'block')
      loggedOutLinks.forEach((item) => item.style.display = 'none')    
    }
    else {
      loggedInLinks.forEach((item) => item.style.display = 'none')
      loggedOutLinks.forEach((item) => item.style.display = 'block') 
    }
}




const missingList = document.querySelector(".missing");
// var imgRef = storageRef.child('matthew-mcconaughey.jpg');

const setupMissingList = (data) => {
  let html = ''

  if (data.length) {
    data.forEach( doc => {
      const missingPerson = doc.data();
      var imgRef = storageRef.child(`${missingPerson.image}`);
      // console.log(imgRef)
      // var imgURL;
      // imgRef.getDownloadURL().then(function(url){
      //         console.log('aaaaaaa');
      //         // document.querySelector('img').src = url;
      //         imgURL = url;
      //       }).catch(function(error) {
      //         console.error(error);  
      //       });
      
      const li = `
          <li>
            <h1> ${missingPerson.firstName} ${missingPerson.lastName} </h1>
            <p> Age: ${missingPerson.age}</p>
            <p> Taille: ${missingPerson.taille}</p>
            <p> Birth Date: ${missingPerson.birthDate}</p>
            <p> Birth Place: ${missingPerson.birthPlace}</p>
            <p> Image of the Person: 
              <img src="${missingPerson.image}"/>
            </p>
          </li>
        `;
        
      html += li;
    })
    missingList.innerHTML = html;

  }
  else {
    missingList.innerHTML = '<h5>Login to see more !</h5>'
  }
}



// setup materialize modals
document.addEventListener('DOMContentLoaded', function() {
    
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

  });