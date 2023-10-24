
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    const iconGe

    if (initPerson.gender === 'Женщина') {
        let icon = document.querySelector('.icon').;
    } else {

    }

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('surname2Output').innerText = initPerson.surName2;
    document.getElementById('birthYearOutput').innerText = initPerson.age;
};

