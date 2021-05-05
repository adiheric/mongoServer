import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema ({
firstName: String,
lastName: String,
yearOfBirth: Number,
adress: String
});

export default mongoose.model ("Student",StudentSchema);
