const { response } = require("express")
const ContactSchema = require("../../Modals/ContactSchema")
const CompanyContactSchema = require("../../Modals/CompanyContactSchema")

const GetContact = async(req, res) => {
    try {
        const response = await ContactSchema.find()

        if(response){
            res.json({
                success : true,
                message : "Contact's Data get successfully",
                status : 200,
                response : response
            })
        }else{
            res.json({
                success : false,
                message : "Contacts not found",
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


const AddContact = async (req, res) => {
    const {name, email, subject, message} = req.body;
    try {
        
        const ContactInstance = {
            name : name,
            email : email,
            subject : subject,
            message : message,
            read : false
        }
        
        const preContact = ContactSchema(ContactInstance);
        
        const response = await preContact.save();

        if(response){
            res.json({
                success : true,
                status : 200,
                message : "Get in Touch Successfully"
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

// Update All Data 
const UpdateContact = async (req, res) => {
    const {name, email, contact, address, read} = req.body;
    try {

        const ContactInstance = {
            name : name,
            email : email,
            subject : subject,
            message : message,
            read : read
        }

        const response = await ContactSchema.updateOne(
            req.params,
            {
                $set : ContactInstance
            }
        )

        if(response.modifiedCount === 1){
            res.json({
                message : "update success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Update failed",
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

// Update Read/NotRead Data
const ReadContactMessage = async (req, res) => {
    
    try {
        const ReadInstance = {
            read : true
        }
        const response = await ContactSchema.updateOne(
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


const DeleteContact = async (req, res) => {
    try {
        const response = await ContactSchema.deleteOne( req.params )
        if(response.deletedCount === 1){
            res.json({
                message : "Delete Success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Contact not found",
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


// Company Personal Data 
const AddCompanyData = async (req, res) => {
    const {email, contact, address, OpenHour, LocationMap, SocialMedia} = req.body;
    try {
        
        const ContactInstance = {
            email : email,
            contact : contact,
            address : address,
            OpenHour : OpenHour,
            LocationMap : LocationMap,
            SocialMedia : SocialMedia
        }
        
        const preCompanyContact = CompanyContactSchema(ContactInstance);
        
        const response = await preCompanyContact.save();

        if(response){
            res.json({
                success : true,
                status : 200,
                message : "Company Data Add Successfully"
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


const GetCompnayData = async (req, res) => {
    try {
        const response = await CompanyContactSchema.find()

        if(response){
            res.json({
                success : true,
                message : "Contact us Data get successfully",
                status : 200,
                response : response
            })
        }else{
            res.json({
                success : false,
                message : "Data not found",
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


const UpdateCompanyData = async (req, res) => {
     const {email, contact, address, OpenHour, locationMap, SocialMedia} = req.body;
    try {

         const ContactInstance = {
            email : email,
            contact : contact,
            address : address,
            OpenHour : OpenHour,
            locationMap : locationMap,
            SocialMedia : SocialMedia
        }

        const response = await CompanyContactSchema.updateOne(
            req.params,
            {
                $set : ContactInstance
            }
        )

        if(response.modifiedCount === 1){
            res.json({
                message : "update success",
                success : true,
                status : 200
            })
        }else{
            res.json({
                message: "Update failed",
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



module.exports = {GetContact, AddContact, UpdateContact, DeleteContact, ReadContactMessage , AddCompanyData, GetCompnayData, UpdateCompanyData}
