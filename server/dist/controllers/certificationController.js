"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificationController = exports.CertificationController = void 0;
const certificationService_1 = require("../services/certificationService");
const errorHandler_1 = require("../middleware/errorHandler");
class CertificationController {
    async getCertifications(_req, res, next) {
        try {
            const certs = await certificationService_1.certificationService.getAllCertifications();
            res.status(200).json({
                success: true,
                count: certs.length,
                data: certs
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getCertificationById(req, res, next) {
        try {
            const { id } = req.params;
            const cert = await certificationService_1.certificationService.getCertificationById(id);
            if (!cert) {
                throw new errorHandler_1.ApiError(404, `Certification not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                data: cert
            });
        }
        catch (error) {
            next(error);
        }
    }
    async createCertification(req, res, next) {
        try {
            const { title, issuingOrganization, issueDate } = req.body;
            if (!title || !issuingOrganization || !issueDate) {
                throw new errorHandler_1.ApiError(400, 'Please provide title, issuingOrganization, and issueDate');
            }
            const cert = await certificationService_1.certificationService.createCertification(req.body);
            res.status(201).json({
                success: true,
                message: 'Certification created successfully',
                data: cert
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateCertification(req, res, next) {
        try {
            const { id } = req.params;
            const cert = await certificationService_1.certificationService.updateCertification(id, req.body);
            if (!cert) {
                throw new errorHandler_1.ApiError(404, `Certification not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                message: 'Certification updated successfully',
                data: cert
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteCertification(req, res, next) {
        try {
            const { id } = req.params;
            const cert = await certificationService_1.certificationService.deleteCertification(id);
            if (!cert) {
                throw new errorHandler_1.ApiError(404, `Certification not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                message: 'Certification deleted successfully'
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CertificationController = CertificationController;
exports.certificationController = new CertificationController();
