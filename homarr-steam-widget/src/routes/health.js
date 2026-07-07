import { Router } from "express";

const router = Router();

router.get("/", async (_req, res, next) => {

    res.json({

        status: "ok",

        version: "0.1.0",

        uptime: process.uptime()

    });

});

export default router;