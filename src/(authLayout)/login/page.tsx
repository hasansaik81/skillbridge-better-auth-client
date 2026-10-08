import LoginForm from "@/components/AuthLayout/AuthForm/LoginForm";
import { Metadata } from "next";

export const metadat:Metadata={
    title:"Sign In"
};


export default function LonginPage(){
    return LoginForm
}