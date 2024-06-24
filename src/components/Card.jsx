import React, { useState } from 'react'

const Card = () => {
  const [country, setCountry] = useState("")
  const [info, setInfo] = useState([])
  const [name, setName] = useState("")
  //   const [error,setError]=useState(false)
  const handelChange = (e) => {
    setCountry(e.target.value)
  }
  const handelClick = async () => {
    let a = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    let data = await a.json()
    setInfo(data)
    console.log(data);
    setName(country)
    setCountry("")
  }
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-screen flex justify-center items-center">
          <input type="text" name="" id="" className='border border-black md:w-[40%] p-2 mt-10 w-[100%] mx-4 rounded-xl' placeholder='Enter cuntry name' value={country} onChange={handelChange} />
          <button className='p-2 border border-black mt-10 rounded-lg hover:bg-green-600 text-white bg-green-800 mr-3'
            onClick={handelClick}
          >Submit</button>
        </div>
      </div>
      <div className="border border-white mt-10 md:mr-52 mr-0 ml-0 md:ml-52 ">
        {
          info.status !== 404 ? "" : <p className='text-center text-red-600'>Invalid Cuntry Name</p>
        }
        {
          info.length > 0 &&
          <div className='flex justify-center items-center m-10 flex-col text-white'>
            <img src={info[0].flags.png} alt="" className='' />
            <p className='text-xl font-semibold'>Name:-{name}</p>
            <p>Continents:-{info[0].
              continents}</p>
            <p>Capital:-{info[0].capital}</p>
            <p>Population:-{info[0].population}</p>
            <p>Area:-{info[0].area
            }</p>
            <p>Borders:{info[0].borders.map((border,index)=>{
              return <p className='inline' key={index}>{ " "+border+" " }</p>
            })}</p>
   <p>languages:-{" "+Object.values(info[0].languages)+" "}</p>
            <p>map:- <a href={info[0].maps.googleMaps} target='_blank' className='underline text-blue-600'>click here to see map</a></p>
              <p>Top-level domain:-{info[0].tld}</p>
          </div>
        }
      </div>
    </>
  )
}

export default Card
