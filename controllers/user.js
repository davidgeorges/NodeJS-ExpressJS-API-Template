const getUser = async (req, res) => {
    console.log("Implement the code...");
    res.status(200).json({"Response" :"userId --> "+req.params.id});
};

module.exports = { getUser }