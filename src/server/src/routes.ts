import { Router } from "express";

// const WhoisController = require("./app/controllers/WhoisController");
import NftController from "./controllers/NftController";

const router = Router();

// Routes to Whoiss service
// router.get("/Whois", WhoisController.index);

// Routes to Nft Metadata service
router.get("/nft/metadata", NftController.getMetadata);

export default router;
