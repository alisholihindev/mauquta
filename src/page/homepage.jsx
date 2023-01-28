import logo from '../assets/mosque.png'
import Clock from '../components/clock'
import Slider from '../components/slider'
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import Sholat from '../components/sholat';
import Hadits from '../components/hadits';


 const Homepage = () => {
  const [sholat, setSholat] = useState(null);
  const [date, setDate] = useState(new Date());
  const [newDay, setNewDay] = useState(true);
  const [profile, setProfile] = useState();
  const [kota, setKota] = useState(2307);
  const [slider, setSlider] = useState([]);

  const getData=()=>{
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
      setProfile(data.profile);
      setKota(profile?.kota_id);
      setSlider(data.images);
    })
  }
  
  function refreshClock() {
    setDate(new Date());
    if(date.getHours() == '00' && date.getMinutes() == '01' && date.getSeconds() == '00'){
      setNewDay(true);
    }
  }

  useEffect(() => {
    getData();
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    fetch('https://api.myquran.com/v1/sholat/jadwal/'+kota+'/'+moment(date).format('YYYY/MM/DD'))
      .then(res => {
        return res.json();
      }).then(data =>{
        setSholat(data['data']['jadwal'])
        setNewDay(false);
      })
    
  },[newDay,profile])

  


  return (
      <div className='fixed w-full h-screen'>
        <div className="grid grid-cols-12 bg-primary text-white">
          <div className="col-span-9">
            <div className='flex flex-col'>
              <div className='container'>
                <Slider slider={slider}/>
              </div>
              <Sholat sholat={sholat}/>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col justify-center gap-10 pt-10">
              <div className='flex flex-col items-center gap-2'>
                <img src={ logo } alt="" className='w-40'/>
                <p className="text-center text-5xl">{profile?.nama}</p>
                <p className="text-center text-md">{profile?.alamat}<br /> {profile?.kota}</p>
              </div>
                <Clock date={date}/>
              <div className='bg-white mx-10 py-5 rounded'>
                <Hadits/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage;