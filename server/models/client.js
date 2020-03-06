const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String },
  store: { type: String },
  chips: [{
    type: Schema.Types.ObjectId,
    ref: 'chip'
  }]
});

ClientSchema.statics.addChip = function(id, chipNumber,phoneNumber, provider, technician, date) {
  const Chip = mongoose.model('chip');

  return this.findById(id)
    .then(client => {
      const chip = new Chip({ chipNumber, client, phoneNumber, provider, technician, date})
      client.chips.push(chip)
      return Promise.all([chip.save(), client.save()])
        .then(([chip, client]) => client);
    });
}

ClientSchema.statics.findChips = function(id) {
  return this.findById(id)
    .populate('chips')
    .then(client => client.chips);
}

mongoose.model('client', ClientSchema);
