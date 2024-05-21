
import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.hx5mkzf.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
};

export default Connection;