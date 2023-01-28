import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Adzan = () => {
  const {sholat} = useParams();

  const [showText, setShowtext] = useState(true);
  const [time, setTime] = useState(new Date());
  const [now, setNow] = useState(new Date());
  const [iqomah, setIqomah] = useState();

  const minutes = String(now.getMinutes()+1).padStart(2, "0"); 
  const hours = String(now.getHours()).padStart(2, "0"); 


  function refresh(){
    setTime(new Date())
    setShowtext(!showText);

    const minutesNow = String(time.getMinutes()).padStart(2, "0"); 
    const hourNow = String(time.getHours()).padStart(2, "0"); 

    // console.log(`${hours}:${minutes}`);

    if(`${hourNow}:${minutesNow}` === `${hours}:${minutes}`){
        switch (sholat) {
          case "subuh":
            window.location.assign('/iqomah/'+iqomah.subuh);
            break;
          case "dzuhur":
            window.location.assign('/iqomah/'+iqomah.dzuhur);
            break;
          case "ashar":
            window.location.assign('/iqomah/'+iqomah.ashar);
            break;
          case "maghrib":
            window.location.assign('/iqomah/'+iqomah.maghrib);
            break;
          case "isya":
            window.location.assign('/iqomah/'+iqomah.isya);
            break;
        
          default:
            window.location.assign('/');
            break;
        }
    }
  }

  useEffect(() => {
    const timerId = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  },[showText]);

  useEffect(() => {
    fetch('/data/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(res => {
      return res.json();
    }).then(data =>{
      setIqomah(data?.timer_iqomah)
    });
  },[]);
  

  return (
    <div>
        <div className="flex h-screen">
          <div className="m-auto">
            
              {
                sholat == "imsak" || sholat == "syuruq" && 
                <div className="text-white text-center text-9xl" style={{  opacity: showText ? 0 : 1 }}>ADZAN</div>
              }
            <p className="text-white text-center text-9xl uppercase" style={{  opacity: showText ? 0 : 1 }}>{sholat}</p>
          </div>
        </div>
    </div>
  );
}

export default Adzan