import { Request, Response, NextFunction } from "express";
import { validationResult } from 'express-validator';

export const handleValidation = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(403).json({ error: error.array() });
    }
    else
        next();
}