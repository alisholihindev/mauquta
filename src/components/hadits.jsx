import HaditsArbain from "arbain-id";
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';

const Hadits = () => { 

    const [noHadis, setNoHadis] = useState(23);
    const [hadis, setHadis] = useState();

    function refreshRandom() {
        const random = Math.floor(Math.random() * (42 - 1 + 1)) + 1;
        setNoHadis(random);
      }
    
    useEffect(() => {
        const timerId = setInterval(refreshRandom, 300000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        const arbain = new HaditsArbain();

        arbain.getOneHadits(
            noHadis   // required, number hadits
        )
        .then((data) => {
            // data handling here
            var data = data[0];
            if(data.id.length < 800){
                setHadis(data)
            }else{
                refreshRandom()
            }
            
        })
        .catch((error) => {
            // error handing here
            console.log(error);
        });
    },[noHadis]);

    return (
        <div>
            <div>
                <div className="flex flex-col flex-wrap items-center gap-3 px-2">
                    <p className="text-center text-primary text-2xl">{hadis?.title}</p>
                    <div className="text-center text-primary text-ellipsis text-md">{hadis?.id}</div>
                </div>
            </div>
        </div>
    )
}

export default Hadits