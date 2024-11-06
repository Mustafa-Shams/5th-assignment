
import Image from "next/image";

export default function Hero(){
    return(
        //main Div
        <div className="flex   ">
            {/* Text Div */}

            <div className="flex flex-col justify-center items-start pt-[125px] ">
            <h1 className="font-serif font-bold text-[40px] pl-[176px] 
         h-[189px] w-[700px] ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="w-[850px] h-[85px] text-balance 
         font-serif text-gray-600  pl-[176px]   ">
            An example of intricate workmanship and detail, 
        elegant necklaces and long and short chains form a part of our desirable
         collection.

         </p>
         <button className="w-[200px] font-serif h-[50px] ml-[176px] 
        rounded-[10px] gap-[10px] bg-[#A29875] text-white">
            Explore Now
         </button>
            </div>

            {/* Image Div */}

            <div className=" pt-[50px] ">
        <Image src={'/assignment.jpg'} alt="photo" width={350} height={300} />
            </div>

        </div>
    )
}