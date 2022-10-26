const jwt = require("jsonwebtoken");

const fetchAdmin = (handler) => async (req, res) => {
  try {
    const token = req.cookies.adminToken;
    if (!token) {
      return res.status(401).json({ error: "Please login to continue" });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = data.admin;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Please login to continue" });
  }
};

module.exports = fetchAdmin;
