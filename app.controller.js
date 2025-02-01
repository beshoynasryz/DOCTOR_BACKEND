import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/dbConnection.js"
import adminRouter from "./modules/admin/admin.controller.js"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"
function bootStrap(app, express) {
    connectDB()
    connectCloudinary()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    //Routes 
    app.use('/api/admin',adminRouter)

    app.use(errorHandler)
    app.use('/',(req,res,next)=>{
        res.send('Welcome to the Doctor app');
    })

    app.use('*', (req , res)=>{
       res.status(404).json({message: `Route not found ${req.originalUrl}`});
    })
   
}

export default bootStrap;
