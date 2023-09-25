import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import footerBg from '../../../assets/images/footer-bg.png';
const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${footerBg})`}} className="container mx-auto pt-10 pb-3">
      <div className="grid grid-cols-4 gap-5 pb-4">
        <div className="address">
          <h2 className='text-lg font-semibold mb-3 text-pink-400'>Our Location</h2>
          <address>
            House#8, Road# 18, Block C, Mirpur 10, Dhake Bangladesh.
          </address>
        </div>
        <div className="flex flex-col items-center">
          <h2 className='text-lg font-semibold mb-3 text-pink-400'>Links</h2>
          <button className='text-md hover:text-pink-400'>About</button>
          <button className='text-md hover:text-pink-400'>Dental Services</button>
          <button className='text-md hover:text-pink-400'>Review</button>
          <button className='text-md hover:text-pink-400'>Blogs</button>
          <button className='text-md hover:text-pink-400'>Contract</button>
        </div>
        <div className="flex flex-col items-center">
          <h2 className='text-lg font-semibold mb-3 text-pink-400'>Services</h2>
          <button className='text-md hover:text-pink-400'>Emergency Dental Care</button>
          <button className='text-md hover:text-pink-400'>Check Up</button>
          <button className='text-md hover:text-pink-400'>Tooth Extraction</button>
          <button className='text-md hover:text-pink-400'>Treatment of personal Diseases</button>
          <button className='text-md hover:text-pink-400'>Check Up</button>
        </div>
        <div className="socallink">
          <h2 className='text-lg font-semibold mb-3 text-pink-400'>Follow Us</h2>
          <div className="text-xl flex items-center space-x-5">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="coppyRight text-center mt-4">
        <h2 className="text-lg text-gray-800">Copyright 2023 All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default Footer