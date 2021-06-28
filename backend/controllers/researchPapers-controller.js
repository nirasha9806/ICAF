const {Researcher} = require ('../models/researcher-model');

const ViewResearchPaper = async(req,res,next)=>{

    //get method to fetch data from researchers collection
    console.log('Get research paper details');

    await Researcher.find({})
    .exec(function(err, researchers){
        if(err){
            console.log('Error retrieving')
        }else{
            console.log(researchers);
            res.json(researchers);
        }
    });
}


exports.ViewResearchPaper=ViewResearchPaper;
