import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'   

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="c-container flexCenter innerWidth paddings">
            {/* left row */}
            <div className="c-left flexColStart">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='SecondaryText'>
                    We always ready to help by providing the best services for you.
                    <br />
                    We believe a good place to live can make your life better.
                </span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+12 234 543 6778</span>    
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+12 234 543 6778</span>    
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+12 234 543 6778</span>    
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+12 234 543 6778</span>    
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>

                        </div>
                    </div>
            </div>


            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact