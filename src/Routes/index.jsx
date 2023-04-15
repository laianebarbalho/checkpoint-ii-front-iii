import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes(){

    const user = true; 


    return (
        <BrowserRouter>
        {
            user ? <AppRoutes/> :    <AuthRoutes/>      }
         
        
        </BrowserRouter>
    )
}