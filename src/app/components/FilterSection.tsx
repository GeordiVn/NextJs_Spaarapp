export function FilterSection() {
    return <form className="grid grid-flow-row grid-cols-12 border-2 h-full border-black rounded-3xl p-2">
        <div className="col-span-12">
            <DateInputs />
        </div>
        <div className="col-span-6">
            <RadioInputSelection />
        </div>
        <div className="col-span-6 text-end mt-auto items-baseline ">
            <button className="bg-black text-white rounded-xl px-3 py-1">Zoek</button>
        </div>
    </form>
}




function DateInputs() {
    return <div className="gid grid-flow-row grid-cols-12">
        <div className="col-span-4">
            <label htmlFor="van" >Van</label>
        </div>
        <div className="col-span-8">
            <input id="van" type="date" className="border-2 w-full  rounded-xl  border-black" />

        </div>
        <div className="col-span-4">
            <label htmlFor="tot" >Tot</label>
        </div>
        <div className="col-span-8">
            <input id="tot" type="date" className="border-2 w-full rounded-xl  border-black" />

        </div>
    </div>
}

function RadioInputSelection() {
    return <div className="gid grid-flow-row grid-cols-12">
        <div className="col-span-12">
            <input type="radio" />
            <label className="ms-2">Alles</label>

        </div>
        <div className="col-span-12">
            <input type="radio" />
            <label className="ms-2">Uitgaves</label>

        </div>
        <div className="col-span-12">
            <input type="radio" />
            <label className="ms-2">Inkomsten</label>

        </div>
    </div>
}