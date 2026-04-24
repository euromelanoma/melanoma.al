const countryData = {
  Albania: {
    chair: "Entela Shkodrani",
    logo: "../images/logo.svg",
    firstCampaign: 2019,
  },
  Armenia: {
    chair: "Angela Hayrapetyan",
    logo: "../images/logo.svg",
    firstCampaign: 2016,
  },
  Austria: {
    chair: "/",
    logo: "../images/logo.svg",
    firstCampaign: 2010,
  },
  Belarus: {
    chair: "Aliaksandr Lukyanau",
    logo: "../images/logo.svg",
  },
  Belgium: {
    chair: "Thomas Maselis",
    logo: "../images/logo.svg",
    firstCampaign: 1999,
  },
  BosniaHerzegovina: {
    chair: "Hana Helppikangas",
    logo: "../images/logo.svg",
  },
  Bulgaria: {
    chair: "Grisha Mateev",
    logo: "../images/logo.svg",
    firstCampaign: 2006,
  },
  Croatia: {
    chair: "Mirna Šitum",
    logo: "../images/logo.svg",
    firstCampaign: 2008,
  },
  Cyprus: {
    chair: "Paschalis Konstantinou",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  CzechRepublic: {
    chair: "Monika Arenbergerova",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  Denmark: {
    chair: "Suzanne Fabricius",
    logo: "../images/logo.svg",
    firstCampaign: 2011,
  },
  Germany: {
    chair: "Ralph von Kiedrowski",
    logo: "../images/logo.svg",
    firstCampaign: 2006,
  },
  England: {
    chair: "",
    logo: "../images/logo.svg",
    firstCampaign: null,
  },
  Estonia: {
    chair: "Pille Konno",
    logo: "../images/logo.svg",
    firstCampaign: 2011,
  },
  France: {
    chair: "",
    logo: "../images/logo.svg",
    firstCampaign: null,
  },
  Finland: {
    chair: "/",
    logo: "../images/logo.svg",
    firstCampaign: 2015,
  },
  Georgia: {
    chair: "Lali Mekokishvili",
    logo: "../images/logo.svg",
    firstCampaign: 2012,
  },
  Greece: {
    chair: "Alexander C. Katoulis",
    logo: "../images/logo.svg",
    firstCampaign: 2014,
  },
  Hungary: {
    chair: "Judith Oláh",
    logo: "../images/logo.svg",
    firstCampaign: 2009,
  },
  Ireland: {
    chair: "Michelle Murphy",
    logo: "../images/logo.svg",
    firstCampaign: 2009,
  },
  Italy: {
    chair: "Ketty Peris",
    logo: "../images/logo.svg",
    firstCampaign: 2010,
  },
  Kosovo: {
    chair: "Sidita Sopjani",
    logo: "../images/logo.svg",
    firstCampaign: 2022,
  },
  Latvia: {
    chair: "Raimond Karls",
    logo: "../images/logo.svg",
    firstCampaign: 2008,
  },
  Luxembourg: {
    chair: "Henning C. Dittmar",
    logo: "../images/logo.svg",
    firstCampaign: 2004,
  },
  Lithuania: {
    chair: "Matilda Bylaite",
    logo: "../images/logo.svg",
    firstCampaign: 2008,
  },
  Montenegro: {
    chair: "Ana Popovic",
    logo: "../images/logo.svg",
    firstCampaign: null,
  },
  NorthMacedonia: {
    chair: "Zorica Zafirovik",
    logo: "../images/logo.svg",
    firstCampaign: 2010,
  },
  Malta: {
    chair: "Lawrence Scerri",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  Netherlands: {
    chair: "",
    logo: "../images/logo.svg",
    firstCampaign: null,
  },
  Norway: {
    chair: "Katarina Zak Stangeland",
    logo: "../images/logo.svg",
    firstCampaign: 2005,
  },
  Poland: {
    chair: "Agnieszka Owczarczyk-Saczonek",
    logo: "../images/logo.svg",
    firstCampaign: 206,
  },
  Portugal: {
    chair: "Ricardo Vieira",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  Romania: {
    chair: "Alin Codrut Nicolescu",
    logo: "../images/logo.svg",
    firstCampaign: 2006,
  },
  Russia: {
    chair: "Nikolae Potekaev",
    logo: "../images/logo.svg",
    firstCampaign: 2007,
  },
  Serbia: {
    chair: "Tatjana Roš",
    logo: "../images/logo.svg",
    firstCampaign: 2008,
  },
  Slovakia: {
    chair: "",
    logo: "../images/logo.svg",
    firstCampaign: 2004,
  },
  Slovenia: {
    chair: "Igor Bartenjev",
    logo: "../images/logo.svg",
    firstCampaign: 2008,
  },
  Spain: {
    chair: "Eduardo Nagore",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  Switzerland: {
    chair: "Olivier Gaide, Philippa Golling",
    logo: "../images/logo.svg",
    firstCampaign: 2006,
  },
  Sweden: {
    chair: "Åsa Ingvar",
    logo: "../images/logo.svg",
    firstCampaign: 2000,
  },
  Turkey: {
    chair: "Bengu Nisa Akay",
    logo: "../images/logo.svg",
    firstCampaign: 2014,
  },
  Ukraine: {
    chair: "Olga Bogomolets",
    logo: "../images/logo.svg",
    firstCampaign: 2009,
  },
};

function updateCountryDetails() {
  const countrySelect = document.getElementById("country-select");
  const selectedCountry = countrySelect.value;

  const countryDetails = document.getElementById("country-details");

  // Get the data for the selected country
  const data = countryData[selectedCountry];

  // Clear previous content in the container
  countryDetails.innerHTML = "";

  // Create the chair detail
  const chairLabel = document.createElement("div");
  chairLabel.className = "country-label";
  chairLabel.textContent = "Chair:";

  const chairData = document.createElement("h3");
  chairData.className = "country-data";
  chairData.textContent = data.chair;

  // Create the logo element
  const logoElement = document.createElement("img");
  logoElement.className = "country-logo";
  logoElement.src = data.logo;

  // Create the first campaign detail
  const campaignLabel = document.createElement("div");
  campaignLabel.className = "country-label";
  campaignLabel.textContent = "First Campaign:";

  const campaignData = document.createElement("h3");
  campaignData.className = "country-data";
  campaignData.textContent = data.firstCampaign;

  // Append the elements to the country-details div
  countryDetails.appendChild(chairLabel);
  chairLabel.appendChild(chairData);
  countryDetails.appendChild(logoElement);
  countryDetails.appendChild(campaignLabel);
  campaignLabel.appendChild(campaignData);
}

updateCountryDetails();
