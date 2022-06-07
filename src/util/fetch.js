import { JWT_COOKIE_KEY } from "constants";
import { getCookie } from "./cookie";

const fetchServer =
  ({ method }) =>
  async ({
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie(JWT_COOKIE_KEY)}`,
    },
    url,
    body,
  }) => {
    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return response;
  };

export const getBaseServerProductList = fetchServer({ method: "GET" });
export const getBaseServerProductItem = fetchServer({ method: "GET" });

export const getBaseServerCartList = fetchServer({ method: "GET" });
export const postBaseServerCartItem = fetchServer({ method: "POST" });
export const deleteBaseServerCartItem = fetchServer({ method: "DELETE" });
export const patchBaseServerCartItem = fetchServer({ method: "PATCH" });

export const registerBaseServer = fetchServer({ method: "POST" });
export const loginBaseServer = fetchServer({ method: "POST" });
export const getUserBaseServer = fetchServer({ method: "GET" });
export const deleteUserBaseServer = fetchServer({ method: "POST" });
export const updateUserBaseServer = fetchServer({ method: "PUT" });
