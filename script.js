function submitForm() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var mname = document.getElementById("middleName").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    console.log(`FirstName: ${fname}`);
    console.log(`LastName: ${lname}`);
    console.log(`MiddleName: ${mname}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${pwd}`);

}