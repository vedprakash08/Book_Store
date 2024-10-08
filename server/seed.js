import express from "express"
import bcrypt from 'bcrypt'
import { Admin } from "./models/Admin.js"
import './db.js'

export async function AdminAccount(){
    try{
        const adminCount =await Admin.countDocuments()
        if(adminCount<5){
            const hashPassword = await bcrypt.hash('adminpassword',10)
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            console.log("Account created")
        }
        else{
            console.log("account already existed")
        }
    }
    catch(err){
        console.log("error")
    }
}

// AdminAccount()