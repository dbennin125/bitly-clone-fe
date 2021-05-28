// const API_URL = 'http://localhost:5050/api/v1/shrink';

export const createNewUrl = url => {
  return fetch(`${process.env.API_URL}/api/v1/shrink`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(({ id, longUrl }) => ({
      newUrl: `${process.env.API_URL}/${id}`,
      longUrl 
    }));
};

export const getUrlList = () => {
  return fetch(`${process.env.API_URL}/api/v1/shrink`)
    .then(res => res.json())
    .then(jsonArr => jsonArr.map(({ id, longUrl }) => ({
      newUrl: `${process.env.API_URL}/${id}`,
      longUrl
    }))
    );
};
