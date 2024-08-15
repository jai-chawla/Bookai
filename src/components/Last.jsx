import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle,faUsers,faStore,faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const Last = () => {
  return (
    <div className='h-[160vh] text-white'>
      <div>
      <div className="w-[74%] h-[400px] bg-white bg-opacity-10 mx-auto mt-32 text-white py-10 px-10">
        <h1 className="font-bold text-center text-2xl">RoadMap</h1>

        <div className="flex space-x-10 mx-auto pr-0">
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faUserCircle} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">Advanced Character Development</p>
              <p>
              AI-powered tool for creating deep, complex characters.
              </p>
            </div>
          </div>
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faStore} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">E-book Platform Integration</p>
              <p>
              Seamless publishing to popular e-book platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-10">
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faUsers} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">Collaborative Writing</p>
              <p>Co-create stories with other authors or AI assistants.</p>
            </div>
          </div>
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faPaintBrush} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">AI Cover Art Generation</p>
              <p>
              Create stunning book covers with AI-generated art.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <h1 className='text-center font-bold text-2xl text-white my-16'>What Our Users Say</h1>
      <div className=' flex space-x-6 text-center w-[90%] mx-auto text-[15px] justify-center'>
        <div className=' h-[110px] w-[36%]  py-2 px-4 bg-white bg-opacity-10 rounded-xl leading-loose'>
          <p>"BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"</p>
          <p className='font-bold'>- Sarah J., Author</p>
        </div>
        <div className=' h-[110px] w-[36%]  py-2 px-4 bg-white bg-opacity-10 rounded-xl leading-loose'>
          <p>"The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."</p>
          <p className='font-bold'>- Mark T., Aspiring Writer</p>
        </div>
      </div>



      <div className=' text-center py-8 px-10 flex flex-col space-y-4 w-[77%] mx-auto my-14 bg-white bg-opacity-10'>
        <h1 className='text-2xl font-bold'>Stay Updated</h1>
        <h3 className='text-[17px] font-semibold'>Subscribe to our newsletter for the latest AI writing tips and BookAI updates.</h3>
        <input type="text" placeholder='Enter Your Email' className='w-[250px] h-9 rounded-lg p-3' />
        <button className='bg-gradient-to-r from-[rgb(113,108,255)] to-[rgb(87,180,254)] w-full mx-auto h-9'>Click To Subscribe</button>
      </div>
    </div>
  )
}

export default Last