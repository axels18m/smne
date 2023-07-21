const specialists = [
  "Alta especialidad en obesidad",
  "Andrología",
  "Biología reproductiva",
  "Bioquímica",
  "Cirugía",
  "Cirugía general",
  "Diabetólogo",
  "Doctorado en ciencias",
  "Doctorado en Educación",
  "Doctorado en Química clínica",
  "Dra. Biología Moleculas en medicina",
  "Dra. En ciencias biomédicas",
  "Educadora en Diabetes",
  "Endocrinología",
  "Endocrinología pediátrica",
  "Farmacología",
  "Genética humana",
  "Genética Médica",
  "Geriatría",
  "Ginecología Endócrina",
  "Ginecología y obstetricia",
  "Inmunología",
  "Investigación Biomédica en Endocrinología",
  "Investigador en Ciencias Médicas",
  "Lic. en Enfermería",
  "Maestra en Farmacología",
  "Maestría en Nutrición Clínica",
  "Maestría en Salud Pública",
  "Medicina en C",
  "Medicina General",
  "Medicina Integrada del Adulto",
  "Medicina Interna",
  "Nutrición",
  "Nutriólogo clínico",
  "Obesidad",
  "Oftalmología",
  "Otros",
  "Patólogo",
  "Psicología",
  "Psicología Clínica",
  "Psiquiatría",
  "QFC",
  "Química, Doctora en Ciencias",
  "Radiología e Imagen",
];

const states = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Bolivia",
  "Campeche",
  "Canada",
  "CD - MX",
  "Chiapas",
  "Chihuahua",
  "Coahuila de Zaragoza",
  "Colima",
  "Colombia",
  "Durango",
  "Ecuador",
  "El Salvador",
  "Estado de México",
  "Guanajuato",
  "Guatemala",
  "Guerrero",
  "Hidalgo",
  "Honduras",
  "Jalisco",
  "Lima, Perú",
  "Michoacán de Ocampo",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Panamá",
  "Portugal",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "República Dominicana",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Texas",
  "Tlaxcala",
  "USA",
  "Venezuela",
  "Veracruz de Ignacio de la Llave",
  "Yucatán",
  "Zacatecas",
];

var doctors = [];

// Table headers
const tableHeaders = [
  "",
  "Full Name",
  "Speciality",
  "Email",
  "Phone Number",
  "Main Topic",
  "",
];

// Filters
const searchByLastNameInput = document.getElementById("searchByLastName");
const searchByCityInput = document.getElementById("searchByCity");
const searchBySpecialitySelect = document.getElementById("searchBySpeciality");
const searchByEntitySelect = document.getElementById("searchByEntity");

// Btns
const clearFiltersBtn = document.querySelector("#clearFiltersBtn");
const searchFilterBtn = document.querySelector("#searchFilterBtn");
const modalBtn = document.querySelector("#showDoctorModal");
const closeButton = document.querySelector(".btn-close");

// Results
const results = document.getElementById("searchResults");
var displayResultsAsCard = false; //

// Pagination
var paginationDoctors = [];
var currentPage = 1;
var prevIndexSelected = -1;
var currIndexSelected = 1;
const doctorsPerPage = 6;
const paginationContainer = document.getElementById("pagination");
const prevPageButton = document.getElementById("prevPageButton");
const nextPageButton = document.getElementById("nextPageButton");
const paginationSection = document.getElementById("pagination-section");
const paginationLinks = paginationContainer.getElementsByClassName("page-item");
var totalPages = Math.ceil(doctors.length / doctorsPerPage);

// Modal
const modal = document.getElementById("showDoctorModal");
const bootstrapModal = new bootstrap.Modal(
  document.getElementById("showDoctorModal")
);
const title = modal.querySelector(".modal-title");
const body = modal.querySelector(".modal-body");
const state = modal.querySelector("#doctorModalState");
const city = modal.querySelector("#doctorModalSuburb");
const town = modal.querySelector("#doctorModalTown");
const zipcode = modal.querySelector("#doctorModalZipCode");
const congressTimeFrom = modal.querySelector("#doctorModalCongressFromToTime");
const speciality = modal.querySelector("#doctorModalSpeciality");
const moderator = modal.querySelector("#doctorModalModerator");
const topic = modal.querySelector("#doctorModalTopic");
const specialities = modal.querySelector("#doctorModalSpecialities");
const addressDirection = modal.querySelector("#doctorModalDirection");

//Listeners
prevPageButton.addEventListener("click", prevPage);
nextPageButton.addEventListener("click", nextPage);
clearFiltersBtn.addEventListener("click", clearSearchResults);
searchFilterBtn.addEventListener("click", searchSpecialist);
modalBtn.addEventListener("click", showModalListener);
closeButton.addEventListener("click", () => bootstrapModal.hide());

// Load specialities and states ----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async function () {
  loadStates();
  loadSpecialists();
  loadPagination(doctors);
  loadDoctorsJsonData();
});

function loadDoctorsJsonData() {
  // all data mexico.js
  fetch('assets/js/doctors.json')
  .then(response => response.json())
  .then(data => {
      doctors = data;
  })
  .catch(error => {
      console.error('Error fetching JSON:', error);
  });
}

