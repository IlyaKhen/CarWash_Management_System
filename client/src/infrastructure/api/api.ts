const URL = "http://localhost:3000/";

const get = async (path: string) => {
  const response = await fetch(`${URL}/${path}`);
  return response.json();
};

const post = async (path: string, data: any) => {
  const response = await fetch(`${URL}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const put = async (path: string, data: any) => {
  const response = await fetch(`${URL}/${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const remove = async (path: string) => {
  const response = await fetch(`${URL}/${path}`, {
    method: "DELETE",
  });
  return response.json();
};

export const api = {
  get,
  post,
  put,
  remove,
};
