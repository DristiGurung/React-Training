import filterEmoji from "../filterEmoji";

export default function Searchbar(props){

    function handleChange(e){
        const value=e.target.value;
        const filterEmojis = filterEmoji (value,20);
        props.setEmoji(filterEmojis);

    }

    return(<div className="component-search-input">
    <div>
    <input  onChange={handleChange}/>
    </div>
    </div>
    );
}