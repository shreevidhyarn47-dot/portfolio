"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificationService = exports.CertificationService = void 0;
const Certification_1 = require("../models/Certification");
class CertificationService {
    async getAllCertifications() {
        return Certification_1.Certification.find().sort({ createdAt: -1 });
    }
    async getCertificationById(id) {
        return Certification_1.Certification.findById(id);
    }
    async createCertification(data) {
        const cert = new Certification_1.Certification(data);
        return cert.save();
    }
    async updateCertification(id, data) {
        return Certification_1.Certification.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }
    async deleteCertification(id) {
        return Certification_1.Certification.findByIdAndDelete(id);
    }
}
exports.CertificationService = CertificationService;
exports.certificationService = new CertificationService();
