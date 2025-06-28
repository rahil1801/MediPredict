import React from "react";
import InsuranceForm from "./InsuranceForm";
const Dashboard = () => {
    return(
        <div className="w-[90%] bg-[#223756] mt-[6rem] flex rounded-r-[4rem] rounded-bl-[30rem] relative">
            <div className="flex flex-col gap-5 ml-[15rem] my-[7rem]">
                <div className="text-white">
                    <p className="text-[5rem]">We provide the best</p>
                    <p className="text-[4rem] -mt-4">value of <b>Insurance</b></p>
                </div>

                <div>
                    <p>Simple Steps you can take to improve your</p>
                    <p>Financial Well-Being for the rest of your life.</p>
                </div>
            </div>
            <div className="absolute right-0 rounded-tr-[4rem]">
                <InsuranceForm />
            </div>
        </div>
    )
};

export default Dashboard;