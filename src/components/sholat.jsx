import { useEffect, useState } from "react";

const Sholat = ({sholat}) => {
    const [time, setTime] = useState(new Date());

    function refreshTime() {
        setTime(new Date());

        const minutes = String(time.getMinutes()).padStart(2, "0"); 
        const hour = String(time.getHours()).padStart(2, "0"); 
        
        if('11:27' === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/dzuhur');
        }

        if(sholat?.imsak === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/imsak');
        }
        if(sholat?.terbit === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/syuruq');
        }
        if(sholat?.dzuhur === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/dzuhur');
        }
        if(sholat?.subuh === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/subuh');
        }
        if(sholat?.ashar === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/ashar');
        }
        if(sholat?.maghrib === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/maghrib');
        }
        if(sholat?.isya === `${hour}:${minutes}`){
            // console.log('Adzan');
            window.location.assign('/adzan/isya');
        }
    }

    useEffect(() => {
        const intervalId = setInterval(refreshTime, 1000);
        return function cleanup() {
          clearInterval(intervalId);
        };
    }, [time]);

    return (
        <div>
            <div className='flex mx-auto justify-center p-4 gap-x-16'>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Imsak</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.imsak}</div>
                </div>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Subuh</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.subuh}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Syuruq</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.terbit}</div>
                </div>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Dzuhur</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.dzuhur}</div>
                </div>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Ashar</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.ashar}</div>
                </div>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Mahgrib</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.maghrib}</div>
                </div>
                <div className='flex flex-col justify-center item-center w-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Isya</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.isya}</div>
                </div>
              </div>
        </div>
    )
} 

export default Sholat;