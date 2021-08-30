const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
   
    const decodedToken = jwt.verify(
      token,
      "MON_TOK3N_DID3NTIFICATION_3ST_INTROUVABL3"
    );
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      send.status(403).json({ error: "403: unauthorized request." });
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: "Token invalid",
    });
  }
};
