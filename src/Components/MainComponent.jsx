import { Repeater } from "../rlib/timeline/t2025/mar/domainOps/Repeater";
import { Plus } from "lucide-react";
import { GForm } from "../rlib/timeline/t2025/mar/rag/Components";
import React, { useState, useEffect } from "react";
import { ListWithContextMenu } from "../rlib/timeline/t2025/mar/domainOps/ContextMenu";
import {
    createDomain,
    getDomains,
    deleteDomain,
    updateDomainName,
} from "../rlib/timeline/t2025/mar/domainOps/Apis";

export const ButtonElement = (props) => {
    return (
        <button
            className="flex-1 p-1 items-center text-left"
            {...props}
            onClick={() => {
                console.log(props);
            }}
            onDoubleClick={() => {
                console.log("double click", props);
            }}
        />
    );
};

export const defValuesFunc = (setSt) => {
    return {
        formStruc: [
            {
                key: "name",
                placeholder: "Name",
                type: "text",
                className: "w-full border rounded mb-1 p-1",
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
        ],
        btns: {
            children: {
                0: {
                    className: "bg-green-500 text-white px-2 rounded",
                },
                1: {
                    className: "bg-gray-500 text-white px-2 rounded",
                },
            },
        },
    };
};

export const MainComponent = () => {
    const [st, setSt] = useState({
        openForm: false,
        formData: {},
        editInfo: {},
        editForm: false,
    });

    let listRef = React.createRef();
    const onSubmit = (e) => {
        createDomain(e.name, []).then((res) => {
            listRef.current.setArr((prev) => {
                let found = false;
                for (let value of prev) {
                    if (value.key === e.name) {
                        found = true;
                        break;
                    }
                }
                if (!found)
                    return [
                        ...prev,
                        {
                            key: res.data.id,
                            children: e.name,
                            id: res.data.id,
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
    };
    const onCancel = () => {
        setSt({
            ...st,
            openForm: !st.openForm,
        });
    };
    let funcs = {};
    const onEditSubmit = (val) => {
        updateDomainName(st.editInfo.key, [], val.name).then((res) => {
            listRef.current.setArr((arr) =>
                arr.map((item) => {
                    if (item.key === st.editInfo.key) {
                        return {
                            ...item,
                            children: val.name,
                        };
                    }
                    return item;
                })
            );
            setSt({
                ...st,
                editForm: false,
                editInfo: {},
            });
        });
    };

    let defValues = defValuesFunc(setSt);

    const onDeleteOverload = (e, val) => {
        deleteDomain(val.key, []).then((res) => {
            funcs.listRef.onDelete(e, val);
        });
    };
    useEffect(() => {
        getDomains([]).then((res) => {
            listRef.current.setArr(
                res.data.map((item) => ({
                    key: item[0],
                    children: item[1],
                    id: item[0],
                }))
            );
        });
        funcs = {
            listRef: { ...listRef.current },
        };
        funcs.listRef.setSt({
            ...funcs.listRef.st,
            menuOptions: funcs.listRef.st.menuOptions.filter(
                (ele) => ele.key !== "view"
            ),
        });
    }, []);

    return (
        <div className="w-48 h-screen  bg-white rounded-lg shadow flex justify-center">
            <div className="flex flex-col w-full">
                <header className="flex items-center justify-between px-4 py-2 border-b">
                    <span>Domains</span>
                    <button
                        onClick={onCancel}
                        className="w-8 h-8"
                        type="button"
                    >
                        <Plus
                            className={
                                "text-green-500 transition-all duration-300" +
                                (st.openForm ? " rotate-[315deg]" : "")
                            }
                        />
                    </button>
                </header>
                {st.openForm && (
                    <GForm
                        formStruc={defValues.formStruc}
                        initialData={st.formData}
                        onSubmit={onSubmit}
                        onCancel={onCancel}
                        btns={defValues.btns}
                    />
                )}
                {st.editForm && (
                    <GForm
                        formStruc={defValues.formStruc}
                        initialData={{
                            name: st.editInfo.children,
                        }}
                        onSubmit={onEditSubmit}
                        onCancel={() => {
                            setSt({
                                ...st,
                                editForm: false,
                                editInfo: {},
                            });
                        }}
                        btns={defValues.btns}
                    />
                )}
                <ListWithContextMenu
                    CtxMenuComponent={ButtonElement}
                    items={[]}
                    ref={listRef}
                    funcs={{
                        onDelete: onDeleteOverload,
                        onEdit: (e, v) => {
                            console.log(v);
                            setSt({
                                ...st,
                                editForm: true,
                                editInfo: v,
                            });
                        },
                    }}
                    li={{ className: "px-1 hover:bg-gray-50" }}
                />
            </div>
        </div>
    );
};
