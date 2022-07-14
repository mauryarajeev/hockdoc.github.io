const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*Creating model for hospital Database using mongoose schema.*/

const hospitalSchema = new Schema({
    googleId:String,
    email:String,
    name:{ type:String ,uppercase:true},
    address:{ type:String, default:"update your address" , uppercase:true},
    contact1:{ type:String, default:"0000000000"},
    contact2:{ type:String, default:"0000000000"},
    facility:{type:Array, default: ["NO","NO","NO","NO","NO"]},
    bedavail1:{type:Array, default: [0,0,0]},
    bedavail2:{type:Array, default: [0,0,0]},
    docavail:{type:Array, default: ["NO","NO","NO","NO","NO"]},
    bloodavail1:{type:Array, default: [0,0,0,0]},
    bloodavail2:{type:Array, default: [0,0,0,0]}
});

const Hospital = mongoose.model('hospital',hospitalSchema);

module.exports = Hospital;
