const authService = require("../services/auth.service");

const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);

        return res.status(201).json(result);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });

    }
};

module.exports = {
    register
};