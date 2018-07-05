var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    createBy: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', productSchema);