function loadStates() {
  const stateOptions = document.getElementById("searchByEntity");

  // States
  states.forEach((state, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.text = state;
    stateOptions.appendChild(option);
  });
}

function loadSpecialists() {
  const specialityOptions = document.getElementById("searchBySpeciality");

  // Specialists
  specialists.forEach((specialty, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.text = specialty;
    specialityOptions.appendChild(option);
  });
}

// Methods  ----------------------------------------------------------------------------------------
function searchSpecialist() {
  const lastName = searchByLastNameInput.value.trim().toLowerCase();
  const city = searchByCityInput.value.trim().toLowerCase();
  const specialityValue = searchBySpecialitySelect.value.toLowerCase();
  const entityValue = searchByEntitySelect.value.toLowerCase();

  if (!lastName && !city && specialityValue === "0" && entityValue === "0") {
    paginationDoctors = doctors;
    return displayResults(doctors);
  }

  const speciality =
    searchBySpecialitySelect.options[
      searchBySpecialitySelect.selectedIndex
    ].textContent.toLowerCase();
  const entity =
    searchByEntitySelect.options[
      searchByEntitySelect.selectedIndex
    ].textContent.toLowerCase();

  const filteredDoctors = doctors.filter((doctor) => {
    const doctorLastName = doctor.lastName.toLowerCase();
    const doctorCity =
      doctor.address.town != undefined
        ? doctor.address.town.toLowerCase()
        : null;
    const doctorSpeciality = doctor.speciality.toLowerCase();
    const doctorEntity = doctor.address.state.toLowerCase();

    if (
      (lastName && doctorLastName && !doctorLastName.includes(lastName)) ||
      (city && doctorCity && !doctorCity.includes(city)) ||
      (specialityValue !== "0" && doctorSpeciality !== speciality) ||
      (entityValue !== "0" && doctorEntity !== entity)
    ) {
      return false;
    }

    return true;
  });

  paginationDoctors = filteredDoctors;
  displayResults(filteredDoctors);
}

const displayResults = (doctorResults) => {
  // 1. Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;

  // 2. Slice the doctors array to get only the doctors for the current page
  const doctorsForPage = doctorResults.slice(startIndex, endIndex);
  totalPages = Math.ceil(doctorResults.length / doctorsPerPage);

  // 3. Clear previous results
  results.innerHTML = "";

  // 4. Doctors array validation
  if (doctorResults.length === 0) {
    results.innerHTML = `
          <div class="alert alert-warning mt-3" role="alert">
            No se encontraron resultados.
          </div>
        `;

    showPaginationSection(false);
    return;
  }

  // 5. Add results
  let cardsHtml = displayResultsAsCard
    ? showDoctorsAsCards(doctorsForPage)
    : showDoctorsAsList(doctorsForPage);

  results.innerHTML = cardsHtml;

  // 6. Update the pagination buttons
  loadPagination(totalPages);
  updatePagination(totalPages);
  showPaginationSection(true);
};

function loadPagination(totalPages) {
  // Generate the HTML for the pagination links
  let paginationHtml = "";

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `<li class="page-item ${i === currentPage ? "active" : ""
      }" id="on-paginate"><a class="page-link" onclick="onPaginateEvent(${i})" href="#busqueda">${i}</a></li>`;
  }

  paginationContainer.innerHTML = `
        <ul class="pagination">
            ${paginationHtml}
        </ul>
    `;
}

// Update the pagination buttons
function updatePagination(totalPages) {
  // Enable/disable the previous button based on the current page
  if (currentPage === 1) {
    prevPageButton.disabled = true;
  } else {
    prevPageButton.disabled = false;
  }

  // Enable/disable the next button based on the current page
  if (currentPage === totalPages) {
    nextPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
  }
}

// Navigate to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayResults(paginationDoctors);
  }
}

// Navigate to the next page
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    displayResults(paginationDoctors);
  }
}

function showPaginationSection(state) {
  paginationSection.style.visibility = state ? "visible" : "hidden";
}

function onPaginateEvent(index) {
  prevIndexSelected = index - 1;
  currIndexSelected = index;
  currentPage = currIndexSelected;
  displayResults(paginationDoctors);
}

function clearSearchResults() {
  // Reset all input fields and select dropdowns
  searchByLastNameInput.value = "";
  searchByCityInput.value = "";
  searchBySpecialitySelect.selectedIndex = 0;
  searchByEntitySelect.selectedIndex = 0;

  results.innerHTML = "";

  // hide pagination
  showPaginationSection(false);
}

function changeResultViewState(state) {
  displayResultsAsCard = state;
  displayResults(paginationDoctors);
}

