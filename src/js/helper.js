import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13`
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    const data = await response.json();
    // console.log(response, data);

    if (!response.ok) {
      throw new Error(`${data.status}: ${data.message}`);
    }
    return data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}

export async function postJSON(url, recipe) {
  try {
    const response = await Promise.race([
      fetch(url, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(recipe),
      }),
      timeout(TIMEOUT_SECONDS),
    ]);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13`
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    const data = await response.json();
    // console.log(response, data);

    if (!response.ok) {
      throw new Error(`${data.status}: ${data.message}`);
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function AJAX(url, info = undefined) {
  try {
    const fetchData = info
      ? fetch(url, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`,
          },
          body: JSON.stringify(info),
        })
      : fetch(url);
    const response = await Promise.race([fetchData, timeout(TIMEOUT_SECONDS)]);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13`
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    const data = await response.json();
    // console.log(response, data);

    if (!response.ok) {
      throw new Error(`${data.status}: ${data.message}`);
    }
    return data;
  } catch (error) {
    throw error;
  }
}
