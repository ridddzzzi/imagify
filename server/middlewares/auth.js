import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({
      success: false,
      message: "Unauthorized Access! Please Login!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.json({
        success: false,
        message: "Unauthorized Access, Please Try Again!",
      });
    }

    req.userId = decoded.id; // ✅ attach userId to req, NOT to req.body
    next(); // ✅ move controller execution forward
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
