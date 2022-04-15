function teamMemberCard(data) {
  let divArray = [];
  for (let member of data) {
    let div = `
    <div class="employee-cards">
    <div class="container"><h2>${member.name}</h2>
    <h2>${member.getRole()}</h2>
    <h3> ID: ${member.getId()}</h3>
    <h3>Email: ${member.getEmail()}</h3>
    <h3>${teamMemberGithub(member.github)}</h3>
       </div>
       </div>
    `;
    divArray.push(div);
    return divArray.join("");
  }
}

function teamMemberGithub(member) {
  // for (let member of data) {
  if (`${member.getRole()}` === "Manager") {
    let extra = `Office #: ${member.officeNumber}`;
  } else if (`${member.getRole()}` === "Engineer") {
    let extra = `GitHub: ${member.github}`;
  } else {
    let extra = `School: ${member.school}`;
  }
}
// }

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
