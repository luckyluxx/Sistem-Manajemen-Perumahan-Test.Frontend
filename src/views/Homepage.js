import React from 'react'
import useReadController from '../controllers/readControllers'
function Homepage() {
  const { houses } = useReadController()

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/4 lg:w-2/4">
          <div className='inline-flex items-start justify-center gap-1.5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-gear-fill" viewBox="0 0 16 16">
              <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
              <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z"/>
              <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
            </svg>
            <h1 className="text-2xl font-bold mb-6">Administrasi Perumahan XYZ</h1>
          </div>
          
          {/* Monthly Summary Section */}
          <div className="mb-6">
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