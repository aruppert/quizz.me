export default async function getRandomQuestion(privateCode) {
  return fetch(`/api/questions/random?privateCode=${privateCode}`, {
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
