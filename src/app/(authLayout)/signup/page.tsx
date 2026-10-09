// import { SignupForm } from "@/components/signup-form";
import SignupForm from "@/components/AuthLayout/AuthForm/SignupForm";
import { Metadata } from "next";

export  const  metadata: Metadata= {
 title:"Sing Up",
}

export default function SignupPage(){
    return <SignupForm/>
}