const api = async (method, path, body) => {
  body = body ? JSON.stringify(body) : undefined;

  const response = await fetch(`http://localhost:7000${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (response.status >= 400 && response.status < 700) {
    throw Error(await response.text());
  }

  console.log(response.body);

  if (!response.body) return;
  return await response.json();
};

// const api = async (method, path, body) => {
//   const xmhttpReq = new XMLHttpRequest();
//   xmhttpReq.open(method, `http://localhost:7000${path}`, false);
//   xmhttpReq.setRequestHeader("Content-Type", "application/json");

//   xmhttpReq.send(body ? JSON.stringify(body) : undefined);

//   return xmhttpReq.response;
// };
