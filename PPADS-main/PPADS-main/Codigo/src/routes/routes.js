const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.js");

router.get("/quadra", controller.getQuadras);
router.get("/quadra/:id", controller.validarId, controller.getQuadraById);
router.post("/quadra", controller.validarQuadra, controller.postQuadra);
router.put("/quadra/:id", controller.validarId, controller.validarQuadra, controller.putQuadra);
router.delete("/quadra/:id", controller.validarId, controller.deleteQuadra);

router.get("/unidade", controller.getUnidades);
router.get("/unidade/:id", controller.validarId, controller.getUnidadeById);
router.post("/unidade", controller.validarUnidade, controller.postUnidade);
router.put("/unidade/:id", controller.validarId, controller.validarUnidade, controller.putUnidade);
router.delete("/unidade/:id", controller.validarId, controller.deleteUnidade);

module.exports = router;