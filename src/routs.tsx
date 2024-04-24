import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Pages/home.tsx";
import Bokanu from "./Pages/bokaNu.tsx";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import Kiropraktik from "./Pages/kiropraktik.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<Kiropraktik/>} path={"/Kiropraktik"}/>

                <Route element={<Bokanu/>} path={"/Bokanu"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


export default Router;
