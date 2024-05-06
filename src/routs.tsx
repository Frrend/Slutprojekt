import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Pages/home.tsx";
import Bokanu from "./Pages/bokaNu.tsx";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import Kiropraktik from "./Pages/kiropraktik.tsx";
import OmOss from "./Pages/omOss.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<Kiropraktik/>} path={"/Kiropraktik"}/>
                <Route element={<OmOss/>} path={"/omOss"}/>

                <Route element={<Bokanu/>} path={"/Bokanu"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


export default Router;
