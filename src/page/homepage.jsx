import logo from '../assets/mosque.png'
import Clock from '../components/clock'
import Slider from '../components/slider'
import * as Unicons from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import Sholat from '../components/sholat';


 const Homepage = () => {
  const [sholat, setSholat] = useState(null);
  const [date, setDate] = useState(new Date());
  const [newDay, setNewDay] = useState(true);
  
  function refreshClock() {
    setDate(new Date());
    if(date.toTimeString == '00:00'){
      setNewDay(true);
    }
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    fetch('https://api.myquran.com/v1/sholat/jadwal/2307/'+moment(date).format('YYYY/MM/DD'))
      .then(res => {
        return res.json();
      }).then(data =>{
        setSholat(data['data']['jadwal'])
        setNewDay(false);
      })
    
  },[newDay])


  return (
      <div className='fixed w-full h-screen'>
        <div className="grid grid-cols-12 bg-primary text-white">
          <div className="col-span-9">
            <div className='flex flex-col'>
              <div className='container'>
                <Slider/>
              </div>
              <Sholat sholat={sholat}/>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col justify-center gap-10 pt-10">
              <div className='flex flex-col items-center gap-2'>
                <img src={ logo } alt="" className='w-40'/>
                <p className="text-center text-5xl">Masjid Nurul Yaqin</p>
                <p className="text-center text-md">Jl.gama Rt.02 Kel. Sesumpu, Kec. Penajam,<br /> Kab. Penajam Paser Utara</p>
              </div>
                <Clock date={date}/>
              <div className='bg-white mx-10 py-5 rounded'>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-center text-primary text-5xl">Penajam</p>
                    <div className="text-center text-primary text-8xl">
                      <Unicons.UilCloudSun size="190" className="color-primary"/>
                    </div>
                    <p className="text-center text-primary text-3xl">27° C</p>
                    <p className="text-center text-primary text-5xl">Sunny</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage;