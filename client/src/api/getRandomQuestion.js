export default async function getRandomQuestion() {
  return fetch(`/api/questions/random`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}
