function fetchData(method, url, data) {
  var bodyData = JSON.stringify(data);
  return fetch(url, {
    body: method === "get" ? undefined : bodyData,
    cache: "no-cache",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJya3QwMDEiLCJ1aWQiOjEsImlhdCI6MTU4NjkzOTY2OCwiZXhwIjoxNTg2OTQ1NjY4fQ.p-tXQF2XrP2SUm4AnPqxKWsBDbCFkNltavsm6LLVQ10"
    },
    method: method
    //mode:'no-cors'
  });
}

function getAuth() {
  fetchData("get", "/api/auth")
    .then(response => {
      console.log(`get auth response =>`, JSON.stringify(response));
      if (response.ok) return response.json();
      else alert(response.statusText);
    })
    .then(responseJson => {
      console.log(`get auth response json =>`, responseJson);
    })
    .catch(error => {
      alert(error.message);
    });
}
