const userSchema= new mongoose.schema({
  username:{
      type:String,
      require:true,
  },
  email:{
      type:String,
      require:true,
  },
  phone:{
      type:String,
      require:true, 
  },
  password:{
      type:String,
      require:true,
  },
  isAdmine:{
      type:Boolean,
      default:false,
  },
});
// comparePassword
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };