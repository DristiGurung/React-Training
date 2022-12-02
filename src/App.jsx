import { useState } from "react"
import Emojilist from "./Component/Emojilist";
import Searchbar from "./Component/Searchbar";
import Header from "./Component/Header";
import filterEmoji from "./filterEmoji";

export default function App() {
  const initialEmojis = filterEmoji("",20);
  const [filterEmojis,setfilterEmojis] = useState(initialEmojis)

 return(
  <> 
  <div>
  <Header />
  <Searchbar setEmoji={setfilterEmojis} />
  <Emojilist data = {filterEmojis} />
  </div>
  </>
 );

}