export const refreshAPI = (_url) => {
  return fetch(_url)
    .then(response => {
      debugger
      return response.json()
        .then(res => res);
    })
    .catch(error => {
      throw error;
    })
};
