//Implement your middleware (auth,authorization...)

const isAuthentificated = (req, res, next) => {
   console.log("Implement isAuthentificated middleware...");
   next();
};

module.exports = {isAuthentificated}