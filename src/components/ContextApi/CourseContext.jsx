import { createContext, useState } from "react";

const ContextForAllPage=createContext()
function ContextApi({children})
{
    const [value, setvalue]=useState("hellow")

    return (
        <ContextForAllPage.Provider value={value}>

        </ContextForAllPage.Provider>
    )

}
export default ContextApi;