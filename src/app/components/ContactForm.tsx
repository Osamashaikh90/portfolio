import React from 'react'

const ContactForm = () => {
  return (
      <div className='w-full p-6'>
          <form action="https://formspree.io/f/xnqkonnz" method="post" className='flex flex-wrap mobile:flex-nowrap gap-5 mobile:h-40 px-3'>
              <div className='flex flex-col gap-5 w-full'>
  <div className='flex flex-col gap-5 mobile:flex-row mobile:gap-[4%] '>
                      <input name="name" id="name" type="text" placeholder='Enter your Name' className='p-3 bg-inherit w-full mobile:w-[48%] rounded-xl border border-[#7d8590] '/>
                  <input name="Email" id="email" type="email" placeholder='Enter your E-mail' className=' bg-inherit w-full mobile:w-[48%] p-3 rounded-xl border border-[#7d8590] ' />
                  </div>
                  
                  <textarea name="message" id="message"  placeholder='Enter your message' className='h-[60%] bg-inherit rounded-xl border border-[#7d8590]  px-3 py-5 col-span-2' /></div>
              
              <div className='border bg-[#383a3d59] text-[#e6edf3] font-medium border-[#6c717b] row-span-2 rounded-xl w-full mobile:w-16 py-2 mobile:flex-none flex items-center justify-center mobile:pt-16 hover:bg-inherit'><button type="submit" className="mobile:rotate-90">Submit</button></div>
  
</form>
    </div>
  )
}

export default ContactForm