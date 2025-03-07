import { NextFunction, Request,Response } from "express";
import { JWT_SECRET } from "./config";
export function middleware( req:Request, res:Response, next : NextFunction) {
    const token = req.headers["authorization"] ?? "";
    const decode = JWT_SECRET.verify(token, JWT_SECRET)

    if()
}