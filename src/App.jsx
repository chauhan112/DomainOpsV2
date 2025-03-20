import { ActivityLogger } from "./Components/Home";
import { LinkButton } from "./rlib/timeline/t2025/mar/domainOps/Components";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import {
    CardAccordion,
    AnimatedAccordion,
    ArtisticAccordion,
} from "./Components/Showcase";

function App() {
    return (
        <>
            {" "}
            {/* <HashRouter>
                <Routes>
                    <Route path="/root" element={<ActivityLogger />} />
                    <Route
                        path="/editor/:logId"
                        element={
                            <LinkButton href="/root"> Activity </LinkButton>
                        }
                    />
                    <Route path="/" element={<ActivityLogger />} />
                </Routes>
            </HashRouter>
            <ActivityLogger /> */}
            <ArtisticAccordion />
        </>
    );
}

export default App;
