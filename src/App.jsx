import { ActivityLogger } from "./Components/Home";
import { TestAccordion } from "./rlib/timeline/t2025/mar/domainOps/Test";
import React, { useEffect } from "react";

function App() {
    let ref = React.createRef();
    useEffect(() => {}, []);

    return (
        <>
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
            </HashRouter> */}
            {/* <ActivityLogger /> */}
            {/* <DialogShowcase />
            <HeaderShowcase />
            <TestAccordion /> */}
            <TestAccordion />
        </>
    );
}

export default App;
