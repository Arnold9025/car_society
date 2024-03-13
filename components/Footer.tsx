import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='flex flex-col  mt-5 border-t border-black-100'>
       <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
          <div className='flex flex-col justify-start gap-6'>
            <p className='text-base'>
              Car Society 2024 <br />
              All rights reserved &copy;
            </p>
          </div>
          <div className='footer__links'>
         {footerLinks.map((link) => (
          <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link 
                key={item.title}
                href={item.url}
                >{item.title}</Link>
              ))}
          </div>
         ))}

       </div>
      
       </div>
       <div className='flex justify-between items-center flex-wrap mt-10 border-t border-black-100 sm:px-16 px-6 py-10'>
          <div className='footer__copyrights-link'>
            <p>@2024, Car Society. All rights reserved</p>
            <Link href="/" > Privacy Policy</Link>
            <Link href="/" > Term of use</Link>
          </div>
       </div>
    </footer>

)}

export default Footer