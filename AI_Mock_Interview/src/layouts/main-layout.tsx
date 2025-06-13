import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"

export const MainLayout=()=>{
    return(
        <div className="w-full">
            {/* handler tp stpre user data */}
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    )
}
