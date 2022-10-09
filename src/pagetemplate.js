const manager = data => {
    return

}
const engineer = data =>{
    return
}
const Intern = data => {

}

const staffDiv = (staff) => {
    let staffHtml=''

    for(i= 0; i < staff.length; i++){
        if (staff[i],getRole() === "Manager"){
            staffHtml = staffHtml + manager(staff[i])
        }
        else if (staff[i],getRole() === "Engineer"){
            staffHtml = staffHtml + engineer(staff[i])
        }
        else if (staff[i],getRole() === "Intern"){
            staffHtml = staffHtml + intern(staff[i])
        }
        
    } return staffHtml;
}
const template = data => {
    return 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 team-heading bg-info">
                    <h1 class="text-center text-black">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${staffDiv(data)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
    };`
}