"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
const PageComponent = () => {
  const router = useRouter();
  const [guests,setGuests]=useState<number>(4);
  useEffect(()=>{
    console.log("guests",guests);
  },[guests]);

  return (
    <>
      <div className="flex flex-col gap-6 justify-center w-1/3 m-auto">
        <div className="text-3xl font-bold">Share some basic about your place</div>
        <div className="text-muted-foreground">You'll add more details later</div>
        <div className="flex flex-col">
          <div className="flex justify-between border-solid border-b-[1px] py-4">
            <div>Guests</div>
            <div className="flex gap-4">
              <div className="flex gap-4">
                <div className="h-8 w-8 border-solid border-[1px] text-center rounded-full cursor-pointer" onClick={()=>setGuests(guests-1)}>-</div>
                <div>{guests}</div>
                <div className="h-8 w-8 border-solid border-[1px] text-center rounded-full cursor-pointer"onClick={()=>setGuests(guests+1)}>+</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex fixed w-full border-soloid border-t-4-bottom-0 p-4 bg-white">
        <button className="font-bold" onClick={()=>router.back()}>Back</button>
        <button onClick={()=>router.push(`/host/add-property/floor-plan`)} className="p-3 bg-gradient-to-tr from-pink-600 via-pink-500 to-pink-400">Next</button>
     </div>
    </>
  )
}

export default PageComponent;