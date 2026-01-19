import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {

    try {
        const { atoken } = req.headers;
        if (!atoken) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET_KEY);

        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized Login again" });
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error.message });
    }

}

export default authAdmin;