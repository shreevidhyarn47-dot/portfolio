"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = exports.ContactController = void 0;
const contactService_1 = require("../services/contactService");
const errorHandler_1 = require("../middleware/errorHandler");
class ContactController {
    async submitContactMessage(req, res, next) {
        try {
            const { name, email, subject, message } = req.body;
            if (!name || !email || !subject || !message) {
                throw new errorHandler_1.ApiError(400, 'All fields are required: name, email, subject, message');
            }
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
                throw new errorHandler_1.ApiError(400, 'Please provide a valid email address');
            }
            if (name.trim().length < 2) {
                throw new errorHandler_1.ApiError(400, 'Name must be at least 2 characters long');
            }
            if (subject.trim().length < 3) {
                throw new errorHandler_1.ApiError(400, 'Subject must be at least 3 characters long');
            }
            if (message.trim().length < 10) {
                throw new errorHandler_1.ApiError(400, 'Message must be at least 10 characters long');
            }
            const savedMessage = await contactService_1.contactService.saveMessage({
                name: name.trim(),
                email: email.trim().toLowerCase(),
                subject: subject.trim(),
                message: message.trim()
            });
            res.status(201).json({
                success: true,
                message: 'Thank you for reaching out! Your message has been sent successfully.',
                data: {
                    id: savedMessage._id,
                    name: savedMessage.name,
                    email: savedMessage.email,
                    createdAt: savedMessage.createdAt
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getContactMessages(_req, res, next) {
        try {
            const messages = await contactService_1.contactService.getAllMessages();
            res.status(200).json({
                success: true,
                count: messages.length,
                data: messages
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteContactMessage(req, res, next) {
        try {
            const deleted = await contactService_1.contactService.deleteMessage(req.params.id);
            if (!deleted) {
                throw new errorHandler_1.ApiError(404, 'Contact message not found');
            }
            res.status(200).json({
                success: true,
                message: 'Message deleted successfully'
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ContactController = ContactController;
exports.contactController = new ContactController();
