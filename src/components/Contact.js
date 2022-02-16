import { send } from 'emailjs-com';
import React, {useState} from 'react';
import { Fade } from 'react-reveal';
// import  dotenv from 'dotenv';

function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: ""
  }
  const [data,setData] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setData({...data, [e.target.name] : e.target.value});
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID1,
        data,
        process.env.REACT_APP_USER_ID
      )
        .then((response) => {
            if(response.status === 200) {
                send(
                  process.env.REACT_APP_SERVICE_ID,
                  process.env.REACT_APP_TEMPLATE_ID2,
                  data,
                  process.env.REACT_APP_USER_ID
                )
            }else {
                setError(true)
            }
        })
        .then((response) => {
          setLoading(false)
          setSuccess(true)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
          setError(true)
        });
    setData(initialState)
  }
  return (
      <div className='bg-black  my-24 lg:w-[90%] mx-auto' id='contact'>
          <div className='md:w-full mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='lg:w-[42%] md:w-[90%] w-full px-4 md:px-0 mx-5 lg:mx-0 mb-10  mr-16 '> 
                   <Fade bottom={true}> <img src="/Imgs/contact.svg" className='w-full bg-cover' /></Fade>
                </div>
               <div className='md:flex-1  w-[95%] mx-auto  justify-items-start md:justify-start justify-center justify-self-start'>
               <div className="flex capitalize mb-8 md:mb-16 gap-x-2 text-center items-center md:justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Get Help
                        </span>
                    </div>
                   <form onSubmit={onSubmit}>
                    { 
                        console.log(process.env.REACT_APP_USER_ID),
                        error && (
                            <div id="alert-2" className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                                    Error Occured While 
                                </div>
                                <button onClick={() => setError(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-collapse-toggle="alert-2" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                          </div>
                        )
                    }
                    {
                        success && (
                            <div id="alert-3" className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                              Your Message was delivered successfully
                            </div>
                            <button type="button" onClick={() => setSuccess(false)}  className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-collapse-toggle="alert-3" aria-label="Close">
                              <span className="sr-only">Close</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                          </div>
                          
                        )
                    }
                   <div className='grid gap-x-7  md:grid-cols-2 grid-cols-1 gap-y-4 md:gap-y-7'>
                    <input type="text" onChange={onChange} value={data.name} name="name" className='py-5 col-span-2 md:col-span-1 rounded-md px-5 md:text-lg tracking-wide text-gray-700 font-semibold font-Poppins' placeholder="Name"  required/>
                    <input type="email" onChange={onChange} value={data.email} name = "email" className='py-5 rounded-md px-5 md:text-lg col-span-2 md:col-span-1 tracking-wide text-gray-700 font-semibold font-Poppins'  placeholder="Email" required />
                    <div className='col-span-2'>
                        <textarea placeholder="Message" onChange={onChange} value={data.message} name='message' className='py-5 md:h-[14rem] h-[8rem] rounded-md px-5 text-lg tracking-wide text-gray-700 font-semibold font-Poppins w-full' ></textarea>
                    </div>
                   <div className='col-span-2 md:w-[70%] md:mx-auto md:items-center md:justify-center flex items-start justify-start'>
                    <button className='bg-[#BE173F] md:justify-self-center md:-ml-0   md:w-[60%] mb-6 text-white text-lg font-Poppins px-10 py-4 rounded-lg'>{loading ? "Sending....": "Contact us"}</button>
                   </div>
                </div>
                   </form>
               </div>
            </div>
          </div>
      </div>
  );
}

export default Contact;
