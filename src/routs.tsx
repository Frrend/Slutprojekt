import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./App.tsx";
import Bokanu from "./bokaNu.tsx";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<Bokanu/>} path={"/Bokanu"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


export default Router;
