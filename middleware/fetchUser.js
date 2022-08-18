const jwt = require("jsonwebtoken");

const fetchUser = (handler) => async (req, res) => {
  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({ error: "Please login to continue" });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Please login to continue" });
  }
};

module.exports = fetchUser;
