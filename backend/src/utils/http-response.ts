import { Response } from "express";

export const HttpResponse = {
    ok: (res : Response , message : String , payload : Object) =>
        res.status(200).json({
            success : true,
            status_code : "200",
            message,
            payload,
        }
    ),

    created: (res : Response , message : String , payload : Object) =>
        res.status(201).json({
            success : true,
            status_code : "201",
            message,
            payload,
        }
    ),

    badRequest: (res : Response , message : String , error : Object) =>
        res.status(400).json({
            success : false,
            status_code : "400",
            message,
            error,
        }
    ),

    serverError:(res : Response , message : String , error : Object) =>
        res.status(500).json({
            success : false,
            status_code : "500",
            message,
            error,
        }
    ),
};