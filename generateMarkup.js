function teamMemberCard(data) {
  let divArray = [];
  for (let member of data) {
    let div = `
    <div><h2>${member.name}</h2>
    <h2>${member.getRole()}</h2>
    <h3> ID: ${member.id}</h3>
    <h3>Email: ${member.email}</h3>
   
    </div>
    `;
    divArray.push(div);
    console.log(member);
  }
  console.log(divArray);
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
      ${teamCards}
  </body>
  </html>
  
  ;`;
}

module.exports = generateMarkup;
