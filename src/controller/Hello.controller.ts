import type { Request, Response } from "express";
import HelloService from "../services/Hello.service.ts";

export default class HelloController {
    _service: HelloService;
    constructor(service: HelloService = new HelloService()) {
        this._service = service
    }

    hello_world = async (_req: Request, res: Response) => {
        const return_str = await this._service.create_hello_world_string();
        res.status(200).json({ message: return_str });
    }

    hello_name = async (req: Request, res: Response) => {
        const params = req.params;
        if (!params?.name) {
            return res.status(400).json({ message: "Missing name parameter" });
        }
        const return_str = await this._service.create_hello_name_string(params.name);
        res.status(200).json({ message: return_str });
    }
}