import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title:{type:String,required:true},
    description:{type:String,default:""},
    status:{type:String,default:"Pending"},
    priority:{type:String,default:"Medium"},
    dueDate:{type:String,default:""}
  },
  {
    timestamps:true,
    toJSON:{
      virtuals:true,
      versionKey:false,
      transform:(doc,ret) =>{
        delete ret._id
      },
    },
  }
 );

const Task = mongoose.model("Task", taskSchema);
export default Task;