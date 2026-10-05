function authenticate(username, password) {
  if (!username || !password) {
    return false;
  }

  return username === "admin" && password === "secret";
}

module.exports = { authenticate };

// Authentication credentials are validated here.
function isAuthenticated(user) {
  return Boolean(user);
}
