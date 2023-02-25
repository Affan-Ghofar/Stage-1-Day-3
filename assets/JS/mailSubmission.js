// Membuat function getData
function getData() {
    // Deklarasi variable DOM
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    // Kondisi jika inputan kosongan (looping if else)
    if (name == "") {
        alert("Name Cannot be Empty!")
    } else if (email == "") {
        alert("Email Cannot be Empty!")
    } else if (phone == "") {
        alert("Phone Number Cannot be Empty!")
    } else if (subject == "") {
        alert("Subject Cannot be Empty!")
    } else if (message == "") {
        alert("Message Cannot be Empty!")
    }

    // Deklarasi default email
    let defaultEmail = document.getElementById('email').value

    let mailTo = document.createElement('a')
    mailTo.href = `mailTo:${defaultEmail}?subject=${subject}&body=Hello My Name ${name}, ${message}, Let's Talk with me on my Number ${phone}`
    mailTo.click()

    let audience = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(audience)
}