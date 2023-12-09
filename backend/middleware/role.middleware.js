const secretKey = process.env.JWT_SECRET_KEY;

console.log(secretKey);

// Middleware to verify JWT token and user role
export const authenticateUserRole = (requiredRole) => {
  return (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access denied. Token not provided.' });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      const userRole = decoded.role;

      if (userRole !== requiredRole) {
        return res
          .status(403)
          .json({ message: 'Access denied. Insufficient permissions.' });
      }

      req.userRole = userRole;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };
};
