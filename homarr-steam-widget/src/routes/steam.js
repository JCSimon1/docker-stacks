import { Router } from "express";

import steamClient from "../core/steam/steamClient.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const player = await steamClient.getPlayerSummary();

    res.json({
      success: true,
      data: player,
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