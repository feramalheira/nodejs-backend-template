import { Router } from "express";
import HelloController from "../controller/Hello.controller.ts";

const router: Router = Router();

const controller = new HelloController();

router.get("/hello/world", controller.hello_world)

router.get("/hello/:name", controller.hello_name)
