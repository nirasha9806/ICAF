const {WorkshopProposal} = require ('../models/workshopProposal-model');

const ViewWorkshopProposal = async(req,res,next)=>{

    //get method to fetch data from workshopProposals collection
    console.log('Get workshopProposals paper details');
    
    await WorkshopProposal.find({})
    .exec(function(err, workshopproposals){
        if(err){
            console.log('Error retrieving')
        }else{
            res.json(workshopproposals);
        }
    });

}

exports.ViewWorkshopProposal=ViewWorkshopProposal;
