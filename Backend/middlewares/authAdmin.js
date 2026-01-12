import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {

    try {

        const { atoken } = req.headers;
        if (!atoken) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET_KEY);

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        console.log("admin detail", adminEmail, adminPassword)

        if (token_decoded === adminEmail + adminPassword) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error.message });
    }

}

export default authAdmin;