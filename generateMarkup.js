function teamMemberCard(data) {
  let divArray = [];
  for (let member of data) {
    let div = `
    <div class="employee-cards">
    <div class="container"><h2>${member.name}</h2>
    <h2>${member.getRole()}</h2>
    <h3> ID: ${member.getId()}</h3>
    <h3>Email: ${member.getEmail()}</h3>
       </div>
       </div>
    `;
    divArray.push(div);
  }

  function teamMemberGithub(data) {
    if (data.getRole() === Manager) {
      `Office #: ${data.managerOffice}`;
    } else if (data.getRole() === Engineer) {
      `GitHub: ${data.github}`;
    } else {
      `School: ${data.school}`;
    }
  }

  console.log(divArray);
  return divArray.join("");
}

function generateMarkup(data) {
  const teamCards = teamMemberCard(data);
  const lastLine = teamMemberGithub(data);
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
       ${lastLine}
      </div>
  </body>
  </html>
  
  `;
}

module.exports = generateMarkup;
