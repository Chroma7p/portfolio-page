import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './home';
import { Work } from './work';
import { Hobby } from './hobby';
import { NotFound } from './notfound';


export const Page=()=> {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/portfolio-page/" element={<Home />} />
                    <Route path="/portfolio-page/work" element={<Work />} />
                    <Route path="/portfolio-page/hobby" element={<Hobby />} />
                    <Route path="/portfolio-page/*" element={<NotFound />} />
                </Routes>
            </Router>
        </ div>
    );
}