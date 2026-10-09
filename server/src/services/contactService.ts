import { ContactMessage, IContactMessage } from '../models/ContactMessage';

export class ContactService {
  async saveMessage(data: Partial<IContactMessage>): Promise<IContactMessage> {
    const contactMessage = new ContactMessage(data);
    return contactMessage.save();
  }

  async getAllMessages(): Promise<IContactMessage[]> {
    return ContactMessage.find().sort({ createdAt: -1 });
  }

  async getMessageById(id: string): Promise<IContactMessage | null> {
    return ContactMessage.findById(id);
  }

  async deleteMessage(id: string): Promise<IContactMessage | null> {
    return ContactMessage.findByIdAndDelete(id);
  }
}

export const contactService = new ContactService();
