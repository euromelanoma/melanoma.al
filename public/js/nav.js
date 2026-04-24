document.addEventListener("DOMContentLoaded", function () {
  // Log that the JavaScript has loaded and DOM is ready
  console.log("DOM is loaded. Attempting to add content to .columns-row.");

  function addContentToColumnsRow() {
    const contentHTML = `
            <div class="footer-column footer-column-1">
          <h3>
            <a
              class="column-title"
              href="https://www.euromelanoma.eu/sq-al/about-euromelanoma/support?redirectInternational=true"
              >SUPPORT</a
            >
          </h3>
          <ul>
            <li>
              <a
                class="column-link"
                target="_blank"
                href="https://www.formoffice.com/en/Public/Index/6270?redirectInternational=true"
                >Support request form
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="column-link"
                href="https://www.formoffice.com/en/Public/Index/6269?redirectInternational=true"
                >Participation form
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="column-link"
                href="https://cloud.euromelanoma.eu/login?redirectInternational=true"
                >Cloud
              </a>
            </li>
            <li>
              <a class="column-link" href="https://form.melanoma.al"
                >Regjistrohu si vullnetar
              </a>
            </li>
          </ul>
        </div>
        `;

    // Locate the first .columns-row element
    const columnsRow = document.querySelector(".columns-row");

    if (columnsRow) {
      // Insert content at the end of .columns-row
      columnsRow.insertAdjacentHTML("beforeend", contentHTML);
      console.log("Content added to .columns-row.");
    } else {
      console.error("Element with class 'columns-row' not found.");
    }
  }

  function addNavTop() {
    const contentHTML2 = `<div style="z-index: 3" class="nav-top">
          <a href="https://www.instagram.com/euromelanoma.international/"
            ><ion-icon class="social-icon" name="logo-instagram"></ion-icon
          ></a>
          <a href="https://www.facebook.com/euromelanoma.international"
            ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
          ></a>
          <a href="https://www.linkedin.com/company/euromelanoma-international/"
            ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
          ></a>
          <div class="top-links-container">
          <a href="https://www.euromelanoma.eu/login" class="professionals-link"
            >Professionals</a
          >
          <a class="professionals-link extra" href="https://form.melanoma.al"
            >Volunteer</a
          ></div>

          <button class="modal-button" onclick="openModal()">
            <ion-icon class="globe-icon" name="earth-outline"></ion-icon>Albania
            | Albanian
          </button>
          <button class="modal-button-2" onclick="openModal()">
            <ion-icon class="globe-icon" name="earth-outline"></ion-icon>
          </button>

          <!-- Modal background (hidden by default) -->
          <div id="modal-bg" class="modal-bg">
            <!-- Modal content -->
            <div id="modal" class="modal">
              <span class="close" onclick="closeModal()">×</span>
              <a
                class="international-link"
                href="https://www.euromelanoma.eu/en-intl/"
                >Go to International site</a
              >
              <hr />
              <p class="choose-modal">or choose</p>
              <h3 class="loc-lan">LOCATION AND LANGUAGE</h3>

              <div class="custom-select-container">
                <p class="custom-select-label">Select country</p>
                <select class="custom-select" id="country-dropdown">
                  <option selected value="https://melanoma.al">Albania</option>
                  <option value="https://www.euromelanoma.eu/hy-am">
                    Armenia
                  </option>
                  <option value="https://www.euromelanoma.eu/de-at">
                    Austria
                  </option>
                  <option value="https://www.euromelanoma.eu/fr-be">
                    Belgium
                  </option>
                  <option value="https://www.euromelanoma.eu/bel-by">
                    Belarus
                  </option>
                  <option value="https://www.euromelanoma.eu/bs-ba">
                    Bosnia & Herzegovina
                  </option>
                  <option value="https://www.euromelanoma.eu/bg-bg">
                    Bulgaria
                  </option>
                  <option value="https://www.euromelanoma.eu/hr-hr">
                    Croatia
                  </option>
                  <option value="https://www.euromelanoma.eu/el-cy">
                    Cyprus
                  </option>
                  y
                  <option value="https://www.euromelanoma.eu/cs-cz">
                    Czech Republic
                  </option>
                  <option value="https://www.euromelanoma.eu/da-dk">
                    Denmark
                  </option>
                  <option value="https://www.euromelanoma.eu/de-de">
                    Germany
                  </option>
                  <option value="https://www.euromelanoma.eu/en-gb">
                    England
                  </option>
                  <option value="https://www.euromelanoma.eu/et-ee">
                    Estonia
                  </option>
                  <option value="https://www.euromelanoma.eu/fr-fr">
                    France
                  </option>
                  <option value="https://www.euromelanoma.eu/fi-fi">
                    Finland
                  </option>
                  <option value="https://www.euromelanoma.eu/ka-ge">
                    Georgia
                  </option>
                  <option value="https://www.euromelanoma.eu/el-gr">
                    Greece
                  </option>
                  <option value="https://www.euromelanoma.eu/hu-hu">
                    Hungary
                  </option>
                  <option value="https://www.euromelanoma.eu/en-ie">
                    Ireland
                  </option>
                  <option value="https://www.euromelanoma.eu/it-it">
                    Italy
                  </option>
                  <option value="https://www.euromelanoma.eu/sq-xk">
                    Kosovo
                  </option>
                  <option value="https://www.euromelanoma.eu/lv-lv">
                    Latvia
                  </option>
                  <option value="https://www.euromelanoma.eu/fr-lu">
                    Luxembourg
                  </option>
                  <option value="https://www.euromelanoma.eu/lt-lt">
                    Lithuania
                  </option>
                  <option value="https://www.euromelanoma.eu/cnr-me">
                    Montenegro
                  </option>
                  <option value="https://www.euromelanoma.eu/mk-mk">
                    North Macedonia
                  </option>
                  <option value="https://www.euromelanoma.eu/mt-mt">
                    Malta
                  </option>
                  <option value="https://www.euromelanoma.eu/nl-nl">
                    Netherlands
                  </option>
                  <option value="https://www.euromelanoma.eu/nn-no">
                    Norway
                  </option>
                  <option value="https://www.euromelanoma.eu/pl-pl">
                    Poland
                  </option>
                  <option value="https://www.euromelanoma.eu/pt-pt">
                    Portugal
                  </option>
                  <option value="https://www.euromelanoma.eu/ro-ro">
                    Romania
                  </option>
                  <option value="https://www.euromelanoma.eu/ru-ru">
                    Russia
                  </option>
                  <option value="https://www.euromelanoma.eu/sr-rs">
                    Serbia
                  </option>
                  <option value="https://www.euromelanoma.eu/sk-sk">
                    Slovakia
                  </option>
                  <option value="https://www.euromelanoma.eu/sl-si">
                    Slovenia
                  </option>
                  <option value="https://www.euromelanoma.eu/es-es">
                    Spain
                  </option>
                  <option value="https://www.euromelanoma.eu/de-ch">
                    Switzerland
                  </option>
                  <option value="https://www.euromelanoma.eu/sv-se">
                    Sweden
                  </option>
                  <option value="https://www.euromelanoma.eu/tr-tr">
                    Turkey
                  </option>
                  <option value="https://www.euromelanoma.eu/uk-ua">
                    Ukraine
                  </option>
                </select>
              </div>

              <!-- Confirm and Cancel buttons -->
              <div class="modal-buttons-container">
                <button class="btn btn-confirm" onclick="confirmSelection()">
                  Confirm
                </button>
                <button class="btn btn-cancel" onclick="closeModal()">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>`;

    const navContainer = document.querySelector(".nav-container");

    if (navContainer) {
      navContainer.insertAdjacentHTML("afterbegin", contentHTML2);
    } else {
      console.error("top nav not added");
    }
  }

  addNavTop();
  addContentToColumnsRow();
});

