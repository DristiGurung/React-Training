import { useEffect ,useState } from 'react';
import './App.css';


function App() {
   const [notifications, setNotifications] = useState(0);
  useEffect(() => {
    if(notifications > 0 ){
      document.title = "You have" + notifications + "notification"
    }
   
  })


  function sendNotifications()
  {
    setNotifications (notifications + 1);
  }


  return (
    <div className="App">
     <button onClick  = {sendNotifications}>Send Notification</button>
    </div>
  );
}

export default App;
