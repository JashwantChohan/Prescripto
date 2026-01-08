import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';

//  api for adding doctor

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile) {
            return res.status(400).json({ message: "Missing details" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" })
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;


    } catch (error) {

    }
}

export { addDoctor };

