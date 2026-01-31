import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.json({
                success: false,
                message: 'Not authorized Login required'
            });
        }

        const token = authHeader.split(' ')[1];

        const token_decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);


        // const { token } = req.headers

        // if (!token) {
        //     return res.json({
        //         success: false,
        //         message: 'Not authorized Login required'
        //     });
        // }
        // const token_decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log(token_decoded, 'token decoded')
        // req.body.userId = token_decoded.id;

        req.user = { id: token_decoded.id };
        next();

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }

}

export default authUser;