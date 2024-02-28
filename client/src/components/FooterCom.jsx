import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
   <Footer container className="border border-t-8 border-teal-500">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
        <Link to ='/' className='font-bold dark:text-white text-4xl'
>
<span className='px-2 py bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
Anas
</span>
Shop
</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>  <Footer.Title title='About' />
          <Footer.LinkGroup col >
            <Footer.Link
              href='https://www.google.com'
              target="_blank"
              rel="noopener noreferrer">
                Google
            </Footer.Link>
            <Footer.Link
              href='https://www.facebook.com'
              target="_blank"
              rel="noopener noreferrer">
                Facebook
            </Footer.Link>
          </Footer.LinkGroup></div>
          <div>  <Footer.Title title='Follow us' />
          <Footer.LinkGroup col >
            <Footer.Link
              href='https://www.google.com'
              target="_blank"
              rel="noopener noreferrer">
                Google
            </Footer.Link>
            <Footer.Link
              href='https://www.facebook.com'
              target="_blank"
              rel="noopener noreferrer">
                Facebook
            </Footer.Link>
          </Footer.LinkGroup></div>
          <div>  <Footer.Title title='LEGAL' />
          <Footer.LinkGroup col >
            <Footer.Link
              href='https://www.google.com'
              target="_blank"
              rel="noopener noreferrer">
                Privacy Policy
            </Footer.Link>
            <Footer.Link
              href='https://www.facebook.com'
              target="_blank"
              rel="noopener noreferrer">
                Terms & condetions
            </Footer.Link>
          </Footer.LinkGroup></div>
        
          </div>
          
          <div>
            
          </div>
      </div>
      
    </div>
   </Footer>
  )
}
