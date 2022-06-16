import { json } from 'body-parser';
import Lead from '../models/Lead';

const salesPeople = ['Suzette Chaparro', 'Angie Warner'];

const getNextLeadAssignment = async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        const currentLead = leads[0];

        const lastSalesPerson = currentLead.salesPerson;
        let currentIndex = salesPeople.indexOf(lastSalesPerson);
        const nextSalesPerson = salesPeople[++currentIndex % salesPeople.length];

        res.json(nextSalesPerson);
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            error: true,
            message: err.message
        });
    }
}

const createLead = async (req, res) => {
    try {
        const lead = new Lead(req.body);
        lead.save();

        res.json(lead);
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            error: true,
            message: err.message
        });
    }
}

const updateContactId = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const leadId = req.params.leadId;

        const lead = await Lead.findByIdAndUpdate(leadId, {
            contactId,
            contactUrl: `https://assessments247.activehosted.com/app/contacts/${contactId}`
        }, { new: true });

        return res.json({ lead });
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            error: true,
            message: err.message
        });
    }
}

export default {
    getNextLeadAssignment,
    createLead,
    updateContactId
};
