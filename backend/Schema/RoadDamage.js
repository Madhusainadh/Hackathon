const { Schema, model, default: mongoose } = require("mongoose");
const RoadDamageSchema = new Schema(
  {
    Type_of_Damage:{type:String,require:true},
   Damage_level_out_of_10: { type: Number,require:true },
   Full_Address_with_landmark:{type:String,require:true},
   Reviewing:{type:Boolean,default:false},
   Work_in_Progress:{type:Boolean,default:false},
   Work_Done:{type:Boolean,default:false},
  },
  {
    versionKey: false,
  }
);
const RoadDamageModel = model("RoadDamage", RoadDamageSchema);
module.exports = RoadDamageModel;