function showSubDropdown(element) {
  var subdropdown = element.querySelector(".subdropdown");
  subdropdown.style.display = "block";
}

function showSubSubDropdown(element, subdropdownId) {
  var subsubdropdown = document.getElementById(subdropdownId);
  subsubdropdown.style.display = "block";
}

function hideAllDropdowns() {
  var subdropdowns = document.querySelectorAll(".subdropdown");
  var subsubdropdowns = document.querySelectorAll(".subsubdropdown");
  subdropdowns.forEach(function (item) {
    item.style.display = "none";
  });
  subsubdropdowns.forEach(function (item) {
    item.style.display = "none";
  });
}

// Add event listeners to sublinks to show subsubdropdowns
document.querySelectorAll(".sublink").forEach(function (sublink) {
  sublink.addEventListener("mouseover", function () {
    showSubSubDropdown(sublink);
  });
});

// Add event listeners to subsubdropdowns to keep them visible when hovered
document.querySelectorAll(".subsubdropdown").forEach(function (subsubdropdown) {
  subsubdropdown.addEventListener("mouseover", function () {
    subsubdropdown.style.display = "block";
  });
  subsubdropdown.addEventListener("mouseout", function () {
    subsubdropdown.style.display = "none";
  });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".hamburger");
const headerEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-mobile");
});

