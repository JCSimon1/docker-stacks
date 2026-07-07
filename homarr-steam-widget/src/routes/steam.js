import { Router } from "express";

import steamService from "../core/steam/steamService.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const profile = await steamService.getProfile();

    res.json({
      success: true,
      data: profile,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: {
        message: err.message,
      },
    });
  }
});

export default router;