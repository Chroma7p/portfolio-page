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
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/hobby" element={<Hobby />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
        </ div>
    );
}