function showDoctorsAsList(doctorsForPage) {
  // 1. Clear previous results
  if (!showDoctorsAsCards) results.innerHTML = "";

  var result = "";
  doctorsForPage.forEach((doctor, index) => {
    const doctoralia = doctor.socialMedia
      ? doctor.socialMedia.doctoralia
        ? doctor.socialMedia.doctoralia
        : null
      : null;
    // Single Advisor
    result += `
            <div class="col-sm-4">
                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                    <!-- Team Thumb-->
                    <div class="advisor_thumb"><img src="${
                      doctor.profileImg
                    }" alt="" width="80%" height="80%">
                        <!-- Social Info-->
                        <div class="social-info">
                            <a title="${doctor.phone ? doctor.phone : "##-####-####"
      }" target="_blank" onclick="copyPhoneNumber(${doctor.phone ? doctor.phone : null
      })">
                                <i class="bi bi-telephone-fill"></i>
                            </a>
                            <a href="${doctoralia != null ? doctoralia : "#busqueda"
      }" title="${doctoralia != null ? doctoralia : "#busqueda"
      }" target="_blank">
                                <i class="bi bi-google"></i>
                            </a>
                        </div>
                    </div>
                    <!--Team Details -->
                    <div class="single_advisor_details_info">
                        <div class="container overflow-hidden">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6>${doctor.gender === "Male"
        ? "Dr. "
        : "Dra. "
      } ${doctor.displayName}</h6>
                                    <p class="designation">${doctor.speciality
      }</p>
                                </div>
                                <div class="col text-end" ${!doctor.hasDetails ? "hidden" : ""
      }>
                                    <button type="button" class="btn btn-sm btn-light" data-toggle="modal" data-target="#showDoctorModal" onclick="showModalListener(${doctor.id
      })">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  return result;
}

function copyPhoneNumber(phone) {
  if (phone != null) {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = phone;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide feedback to the user
    const alertContainer = document.getElementById("alertContainer");
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-success");
    alertDiv.textContent = "Número celular copiado!";
    alertContainer.appendChild(alertDiv);

    // Automatically dismiss the alert after a certain time (optional)
    setTimeout(() => {
      alertDiv.remove();
    }, 2000); // Remove after 3 seconds (adjust as needed)
  }
}

function showDoctorsAsCards(doctorsForPage) {
  // 1. Clear previous results
  if (showDoctorsAsCards) results.innerHTML = "";

  var headers = "";
  tableHeaders.forEach((header) => {
    headers += `<th scope = "col" > ${header}</th> `;
  });

  var data = "";
  doctorsForPage.forEach((doctor, index) => {
    var topics = [];
    if (doctor.mainTopics)
      doctor.mainTopics.forEach((mt) => topics.push(mt.topic));

    data += `
            <tr>
                <th scope="row"><img src="${doctor.profileImg
      }" class="img-fluid doctor-avatar" style="max-width: 40px;" /></th>
                <td>${doctor.displayName}</td>
                <td>${doctor.speciality}</td>
                <td>${doctor.email === "" || doctor.email === null
        ? "-"
        : doctor.email
      }</td>
                <td>${doctor.phone === "" || doctor.phone === null
        ? "-"
        : doctor.phone
      }</td>
                <td>${topics.join(", ")}</td>
                <td>
                    <button type="button" ${!doctor.hasDetails ? "hidden" : ""
      } class="btn btn-primary btn-sm" data-toggle="modal" data-target="#showDoctorModal" id="showModalListener" onClick="showModalListener(${doctor.id
      })">Ver más</button>
                </td>
            </tr>
        `;
  });

  return `
        <div class="table-responsive">
            <table class="table table-hover my-4">
                <thead class="text-center">
                    <tr class="text-center">
                        ${headers}
                    </tr>
                </thead>
                <tbody class="text-align-center align-middle">
                    ${data}
                </tbody>
            </table>
        </div>
    `;
}

function showModalListener(doctorId) {
  var modalDoctor = doctors.filter((doc) => doc.id === doctorId);

  if (modalDoctor.length > 0) {
    modalDoctor = modalDoctor[0];
    const name =
      (modalDoctor.gender === "Male" ? "Dr. " : "Dra. ") +
      modalDoctor.displayName;

    title.textContent = name;

    var topics = [];
    modalDoctor.congress.forEach((c, index) =>
      topics.push(`${index + 1}.- ${c.topic}`)
    );
    topic.textContent = topics.join("\r\n");

    var times = [];
    modalDoctor.congress.forEach((c, index) =>
      times.push(`${index + 1}.- ${c.from} / ${c.to}`)
    );
    congressTimeFrom.textContent = times.join("\r\n");

    speciality.textContent = modalDoctor.speciality;

    var moderators = [];
    modalDoctor.mainTopics.forEach((c, index) =>
      moderators.push(`${index + 1}.- ${c.moderator}`)
    );
    moderator.textContent = moderators.join("\r\n");

    state.textContent = modalDoctor.address.state
      ? modalDoctor.address.state + ", " + modalDoctor.address.town
        ? modalDoctor.address.town
        : ""
      : "No especificado";

    specialities.textContent =
      modalDoctor.specialities.length > 0
        ? modalDoctor.specialities.join("\r\n")
        : "No especificado";

    addressDirection.textContent = modalDoctor.address.completeAddress
      ? modalDoctor.address.completeAddress + ", " + modalDoctor.address.zipcode
        ? modalDoctor.address.zipcode
        : ""
      : "";
  }
  bootstrapModal.show();
}
