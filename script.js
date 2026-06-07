let patients = [];
let patientId = 1;

function addPatient() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const diagnosis = document.getElementById("diagnosis").value;

    if (!name || !age || !gender || !diagnosis) {
        alert("Fill all fields");
        return;
    }

    const patient = {
        id: patientId++,
        name,
        age,
        gender,
        diagnosis
    };

    patients.push(patient);

    renderPatients();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("diagnosis").value = "";
}

function renderPatients(filtered = patients) {

    const table = document.getElementById("patientTable");

    table.innerHTML = "";

    filtered.forEach(patient => {

        table.innerHTML += `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.diagnosis}</td>
                <td>
                    <button onclick="deletePatient(${patient.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("patientCount").textContent =
        patients.length;
}

function deletePatient(id) {

    patients = patients.filter(patient => patient.id !== id);

    renderPatients();
}

function searchPatient() {

    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(search)
    );

    renderPatients(filtered);
}
