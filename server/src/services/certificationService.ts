import { Certification, ICertification } from '../models/Certification';

export class CertificationService {
  async getAllCertifications(): Promise<ICertification[]> {
    return Certification.find().sort({ createdAt: -1 });
  }

  async getCertificationById(id: string): Promise<ICertification | null> {
    return Certification.findById(id);
  }

  async createCertification(data: Partial<ICertification>): Promise<ICertification> {
    const cert = new Certification(data);
    return cert.save();
  }

  async updateCertification(id: string, data: Partial<ICertification>): Promise<ICertification | null> {
    return Certification.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async deleteCertification(id: string): Promise<ICertification | null> {
    return Certification.findByIdAndDelete(id);
  }
}

export const certificationService = new CertificationService();
