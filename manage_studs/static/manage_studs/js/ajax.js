async function makeRequest(url, method, body) {
  let headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  };
  let response;
  if (method == "POST") {
    headers["X-CSRFToken"] = document.querySelector("input[name='csrfmiddlewaretoken']").value;
    response = await fetch(url, {
      method: method,
      headers: headers,
      body: body
    });
  } else {
    response = await fetch(url, {
      method: method,
      headers: headers
    });
  }
  return await response.json();
}
