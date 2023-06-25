import Image from "next/image";

export default function Name(){
    return(
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-6xl bg-gray-600">
                    <p className="text-white underline"><b>ASHISH REGMI</b></p>
                    </div>
                    <div className="flex justify-start p-6 text-6xl">
                        <img src="/images/pp.jpg" width={200} height={200} alt="profile_picture" />
                    </div>
                </div>
            </div>
        </>
    )
}