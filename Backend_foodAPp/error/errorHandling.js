class errorHandler extends Error {
constructor(message , statusCode) {
super(message);
this.statusCode = statusCode;
}
}

export const middlewareError=(err,req,res,next)=>{
err.statusCode = err.statusCode || 500;
err.message = err.message || 'Internal Server Error';
res.status(err.statusCode).json({
  success: false,
  error: err.message,
})}


export default errorHandler;