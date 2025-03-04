let baseUrl = import.meta.env.VITE_BASE_URL;

export async function signup(values) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (values) {
    requestOptions.body = JSON.stringify(values);
  }
  try {
    const response = await fetch(
      `${`${baseUrl}/auth/register`}`,
      requestOptions
    );
    const body = await response.json();
    if (response.status > 300) {
      return {
        success: false,
        message: body.message,
        alreadyUsed: body?.alreadyUsed,
      };
    } else {
      return {
        success: true,
        message: body.message,
        token: body.token,
        mailedToken: body.mailedToken,
      };
    }
  } catch (e) {
    return {
      success: false,
      message: e,
    };
  }
}

export async function resendToken() {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `${`${baseUrl}/account/resendToken`}`,
      requestOptions
    );
    const res = await response.json();
    return res;
  } catch (e) {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}

export async function requestAPI(url) {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${`${baseUrl}/api/${url}`}`, requestOptions);
    if (response.status > 399) {
      const body = await response.json();
      return {
        success: false,
        message: body.message,
      };
    } else {
      const json = await response.json();
      return json;
    }
  } catch (e) {
    return {
      success: false,
      message: "Something went wrong. Error : " + e,
    };
  }
}
