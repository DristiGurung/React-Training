import Emojiitem from "./Emojiitem";

export default function Emojilist(props){
    const data = props.data;
   // console.log(data)
    return (
        <>
         <div className="componenet-emoji-results">
            {
                data.map(function(item) {
                 return(
                    <Emojiitem title={item.title} symbol={item.symbol}/>
                 )       
            })
        }
         </div>
        </>
    )
    
}