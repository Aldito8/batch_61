function buttonSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let dropdown = document.getElementById("subject");
    let selectedValue = dropdown.value;
    let message = document.getElementById("message").value
    console.log(`nama: ${name}\nemail: ${email}\nphone: ${phone}\nsubject: ${selectedValue}\nmessage: ${message}`)
    alert(`nama: ${name}\nemail: ${email}\nphone: ${phone}\nsubject: ${selectedValue}\nmessage: ${message}`)
}
