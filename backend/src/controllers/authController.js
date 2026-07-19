const registerUser = (req, res) => {

    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Validation successful",
        data: {
            name,
            email,
            phone
        }
    });

};

module.exports = {
    registerUser,
};