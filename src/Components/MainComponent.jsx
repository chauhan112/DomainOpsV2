import { Repeater } from "../rlib/timeline/t2025/mar/domainOps/Repeater";
import { Plus } from "lucide-react";
import { GForm } from "../rlib/timeline/t2025/mar/rag/Components";
import React, { useState, useEffect } from "react";
import { ListWithContextMenu } from "../rlib/timeline/t2025/mar/domainOps/ContextMenu";
import {
    createDomain,
    getDomains,
    deleteDomain,
} from "../rlib/timeline/t2025/mar/domainOps/Apis";
export const MainComponent = () => {
    const [st, setSt] = useState({
        openForm: false,
        formData: {},
        editForm: false,
    });

    let listRef = React.createRef();

    useEffect(() => {
        getDomains([]).then((res) => {
            listRef.current.setArr(
                res.data.map((item) => ({ key: item[0], children: item[1] }))
            );
        });
    }, []);

    return (
        <div className="w-full h-screen max-w-md mx-auto bg-white rounded-lg shadow flex justify-center">
            <div className="flex flex-col w-full">
                <header className="flex items-center justify-between px-4 py-2 border-b">
                    <span>Domains</span>
                    <button
                        onClick={() => {
                            setSt({
                                ...st,
                                openForm: !st.openForm,
                            });
                        }}
                        className="w-8 h-8"
                        type="button"
                    >
                        <Plus className="text-green-500" />
                    </button>
                </header>
                {st.openForm && (
                    <GForm
                        formStruc={[
                            {
                                key: "Name",
                                placeholder: "Name",
                                type: "text",
                                className: "w-full border rounded mb-2 p-2",
                                runOnChange: (sts, data, e) => {
                                    setSt((prev) => {
                                        return {
                                            ...prev,
                                            formData: {
                                                ...prev.formData,
                                                Name: e.target.value,
                                            },
                                        };
                                    });
                                },
                            },
                        ]}
                        initialData={st.formData}
                        onSubmit={(e) => {
                            createDomain(e.Name, []).then((res) => {
                                listRef.current.setArr((prev) => {
                                    let found = false;
                                    for (let value of prev) {
                                        if (value.key === e.Name) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found)
                                        return [
                                            ...prev,
                                            {
                                                key: e.Name,
                                                children: e.Name,
                                            },
                                        ];
                                    return prev;
                                });

                                setSt({
                                    ...st,
                                    openForm: false,
                                    formData: {},
                                });
                            });
                        }}
                    />
                )}
                <ListWithContextMenu
                    CtxMenuComponent="div"
                    items={[]}
                    ref={listRef}
                    funcs={{
                        onDelete: (e, val) => {
                            deleteDomain(val.key, []).then((res) => {
                                listRef.current.onDelete(e, val);
                            });
                        },
                    }}
                />
            </div>
        </div>
    );
};
