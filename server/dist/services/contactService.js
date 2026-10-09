"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = exports.ContactService = void 0;
const ContactMessage_1 = require("../models/ContactMessage");
class ContactService {
    async saveMessage(data) {
        const contactMessage = new ContactMessage_1.ContactMessage(data);
        return contactMessage.save();
    }
    async getAllMessages() {
        return ContactMessage_1.ContactMessage.find().sort({ createdAt: -1 });
    }
    async getMessageById(id) {
        return ContactMessage_1.ContactMessage.findById(id);
    }
    async deleteMessage(id) {
        return ContactMessage_1.ContactMessage.findByIdAndDelete(id);
    }
}
exports.ContactService = ContactService;
exports.contactService = new ContactService();
