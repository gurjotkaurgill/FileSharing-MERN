import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URI = ``;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true} );
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Error while connecting to the database ", error.message);
    }
}
export default DBConnection;