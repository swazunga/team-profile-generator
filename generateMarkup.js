function teamMemberCard(data) {
  let divArray = [];
  let div;
  for (let member of data) {
    if (member.getRole() === "Manager") {
      div = `
      <div class="employee-cards">
      <div class="container"><h2>${member.name}</h2>
      <h2>${member.getRole()}</h2>
      <h3> ID: ${member.getId()}</h3>
      <h3>Email: ${member.getEmail()}</h3>
      <h3>Office #: ${member.officeNumber}</h3>
         </div>
         </div>
      `;
    }
    if (member.getRole() === "Engineer") {
      div = `
      <div class="employee-cards">
      <div class="container"><h2>${member.name}</h2>
      <h2>${member.getRole()}</h2>
      <h3> ID: ${member.getId()}</h3>
      <h3>Email: ${member.getEmail()}</h3>
      <h3>Github: ${member.github}</h3>
         </div>
         </div>`;
    }
    if (member.getRole() === "Intern") {
      div = `
      <div class="employee-cards">
      <div class="container"><h2>${member.name}</h2>
      <h2>${member.getRole()}</h2>
      <h3> ID: ${member.getId()}</h3>
      <h3>Email: ${member.getEmail()}</h3>
      <h3>School: ${member.getSchool()}</h3>
         </div>
         </div>
      `;
    }
    divArray.push(div);
  }
  return divArray.join("");
}

function generateMarkup(data) {
  const teamCards = teamMemberCard(data);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css" />
      <title>My Team</title>
  </head>
  <body>
      <h1>My Team</h1>
      <div class="all-cards">
       ${teamCards}
       
      </div>
  </body>
  </html>
  
  `;
}

module.exports = generateMarkup;
