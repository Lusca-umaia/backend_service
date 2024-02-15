import { Router } from "express";

const router = Router()

import { partyController } from "../controllers/PartyController.js";

router.route("/parties").get((req, res) => partyController.getAll(req, res))
router.route("/parties").post((req, res) => partyController.create(req, res))
router.route("/parties/:id").get((req, res) => partyController.get(req, res))
router.route("/parties/:id").delete((req, res) => partyController.delete(req, res))
router.route("/parties/:id").put((req, res) => partyController.update(req, res))

export default router