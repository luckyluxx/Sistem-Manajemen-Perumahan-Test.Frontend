import React from 'react'
import useReadController from '../controllers/readControllers'
import useMonth from '../controllers/useMonth'
function Homepage() {
  const { houses } = useReadController()
  const month = useMonth()
  // count how many houses in the regency
  const totalHousesCount = houses.reduce((max, houses) => {
    if (houses.housingNumber > max) {
      return houses.housingNumber;
    } else {
      return max;
    }
  }, 0);
  // count available housing
  const availHouseCount = houses.filter(House => houses.availability === 'Available').length
  // count available housing
  const temporerHouseCount = houses.filter(House => houses.availability === 'Temporary').length
  const permanentHouseCount = houses.filter(House => houses.availability === 'Permanent').length

  // convert month in numbered format into string

  return(
    <>
      <div className="bg-gray-100 text-zinc-700 min-h-screen flex flex-col items-center justify-center gap-3">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/4 lg:w-3/4">
          <div className='flex items-baseline justify-between'>
            <div className='inline-flex items-baseline justify-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-gear-fill" viewBox="0 0 16 16">
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z"/>
                <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
              </svg>
              <h1 className="text-2xl font-bold mb-3">Administrasi Perumahan XYZ</h1>
            </div>
            <h3 className='font-medium uppercase'> Periode : <span className='text-red-500'>{month}</span></h3>
          </div>
          <div className='flex items-start justify-between gap-2 text-sm'>
            <p className='font-light'> <span className='text-gray-50 font-normal bg-indigo-500 rounded-full mx-1 py-1 px-2'>{totalHousesCount}</span> Total Rumah</p>

            <span> | </span>
            <p className='font-light'> <span className='text-gray-50 font-normal bg-lime-500 rounded-full mx-1 py-1 px-2'>{availHouseCount}</span> Rumah Tersedia</p>
            
            <span> | </span>
            <p className='font-light'> <span className='text-gray-50 font-normal bg-fuchsia-500 rounded-full mx-1 py-1 px-2'>{permanentHouseCount}</span> Rumah Dihuni Tetap</p>
            
            {/* if statement */}
            {!temporerHouseCount ? [ 
              <span> | </span>, 
              <p className='font-light'><span className='text-gray-50 font-normal bg-amber-400 rounded-full mx-1 py-1 px-2'>{temporerHouseCount}</span> Penghuni Tidak Tetap </p>
            ]:
              <span></span>
            }

          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/4 lg:w-3/4">

          {/* Monthly Summary Section */}
          <div className="my-6">
            <h2 className="text-lg font-semibold mb-2">Monthly Occupation</h2>
            {/* Add content to display monthly summary here */}
          </div>

          {/* Manage Vacant Houses Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Available Housing</h2>
            {/* Add content to manage vacant houses here */}
          </div>

          {/* Manage New Residents Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Manage New</h2>
            {/* Add content to manage new residents here */}
          </div>

        </div>
      </div>
    </>
  );
}

export default Homepage