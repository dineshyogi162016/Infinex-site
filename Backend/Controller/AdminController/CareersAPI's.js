const CareerSchema = require("../../Modals/CareerSchema")
const CareersData = require("../../Modals/CareersData")

const AddJob = async(req, res) => {
    try {
        const {name, department, location, jobType, jobLevel, experience, openings, postedDate, applyEndDate, description, responsibilities, requirements, benefits, link, show} = req.body;

        const AllJobs = await CareerSchema.find()
        const JobExist = AllJobs.find(e => e.name === name )

        if(JobExist){
            res.json({
                success : true,
                status : 201,
                message : "Job already Created"
            })
        }else{
            const jobInstance = {
                name : name,
                department : department,
                location : location,
                jobType : jobType,
                jobLevel : jobLevel,
                openings : openings,
                experience : experience,
                postedDate : new Date(),
                applyEndDate : applyEndDate,
                description : description,
                responsibilities : responsibilities,
                requirements : requirements,
                benefits : benefits,
                link : link,
                show : show
            } 

            const preJob =new CareerSchema(jobInstance);
            const response = await preJob.save();

            if(response){
                res.json({
                    success : true,
                    status : 200,
                    message : "Job Created Successfully"
                })
            }
        }


    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error : error
        })
    }
}

const GetJobs = async (req, res) => {
    try {
        const formattedCareers = await CareerSchema.find();

        const response = formattedCareers.map(career => ({
            ...career._doc,
            postedDate: career.postedDate
                ? career.postedDate.toISOString().split("T")[0]
                : null,
            applyEndDate: career.applyEndDate
                ? career.applyEndDate.toISOString().split("T")[0]
                : null,
        }));
        
        if(response){
            res.json({
                success : true,
                message : "Data get successfully",
                status : 200,
                response : response
            })
        }else{
            res.json({
                success : false,
                message : "Job not found",
                status : 404
            })
        }
    } catch (error) {
        res.json({
            success : false,
            message : "Something went wrong",
            status : 500
        })
    }
}

const UpdateJob = async (req, res) => {
    try {
        const {name, department, location, jobType, jobLevel, experience, openings, applyEndDate, description, responsibilities, requirements, benefits, link, show} = req.body;
        let {postedDate} = req.body
        
        const AllJobs = await CareerSchema.find()
        const JobExist = AllJobs.find(e => e.name === name )

        const Job = await CareerSchema.findById(req.params)

        const UpdateFunction = async() =>{
            if(postedDate === null){
                postedDate = new Date()
            }
            const jobInstance = {
                name : name,
                department : department,
                location : location,
                jobType : jobType,
                jobLevel : jobLevel,
                openings : openings,
                experience : experience,
                postedDate : postedDate,
                applyEndDate : applyEndDate,
                description : description,
                responsibilities : responsibilities,
                requirements : requirements,
                benefits : benefits,
                link : link,
                show : show
            } 

            try {
                const response = await CareerSchema.updateOne(
                    req.params,
                    {
                        $set : jobInstance
                    }
                )

                console.log("update response : ", response)

                if(response.modifiedCount === 1){
                    res.json({
                        message : "update success",
                        success : true,
                        status : 200
                    })
                }else{
                    res.json({
                        message: "Job not found",
                        success : false,
                        status : 404
                    })
                }
                
                
            } catch (error) {
                res.json({
                    success : false,
                    status : 500,
                    message : "Something went wrong",
                    error : error
                })
            }
        }

        if(JobExist){
            if(Job.name === name){
                UpdateFunction()
            }else{
                res.json({
                    success : true,
                    status : 201,
                    message : "Job already resistered"
                })
            }
        }else{
            UpdateFunction()
        }

    }catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error : error
        })
    }
}

const DeleteJob = async (req, res) => {
    try {
        const response = await CareerSchema.deleteOne( req.params )
        // console.log("response : ", response)
        if(response.deletedCount === 1){
            res.json({
                message : "Delete Success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Job not found",
                success : false,
                status : 404
            })
        }


    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong"
        })
    }
}

const showHideJob = async (req, res) => {
    try {
        let showHide = req.body.show
        
        showHide ? showHide = false : showHide = true;

        const ShowHideInstance = {
            show : showHide
        }
        const response = await CareerSchema.updateOne(
            req.params,
            {
                $set : ShowHideInstance
            }
        )

        if(response.modifiedCount === 1){
            res.json({
                message : "update success",
                success : true,
                status : 200
            })
        }     
                
    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error : error
        })
    }
}


// Job Applicatoins API's
const ApplyJob = async (req, res) => {
    const {name, email, contact, resume, coverLetter} = req.body;
    const filePath = req.file ? req.file.filename : null;
    // const filePath = req.file.resume

    try {
        const ApplyJobInstance = {
            name : name,
            email : email,
            contact : contact,
            resume : filePath,
            coverLetter : coverLetter,
            read : false
        }
        
        const preApply = CareersData(ApplyJobInstance);
        
        const response = await preApply.save();

        if(response){
            res.json({
                success : true,
                status : 200,
                message : "Applied Successfully"
            })
        }

    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error : error
        })
    }
}

const GetJobApplications = async (req, res) => {
    try {
        const response = await CareersData.find();
        
        if(response){
            res.json({
                success : true,
                message : "Data get successfully",
                status : 200,
                response : response
            })
        }else{
            res.json({
                success : false,
                message : "Applications not found",
                status : 404
            })
        }
    } catch (error) {
        res.json({
            success : false,
            message : "Something went wrong",
            status : 500
        })
    }
}

const DeleteJobApplicatoins = async (req, res) => {
    try {
        const response = await CareersData.deleteOne( req.params )
        if(response.deletedCount === 1){
            res.json({
                message : "Delete Success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Application not found",
                success : false,
                status : 404
            })
        }


    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong"
        })
    }
}

const ReadJobApplication = async (req, res) => {
    
    try {
        const ReadInstance = {
            read : true
        }
        const response = await CareersData.updateOne(
            req.params,
            {
                $set : ReadInstance
            }
        )

        if(response.modifiedCount === 1){
            res.json({
                message : "update success",
                success : true,
                status : 200
            })
        }     
                
    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error : error
        })
    }
}

module.exports = {GetJobs, AddJob, UpdateJob, DeleteJob, showHideJob, ApplyJob, GetJobApplications, DeleteJobApplicatoins, ReadJobApplication}