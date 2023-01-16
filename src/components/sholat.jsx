const Sholat = ({sholat}) => {
    
    return (
        <div>
            <div className='flex mx-auto justify-center p-4 gap-x-16'>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Imsak</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.imsak}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Subuh</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.subuh}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-70 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Syuruq</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.terbit}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Zuhur</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.dzuhur}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Ashar</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.ashar}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Mahgrib</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.maghrib}</div>
                </div>
                <div className='flex flex-col justify-center item-center W-50 h-50 bg-white p-5 rounded-md'>
                  <div className='text-primary text-center text-4xl'>Isya</div>
                  <div className='text-primary text-center text-4xl'>{sholat?.isya}</div>
                </div>
              </div>
        </div>
    )
} 

export default Sholat;