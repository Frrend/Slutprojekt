import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Pages/home.tsx";
import Bokanu from "./Pages/bokaNu.tsx";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import Kiropraktik from "./Pages/kiropraktik.tsx";
import OmOss from "./Pages/omOss.tsx";
import Kontakta from "./Pages/Kontakta.tsx";

/**
 * Router component handles routing within the application.
 * It uses BrowserRouter from react-router-dom to enable client-side routing.
 * The component renders a layout with a header, routes to different pages, and a footer.
 */
function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<Kiropraktik/>} path={"/Kiropraktik"}/>
                <Route element={<OmOss/>} path={"/omOss"}/>
                <Route element={<Kontakta/>} path={"/kontakta"}/>
                <Route element={<Bokanu/>} path={"/Bokanu"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


export default Router;
