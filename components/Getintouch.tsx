import {AiOutlineMail} from 'react-icons/ai';
import {BiPhoneOutgoing} from 'react-icons/bi';
import {HiOutlineLocationMarker} from 'react-icons/hi';

export default function Getintouch(){
    return(
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-2xl bg-gray-600 text-white">
                        <p className="">PERSONAL PROFILE</p>
                    </div>
                    <div className="flex p-6 text-2xl">
                        <p><b>GET IN CONTACT</b></p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 bg-gray-600 text-white">
                        <p className="">Self-motivated member seeking to work as a web-developer where I can use my skills and understanding of web design to fulfill client demands and surpass their expectations. Highly skilled in Collaboration, Creative thinking and Supportive.</p>
                    </div>
                    <div className="p-6 text-xl">
                        <p className="text-gray-400"><AiOutlineMail/>Email: ninjaversusbear7@gmail.com</p><BiPhoneOutgoing className='text-gray-400'/>
                        <p className="text-gray-400">{"Contact: +977 9860560138"}</p>
                        <p className="text-gray-400"><HiOutlineLocationMarker/>Address: Mid-Baneshwor, Kathmandu, 44600</p>
                    </div>
                </div>
            </div>
        </>
    )
}