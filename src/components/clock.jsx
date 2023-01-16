import moment from 'moment/moment';
import 'moment/locale/id';
import { useState, useEffect } from 'react';

const Clock = ({ date }) => {
  return (
    <span>
        <div className='bg-white mx-10 py-5 rounded'>
            <p className="text-center text-primary text-2xl pb-2">{moment(date).locale('id-ID').format('dddd, D-MMMM-YYYY')}</p>
            <hr className='mx-4' />
            <div className="text-center text-primary text-8xl">
                {date.toLocaleTimeString('en-GB')}
            </div>
        </div>
    </span>
  )
}

export default Clock;