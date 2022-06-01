import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './home';
import { Work } from './work';
import { Hobby } from './hobby';
import { NotFound } from './notfound';
const homeurl = process.env.PUBLIC_URL;

export const Page=()=> {
    return ( 
        <Routes >
            <Route exact path={homeurl+"/"} element={<Home />} />
            <Route exact path={homeurl+"/work"} element={<Work />} />
            <Route exact path={homeurl+"/hobby"} element={<Hobby />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}