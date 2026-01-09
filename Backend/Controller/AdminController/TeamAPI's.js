const TeamSchema = require("../../Modals/TeamSchema")

const AddMember = async (req, res) => {
    try {
        const {profileImage, name, email, jobrole, contact, address, bio, skills, show } = req.body;

        const resisterTeam = await TeamSchema.find()

        const MemberExist = resisterTeam.find(e => e.email === email)
        
        if(MemberExist){
            res.json({
                success : true,
                status : 201,
                message : "Team Member already resistered"
            })
        }else{
            const TeamInstance = {
                name : name,
                image : profileImage,
                email : email,
                jobrole : jobrole,
                contact : contact,
                address : address,
                bio : bio,
                skills : skills,
                status : show
            }

            const PreMember = TeamSchema(TeamInstance)
            const response = await PreMember.save()

            if(response){
                res.json({
                    success : true,
                    status : 200,
                    message : "Member Created Successfully"
                })
            }
        }

    } catch (error) {
        res.json({
            success : false,
            status : 500,
            message : "Something went wrong",
            error
        })
    }
}


const UpdateMember = async (req, res) => {
    const {profileImage, name, email, jobrole, contact, address, bio, skills, show } = req.body;

        const resisterTeam = await TeamSchema.find()
        const MemberExist = await resisterTeam.find(e => e.email === email )
        
        const member = await TeamSchema.findById(req.params)

        
        const updateFunction = async() => {
            const TeamInstance = {
                name : name,
                image : profileImage,
                email : email,
                jobrole : jobrole,
                contact : contact,
                address : address,
                bio : bio,
                skills : skills,
                show : show
            }

            try {
                const response = await TeamSchema.updateOne(
                    req.params,
                    {
                        $set : TeamInstance
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
                        message: "Member not found",
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


        if(MemberExist){
            if(member.email === email){
                updateFunction()
            }else{
                res.json({
                    success : true,
                    status : 201,
                    message : "Team Member already resistered"
                })
            }
        }else{
            
            updateFunction()
        }

}


const DeleteMember = async (req, res) => {
    try {
        const response = await TeamSchema.deleteOne( req.params )

        if(response.deletedCount === 1){
            res.json({
                message : "Delete Success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Member not found",
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


const GetMembers = async (req, res) => {
    try {
        const response = await TeamSchema.find()

        if(response){
            res.json({
                message : "Find members successfully",
                status : 200,
                success : true,
                response : response
            })
        }else{
            res.json({
                message: "Member's not found",
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


module.exports = {AddMember, UpdateMember, DeleteMember, GetMembers}