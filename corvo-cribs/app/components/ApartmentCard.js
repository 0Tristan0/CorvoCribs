import MapIcon from "./icons/MapIcon";
import Image from "next/image";

export default function ApartmentCard({ title, address, pricePerMonth, beds, baths, distance, area, imageUrl, thumbnail = false }) {    
    return (
        <div className='mt-5 bg-[#F5E5AC] px-3 shadow-lg rounded-2xl flex flex-row items-center gap-x-7'>
            {thumbnail ? (<Image src={ imageUrl } alt="Apartment" className="rounded-2xl" width={100} height={100} />) : (null) }
            
            <div className="py-5">
                <h1 className='w-[200px] text-2xl font-semibold truncate'>{ address }</h1>
                <h1 className='text-xl pb-2'>{ pricePerMonth }/mo.</h1>
                <h1 className='text-md uppercase'>{ beds } bedroom, { baths } bath</h1>
                <h1 className='text-md'>{ area } square feet</h1>
                <div className='flex flex-row items-center gap-x-2'>
                    <div className='w-5 h-5 flex items-center justify-center'>
                        <MapIcon fill="#FACBCB" />
                    </div>
                    <h1>{ distance } miles away</h1>
                </div>
            </div>
        </div>
    );
};
