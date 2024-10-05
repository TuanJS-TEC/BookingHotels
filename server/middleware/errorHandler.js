const errorHandler = (error, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 550;
    return res.status(statusCode).json({message: error.message});
};

module.export = {
    errorHandler,
};