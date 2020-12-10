const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    
        listingId: String,
        artist: String,
        title: String,
        label:String,
        catno:String,
        format:String,
        releaseId:String,
        status:String,
        price: Number,
        listed:Date,
        comments:String,
        mediaCondition:String,
        sleeveCondition:String,
        acceptOffer:String,
        externalId:String,
        weight:String,
        formatQuantity:String,
        flatShipping:String,
        location: String,
        categories: [  {type: String, enum: ['rock', 'pop'] } ],
        favoritedBy:  [{type: Schema.Types.ObjectId, ref: "User" }],
        image:String
    
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Record = mongoose.model('Record', recordSchema);

module.exports = Record;