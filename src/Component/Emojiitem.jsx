export default function Emojiitem(props){
  const code = props.symbol.codePointAt(0).toString(16);
  const srcImage=`//cdn.jsdelivr.net/emojione/assets/png/${code}.png`;
  
    return (
< div
className = "component-emoji-result-row copy-to-clipboard"
      >
        <img  src={srcImage}/>
        <span className="title">{props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
      }