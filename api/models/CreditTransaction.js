const mongoose = require('mongoose');

const creditTransactionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        type: {
            type: String,
            enum: ['purchase', 'assessment_use', 'admin_adjustment'],
            required: true,
        },
        credits: {
            type: Number,
            required: true,
            min: 0,
        },
        assessmentSession: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AssessmentSession',
        },
        paymentReference: {
            type: String,
        },
        note: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('CreditTransaction', creditTransactionSchema);