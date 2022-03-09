const getCookieValue = (name) => {
  const cookies = document.cookie;
  const allCookies = cookies.split("; ");
  const findCookie = allCookies.find((cookie) => {
    cookie.includes(name);
  });
  if (findCookie) {
    ("county=BD");
    const cookieNameValue = findCookie.split("=");
    return cookieNameValue[1];
  }
};
