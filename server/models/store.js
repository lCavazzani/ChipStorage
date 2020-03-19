const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChipSchema = new Schema({
    chipNumber: { type: Number},
    phoneNumber: { type: Number},
    provider: { type: String},
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
      },
      technician: {type: String},
      date: {type: String}
});

mongoose.model('chip', ChipSchema);
