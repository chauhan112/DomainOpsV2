import { ActivityLogger } from "./Components/Home";
import { TestDropdown } from "./rlib/timeline/t2025/mar/domainOps/Test";
import React, { useEffect } from "react";
import { ContextMenuShowcase } from "./rlib/timeline/t2025/mar/domainOps/ContextMenuShowCase";

function App() {
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
            <TestDropdown />
        </>
    );
}

export default App;
