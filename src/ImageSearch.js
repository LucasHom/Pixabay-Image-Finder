import React, {useState} from "react";

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onsubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-gray-400 py-2">
                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for Ladybugs"/>
                    <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    ) 
    
}

export default ImageSearch;