// Get references to the paragraph
const myHamburger = document.querySelector(".hamburger");

// Initial state of the hamburger (assumed to start with "☰")
const initialText = "☰";
const toggleText = "×";

// Add an event listener to the hamburger to toggle its text
myHamburger.addEventListener("click", function () {
  // If the current text is the initial text, change it to the toggle text
  if (myHamburger.textContent === initialText) {
    myHamburger.textContent = toggleText;
  } else {
    // If the current text is not the initial text, change it back
    myHamburger.textContent = initialText;
  }
});

// Define a media query for screen width of 1000px or less
const mediaQuery = window.matchMedia("(max-width: 1000px)");

// Function to handle changes in media query
function handleMediaQueryChange(e) {
  if (e.matches) {
    // If the screen is 1000px or less, move elements
    moveHamburger();
    moveAnchor();
  } else {
    // If the screen is more than 1000px, reset them
    resetHamburger();
    resetAnchor();
  }
}

// Add the event listener to monitor media query changes
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Check the initial state of the media query
handleMediaQueryChange(mediaQuery);

function moveHamburger() {
  const childElement = document.querySelector(".hamburger");

  // Get the parent and grandparent elements
  const parentElement = childElement.parentNode;
  const grandParentElement = parentElement.parentNode;

  // Move the child outside its parent (to the grandparent level)
  grandParentElement.insertBefore(childElement, parentElement.nextSibling);
}

function resetHamburger() {
  const parentElement = document.querySelector(".parent");
  const childElement = document.querySelector(".hamburger");

  // Move the child back to its original parent
  parentElement.appendChild(childElement);
}

function moveAnchor() {
  const navContainer = document.querySelector(".nav");
  const anchor = navContainer.querySelector("a");

  // Get the grandparent of the nav
  const grandParent = navContainer.parentNode;

  // Move the anchor outside the navContainer (to the grandparent level)
  grandParent.insertBefore(anchor, navContainer.nextSibling);
}

function resetAnchor() {
  const navContainer = document.querySelector(".nav");
  const anchor = document.querySelector(".nav > a"); // Assuming the anchor originally belonged to `.nav`

  // Re-insert the anchor into its original position within `.nav`
  navContainer.appendChild(anchor);
}

/////////////////////////////////////////////////////////////////
//////////// TYPE DROPDOWN
// Function to toggle the dropdown
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

// Function to close the dropdown
function closeDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.remove("show");
}

// Check if click is outside dropdown
function clickOutside(event) {
  var dropdown = document.getElementById("dropdown");
  var dropdownContent = document.getElementById("myDropdown");
  var isClickOutside = !dropdown.contains(event.target);

  if (isClickOutside) {
    closeDropdown();
  }
}

// Add event listener to the document
document.addEventListener("click", clickOutside);

// Open link when clicking on a dropdown item
function goToLink(event, url) {
  event.stopPropagation(); // Prevent dropdown from closing prematurely
  window.location.href = url;
}

// Function to open the modal
function openModal() {
  document.getElementById("modal-bg").style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal-bg").style.display = "none";
}

// Attach event listener to modal background to detect outside clicks
document.getElementById("modal-bg").addEventListener("click", function (event) {
  // Get the modal content
  var modal = document.getElementById("modal");

  // If the clicked target is not the modal content or its descendants, close the modal
  if (!modal.contains(event.target)) {
    closeModal();
  }
});

// Function to confirm and navigate to selected country website
function confirmSelection() {
  var countrySelect = document.getElementById("country-dropdown");
  var selectedCountry = countrySelect.value;
  if (selectedCountry) {
    window.location.href = selectedCountry;
  }
}
