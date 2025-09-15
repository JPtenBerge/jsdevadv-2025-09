const englishSpeakingCountries = new Set([
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Ireland",
  "New Zealand",
  "South Africa",
]);

const europeanCountries = new Set([
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Iceland",
  "Ireland",
  "Italy",
  "Netherlands",
  "United Kingdom",
]);

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

const englishSpeakingEuropeanCountries = intersection(
  englishSpeakingCountries,
  europeanCountries
);
console.log(englishSpeakingEuropeanCountries.size === 2);
const englishSpeakingOrEuropeanCountries = union(
  englishSpeakingCountries,
  europeanCountries
);
console.log(englishSpeakingOrEuropeanCountries.size === 22);
