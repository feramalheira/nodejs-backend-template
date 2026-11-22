import type { Request, Response } from "express";
import HelloService from "../services/Hello.service.js";

export default class HelloController {
    _service: HelloService;
    constructor(service: HelloService = new HelloService()) {
        this._service = service
    }

    async hello_world(_req: Request, res: Response) {
        const return_str = await this._service.create_hello_world_string();
    }

    async hello_name(req: Request, res: Response) {
        const params = req.params;
        if (!params?.name) {
            // throw error
        }
    }
}