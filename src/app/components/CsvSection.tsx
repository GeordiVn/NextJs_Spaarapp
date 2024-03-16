




export function CsvSection() {
    return <form className="grid grid-cols-12 grid-flow-row gap-3 border-2 border-black rounded-3xl p-3">

        <div className="grid grid-cols-12 grid-flow-row col-span-4 ">
            <div className="col-span-12 ">
                <SelectBank />
            </div>
            <div className="col-span-12 ">
                <SelectCsvFile />
            </div>
        </div>
        <div className="col-span-8 ">
            <DataView />
        </div>
        <div className="col-start-5 col-span-8 ">
            <DataCollector />
        </div>
    </form>
}


function DataCollector() {
    return <div className="grid grid-cols-12 grid-flow-row items-center ">
        <div className="col-span-2 ">
            <input type="number" placeholder="Bedrag" className="w-11/12 border-2 rounded-xl  border-black" />
        </div>
        <div className="col-span-4 ">
            <input type="date" className="border-2 w-11/12 rounded-xl  border-black" />
        </div>
        <div className="col-span-3">
            <button className="bg-black text-white rounded-xl px-3 py-1">Add</button>
        </div>
        <div className="col-span-3 text-end">
            <button className="bg-black text-white rounded-xl px-3 py-1">upload</button>
        </div>
    </div>
}

function DataView() {
    return <div className="w-full min-h-40 border-2 rounded-xl overflow-auto border-black">

    </div>
}

function SelectBank() {
    return <div className="w-full ">
        <label>Selecteer bank</label>
        <select className="border-2 rounded-xl border-black w-full">
            <option>Bnp baripas fortis</option>
            <option>Belfius</option>
            
        </select>
    </div>
}

function SelectCsvFile() {
    return <div className="w-full ">
        <label >Upload file</label>
        <input
            className=" w-full cursor-pointer rounded-xl border-2  px-3   font-normal text-surface  ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer   file:border-0 file:border-e  file:border-inherit file:bg-transparent   border-black  "
            type="file" />
    </div>
}