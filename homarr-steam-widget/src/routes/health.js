import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {

    res.json({

        status: "ok",

        version: "0.1.0",

        uptime: process.uptime()

    });

});

export default router;