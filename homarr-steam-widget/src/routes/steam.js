import { Router } from "express";

import steamService from "../core/steam/steamService.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const { profile, cached } = await steamService.getProfile();

    res.json({
      success: true,
      meta: {
        cached,
      },
      data: profile,
    });
  } catch (err) {
    next(err);
  }
});

export default router;