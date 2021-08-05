// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

export default function api () {
    return fetch(`http://localhost:4000/flights`)
    .then((res) => res.json())
    .then((response) => {
      if (!Array.isArray(response) && Object.keys(response).length === 0) {
        throw new Error('Empty Response');
      }

      return response;
    });
};