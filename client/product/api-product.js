const create = async (params, credentials, product) => {
  try {
    let response = await fetch("/api/products/by/" + params.sellerId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: product,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const listBySeller = async (params, signal) => {
  try {
    let response = await fetch("/api/products/by/" + params.sellerId, {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, listBySeller };
