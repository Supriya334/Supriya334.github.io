

let form=document.querySelector("form");
// console.log(form)
form.addEventListener('submit',sendMail)

function sendMail(e){
    e.preventDefault()
    // console.log(form)
    // let name=form.name;
    // let number=form.mobile;
    // let email=


    let userDetail={
name:form.name,
number:form.mobile,
email:form.email,
message:form.message.value
    }
    console.log(userDetail)
}

