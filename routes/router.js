import { Router } from "express";

import servicesRouter from "./services.js";
import partyRouter from "./parties.js"

const router = Router()

router.use("/", servicesRouter)
router.use("/", partyRouter)

export default router
