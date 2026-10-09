import { Request, Response, NextFunction } from 'express';
import { certificationService } from '../services/certificationService';
import { ApiError } from '../middleware/errorHandler';

export class CertificationController {
  async getCertifications(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const certs = await certificationService.getAllCertifications();
      res.status(200).json({
        success: true,
        count: certs.length,
        data: certs
      });
    } catch (error) {
      next(error);
    }
  }

  async getCertificationById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const cert = await certificationService.getCertificationById(id);
      if (!cert) {
        throw new ApiError(404, `Certification not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        data: cert
      });
    } catch (error) {
      next(error);
    }
  }

  async createCertification(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, issuingOrganization, issueDate } = req.body;
      if (!title || !issuingOrganization || !issueDate) {
        throw new ApiError(400, 'Please provide title, issuingOrganization, and issueDate');
      }
      const cert = await certificationService.createCertification(req.body);
      res.status(201).json({
        success: true,
        message: 'Certification created successfully',
        data: cert
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCertification(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const cert = await certificationService.updateCertification(id, req.body);
      if (!cert) {
        throw new ApiError(404, `Certification not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        message: 'Certification updated successfully',
        data: cert
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCertification(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const cert = await certificationService.deleteCertification(id);
      if (!cert) {
        throw new ApiError(404, `Certification not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        message: 'Certification deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export const certificationController = new CertificationController();
