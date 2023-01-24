import { useEffect, useState } from "react";

const Adzan = () => {
  const [showText, setShowtext] = useState(true);
  const [time, setTime] = useState(new Date());
  const [now, setNow] = useState(new Date());

  const minutes = String(now.getMinutes()+1).padStart(2, "0"); 
  const hours = String(now.getHours()).padStart(2, "0"); 


  function refresh(){
    setTime(new Date())
    setShowtext(!showText);

    const minutesNow = String(time.getMinutes()).padStart(2, "0"); 
    const hourNow = String(time.getHours()).padStart(2, "0"); 

    // console.log(`${hours}:${minutes}`);

    if(`${hourNow}:${minutesNow}` === `${hours}:${minutes}`){
        console.log('Adzan');
        window.location.assign('/iqomah');
    }
  }

  useEffect(() => {
    const timerId = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  },[showText]);
  

  return (
    <div>
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="text-white text-center text-9xl" style={{  opacity: showText ? 0 : 1 }}>ADZAN</div>
            <p className="text-white text-center text-9xl" style={{  opacity: showText ? 0 : 1 }}>MAGHRIB</p>
          </div>
        </div>
    </div>
  );
}

export default Adzan