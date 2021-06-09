const express = require('express');
const router = express.Router();
const WorkshopProposalsController = require('../controllers/workshopProposals-controller');

router.get('/',WorkshopProposalsController.ViewWorkshopProposal);


module.exports=router;