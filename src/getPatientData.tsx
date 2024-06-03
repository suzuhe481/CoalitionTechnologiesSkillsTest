// Retrieves the patient data.
const getPatientData = () => {
  const URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
  const USERNAME = "coalition";
  const PWD = "skills-test";

  const headers = new Headers();

  headers.set("Authorization", "Basic " + btoa(USERNAME + ":" + PWD));

  return fetch(URL, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

export default getPatientData;
