import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { NextFunction, Request, Response } from "express";

const loginUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const payload = req.body;

        const loginResult = await authService.loginUser(payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "User logged in successfully!",
            data: loginResult,
        });
    },
);

export const authController = {
    loginUser,
};
