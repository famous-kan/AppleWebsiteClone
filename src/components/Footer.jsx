import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <div className=' w-2/3 mx-auto py-10'>

          <ul className='p-0 flex flex-col gap-2 text-xs text-gray-500 '>
            <li>
              <span id="footnote-1">
                1. Hearing&nbsp;Aid and Hearing&nbsp;Test: The Hearing&nbsp;Aid feature has received FDA authorization. The Hearing&nbsp;Test and Hearing&nbsp;Aid features are supported on AirPods&nbsp;Pro&nbsp;2 with the latest firmware paired with a compatible iPhone or iPad with iOS&nbsp;18 or iPadOS&nbsp;18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS&nbsp;Sequoia and later. It is intended for people with perceived mild to moderate hearing&nbsp;loss.
               <br/><br/>
                Hearing&nbsp;Protection: The Hearing&nbsp;Protection feature works with AirPods&nbsp;Pro&nbsp;2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS&nbsp;18, iPadOS&nbsp;18, or macOS&nbsp;Sequoia and later. Feature is only available in the U.S. and Canada. See <a href="https://support.apple.com/120850" target="_blank" rel="noopener noreferrer" className='text-slate-700'>support.apple.com/120850</a> for total attenuation and more information. The Hearing&nbsp;Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110&nbsp;dBA.
              </span>
            </li>

            <li><span id="footnote-2" class="tax-holiday-legal-hide">2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple&nbsp;Gift&nbsp;Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple&nbsp;Gift&nbsp;Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may&nbsp;apply.</span>
            </li>

            <li>To access and use all Apple&nbsp;Card features and products available only to Apple&nbsp;Card users, you must add Apple&nbsp;Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple&nbsp;Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch. </li>
    
            <li>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple&nbsp;Card.</li>
             
            <li>Learn more about how Apple&nbsp;Card applications are evaluated at <a href="https://support.apple.com/kb/HT209218" className='text-slate-700'>support.apple.com/kb/HT209218</a>.</li> 
            
            <li> Apple&nbsp;Intelligence is available in beta on all iPhone&nbsp;16 models, iPhone&nbsp;15&nbsp;Pro, iPhone&nbsp;15&nbsp;Pro&nbsp;Max, iPad&nbsp;mini (A17&nbsp;Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English (Australia, Canada, Ireland, New Zealand, South Africa, UK, or U.S.), as part of an iOS&nbsp;18, iPadOS&nbsp;18, and macOS&nbsp;Sequoia software update. Additional features and languages will be available in April, with more languages coming over the course of the year. Languages supported in 2025 include Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, and&nbsp;Vietnamese.
            </li>

          </ul>

          <hr />



          <div className='grid md:grid-cols-5 gap-10 my-1  mx-auto'>
          
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-1'>
              <p className='text-black text-xs my-1'>Shop and Learn</p>
              <Link to="/" className="footerlink">Store</Link>
              <Link to="/" className="footerlink">Mac</Link>
              <Link to="/" className="footerlink">iPad</Link>
              <Link to="/" className="footerlink">iPhone</Link>
              <Link to="/" className="footerlink">Watch</Link>  
              <Link to="/" className="footerlink">Vision</Link>  
              <Link to="/" className="footerlink">AirPods</Link>  
              <Link to="/" className="footerlink">AirTag</Link>  
              <Link to="/" className="footerlink">Accessories</Link>  
              <Link to="/" className="footerlink">Gift Cards</Link>  
              </div>

              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>Apple Wallet</p>
              <Link to="/" className="footerlink">Wallet</Link>
              <Link to="/" className="footerlink">Mac</Link>
              <Link to="/" className="footerlink">Apple Card</Link>
              <Link to="/" className="footerlink">Apple Pay</Link>
              <Link to="/" className="footerlink">Apple Cash</Link>  
              </div>
            </div>

            {/* ///////col2/////// */}
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-1'>
              <p className='text-black text-xs my-1'>Account</p>
              <Link to="/" className="footerlink">Manage Your Apple Account</Link>
              <Link to="/" className="footerlink">Apple Store Account</Link>
              <Link to="/" className="footerlink">iCloud.com</Link>
              </div>

              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>Entertainment</p>
              <Link to="/" className="footerlink">Apple One</Link>
              <Link to="/" className="footerlink">Apple TV+</Link>
              <Link to="/" className="footerlink">Apple Music</Link>
              <Link to="/" className="footerlink">Apple Arcade</Link>
              <Link to="/" className="footerlink">Apple Fitness+</Link>  
              <Link to="/" className="footerlink">Apple News+</Link>  
              <Link to="/" className="footerlink">Apple Podcasts</Link>  
              <Link to="/" className="footerlink">Apple Books</Link>  
              <Link to="/" className="footerlink">App Store</Link>  
              </div>
            </div>
            {/* ///////col3/////// */}
            <div className='flex flex-col gap-1'>
              
              <div className='flex flex-col gap-1'>
              <p className='text-black text-xs m-0 my-1'>App Store</p>
              <Link to="/" className="footerlink">Find a Store</Link>
              <Link to="/" className="footerlink">Genius Bar</Link>
              <Link to="/" className="footerlink">Today at Apple</Link>
              <Link to="/" className="footerlink">Group Reservations</Link>
              <Link to="/" className="footerlink">Apple Camp</Link>  
              <Link to="/" className="footerlink">Apple Store App</Link>  
              <Link to="/" className="footerlink">Certified Refurbished</Link>  
              <Link to="/" className="footerlink">Apple Trade In</Link>  
              <Link to="/" className="footerlink">Financing</Link>  
              <Link to="/" className="footerlink">Carrier Deals at Apple</Link>  
              <Link to="/" className="footerlink">Order Status</Link>  
              <Link to="/" className="footerlink">Shopping Help</Link>  
              </div>
            </div>
              {/* ///////col4/////// */}
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-1'>
              <p className='text-black text-xs my-1'>For Business</p>
              <Link to="/" className="footerlink">Apple and Business</Link>
              <Link to="/" className="footerlink">Shop for Business</Link>
              </div>

              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>For Education</p>
              <Link to="/" className="footerlink">Apple and Education</Link>
              <Link to="/" className="footerlink">Shop for K-12</Link>
              <Link to="/" className="footerlink">Shop for College</Link>
              </div>
              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>For Healthcare</p>
              <Link to="/" className="footerlink">Apple in Healthcare</Link>
              <Link to="/" className="footerlink">Mac in Healthcare</Link>
              <Link to="/" className="footerlink">Health on Apple Watch</Link>
              <Link to="/" className="footerlink">Health Records on iPhone and iPad</Link>
              </div>
              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>For Government</p>
              <Link to="/" className="footerlink">Shop fir Government</Link>
              <Link to="/" className="footerlink">Shop for Veterans and Military</Link>
              </div>
            </div>
              {/* ///////col5/////// */}
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-1'>
              <p className='text-black text-xs my-1'>Apple Values</p>
              <Link to="/" className="footerlink">Accessibility</Link>
              <Link to="/" className="footerlink">Education</Link>
              <Link to="/" className="footerlink">Environment</Link>
              <Link to="/" className="footerlink">Inclusion and Diversity</Link>
              <Link to="/" className="footerlink">Privacy</Link>
              <Link to="/" className="footerlink">Racial Equity and Justice</Link>
              <Link to="/" className="footerlink">Supply Chain</Link>
              </div>

              <div className='flex flex-col gap-1 py-1'>
              <p className='text-black text-xs m-0 my-1'>About Apple</p>
              <Link to="/" className="footerlink">Newsroom</Link>
              <Link to="/" className="footerlink">Apple Leadership</Link>
              <Link to="/" className="footerlink">Career Opportunities</Link>
              <Link to="/" className="footerlink">Investors</Link>
              <Link to="/" className="footerlink">Ethics & Compliance</Link>
              <Link to="/" className="footerlink">Events</Link>
              <Link to="/" className="footerlink">Contact Apple</Link>
              </div>
            </div>

          </div>
          <p className='text-xs text-gray-500 mt-4'>More ways to shop: <a href="/">Find an Apple Store</a> or <a href="/">other retailer</a> near you. Or call 1-8000-MY-APPLE.  </p>
          <hr/>
          <div className='flex justify-between items-center '>
            <p className='text-gray-500 text-xs m-0'>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <div>
            <a href='/' className='no-underline text-gray-500 text-xs hover:underline'>Privacy Policy</a> |&nbsp;
            <a href='/' className='no-underline text-gray-500 text-xs hover:underline'>Terms of Use</a> |&nbsp;
            <a href='/' className='no-underline text-gray-500 text-xs hover:underline'>Sale and Refunds</a> |&nbsp;
            <a href='/' className='no-underline text-gray-500 text-xs hover:underline'>Legal</a> |&nbsp;
            <a href='/' className='no-underline text-gray-500 text-xs hover:underline'>Site Map</a>
            </div>
            <a href='/' className='no-underline text-gray-500 text-xs'>Thailand</a>
          </div>


    </div>
  )
}

export default Footer