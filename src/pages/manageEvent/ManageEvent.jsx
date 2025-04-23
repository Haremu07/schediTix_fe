import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../manageEvent/manageEvent.css'
import ajegunle from '../../assets/Frame 237815 (1).png'
import ay from '../../assets/Frame 237815 (2).png'
import fusion from '../../assets/fusion 236.png'
import party from '../../assets/Frame 237815 (3).png'



const ManageEvent = () => {
  const navigate = useNavigate()
  const [toggle, setToggle]= useState(false)
      const[count, setCount] = useState(0)
      const[active, setActive] = useState(0)

      
      
  return (
    <div className='upcoming-bg'>
    <div className='upcoming-headerss'>
        <div  style={{
          color : active === 0 ? "rgb(27, 26, 26)": ""
        }}className={`upcoming-headers-title-one ${active === 0 ? "the-border-bottom" : ""

        }`} onClick={()=>{

          setActive(0)}} >
            <h3>All events</h3></div> 
        <div  style={{
          color : active === 1 ? "rgb(27, 26, 26)": ""
        }}className={`upcoming-headers-title-two ${active === 1 ? "the-border-bottom" : ""

}`} onClick={()=>setActive(1)} ><h3>Upcoming events</h3></div>
        <div style={{
          color : active === 2 ? "rgb(27, 26, 26)": ""
        }} className={`upcoming-headers-title-three ${active === 2 ? "the-border-bottom" : ""

}`} onClick={()=>setActive(2)}><h3>Ongoing events</h3></div>
        <div style={{
          color : active === 3 ? "rgb(27, 26, 26)": ""
        }} className={`upcoming-headers-title-four ${active === 3 ? "the-border-bottom"  : ""

}`} onClick={()=>setActive(3)}><h3>Ended events</h3></div>
        <div><input type="text" placeholder='Search for your events' className='upcoming-headers-input'/></div>
    </div>
{active === 0 ? (
<div className='upcoming-wrappers'>
<div className='upcoming-headers'>
    <div className='upcoming-header-ones'><div><p>Media / Title</p></div></div>
    <div className='upcoming-header-twos' >
    <div className='upcoming-header-two-childs' >
    <p>Date & Time</p>
    <p>Tickets(sold)</p>
    <p>Revenue</p>
    <p>Status</p>
    </div>
    </div>
    <div className='upcoming-header-threes'><div><p>Actions</p></div></div>
</div>
<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={ajegunle} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='ongoing'>Ongoing</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(6)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 6 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5 >Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
        <img src={ay} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcomings'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(0)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 0 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one'  onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
        <img src={fusion} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='ongoing'>Ongoing</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(1)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 1 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
        <img src={party} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcomings'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(2)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 2 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two'onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
        <img src={ajegunle} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='ended'>Ended</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(3)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 3 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>

<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs' style={{backgroundColor:"pink"}}>
        <img src={party} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcomings'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icon' onClick={()=> {
            setToggle(!toggle)
            setCount(4)
        }
            }><PiDotsThreeOutlineFill /></div>
        {
            count === 4 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>

<div className='upcoming-event-info-wrappers'>
    <div className='upcoming-event-info-wrapper-ones'>
        <div className='upcoming-event-info-wrapper-one-imgs'>
        <img src={ay} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-twos'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcomings'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-threes'>
        <div className='dot-icons' onClick={()=>{
            setToggle(!toggle)
            setCount(5)
        } }><PiDotsThreeOutlineFill /></div>
        {
            count === 5 ?  toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='pagination-bgs'>
    <div className='pagination-wrappers'>
        <p className='arrows'><IoIosArrowBack /></p>
        <div className='nums'>1</div>
        <div className='nums'>2</div>
        <div className='nums'>3</div>
        <div className='nums'>4</div>
        <div className='nums'>5</div>
        <p className='dots'><PiDotsThreeOutlineFill /></p>
        <div className='nums'>10</div>
        <p className='arrows'><IoIosArrowForward /></p>
    </div>
</div>
</div>

) : active === 1 ? (
<div className='upcoming-wrapper'>
<div className='upcoming-header'>
    <div className='upcoming-header-one'><div><p>Media / Title</p></div></div>
    <div className='upcoming-header-two' >
    <div className='upcoming-header-two-child' >
    <p>Date & Time</p>
    <p>Tickets(sold)</p>
    <p>Revenue</p>
    <p>Status</p>
    </div>
    </div>
    <div className='upcoming-header-three'><div><p>Actions</p></div></div>
</div>
<div className='upcoming-event-info-wrapper'>
    <div className='upcoming-event-info-wrapper-one'>
        <div className='upcoming-event-info-wrapper-one-img'>
        <img src={ajegunle} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-two'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcoming'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-three'>
        <div className='dot-icon' onClick={()=>{
            setToggle(!toggle)
            setCount(0)
        } }><PiDotsThreeOutlineFill /></div>
        {
           count === 0 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>

<div className='upcoming-event-info-wrapper'>
    <div className='upcoming-event-info-wrapper-one'>
        <div className='upcoming-event-info-wrapper-one-img' style={{backgroundColor:"black"}}>
        <img src={party} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-two'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcoming'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-three'>
        <div className='dot-icon' onClick={()=> {
            setToggle(!toggle)
            setCount(1)
        }
            }><PiDotsThreeOutlineFill /></div>
        {
            count === 1 ? toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>

<div className='upcoming-event-info-wrapper'>
    <div className='upcoming-event-info-wrapper-one'>
        <div className='upcoming-event-info-wrapper-one-img'>
        <img src={ay} alt="" className='imagez' />
        </div>
        <p>Laugh with MC with wire-wire 1.0</p>
    </div>
    <div className='upcoming-event-info-wrapper-two'>
        <p>24/04/2025 - 11:00am</p>
        <p>350(220)</p>
        <p>#2,450,000</p>
        <p className='upcoming'>Upcoming</p>
    </div>
    <div className='upcoming-event-info-wrapper-three'>
        <div className='dot-icon' onClick={()=>{
            setToggle(!toggle)
            setCount(2)
        } }><PiDotsThreeOutlineFill /></div>
        {
            count === 2 ?  toggle && (
                <div className='boxs'>
                <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                <div className='boxs-three'><h5>Check in</h5></div>
            </div>
            ) : ""
        }
       
    </div>
</div>
<div className='pagination-bg'>
    <div className='pagination-wrapper'>
        <p className='arrow'><IoIosArrowBack /></p>
        <div className='num'>1</div>
        <div className='num'>2</div>
        <div className='num'>3</div>
        <div className='num'>4</div>
        <div className='num'>5</div>
        <p className='dot'><PiDotsThreeOutlineFill /></p>
        <div className='num'>10</div>
        <p className='arrow'><IoIosArrowForward /></p>
    </div>
</div>
</div>

) : active === 1 ? (
<div className='upcoming-wrapper'>
    <div className='upcoming-header'>
        <div className='upcoming-header-one'><div><p>Media / Title</p></div></div>
        <div className='upcoming-header-two' >
        <div className='upcoming-header-two-child' >
        <p>Date & Time</p>
        <p>Tickets(sold)</p>
        <p>Revenue</p>
        <p>Status</p>
        </div>
        </div>
        <div className='upcoming-header-three'><div><p>Actions</p></div></div>
    </div>
    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'>
            <img src={fusion} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='upcoming'>Upcoming</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(0)
            } }><PiDotsThreeOutlineFill /></div>
            {
               count === 0 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img' style={{backgroundColor:"black"}}>
            <img src={party} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='upcoming'>Upcoming</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=> {
                setToggle(!toggle)
                setCount(1)
            }
                }><PiDotsThreeOutlineFill /></div>
            {
                count === 1 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two'onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'>
            <img src={ajegunle} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='upcoming'>Upcoming</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(2)
            } }><PiDotsThreeOutlineFill /></div>
            {
                count === 2 ?  toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two'onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>
    <div className='pagination-bg'>
        <div className='pagination-wrapper'>
            <p className='arrow'><IoIosArrowBack /></p>
            <div className='num'>1</div>
            <div className='num'>2</div>
            <div className='num'>3</div>
            <div className='num'>4</div>
            <div className='num'>5</div>
            <p className='dot'><PiDotsThreeOutlineFill /></p>
            <div className='num'>10</div>
            <p className='arrow'><IoIosArrowForward /></p>
        </div>
    </div>
</div>

) : active === 2 ?(
<div className='upcoming-wrapper'>
    <div className='upcoming-header'>
        <div className='upcoming-header-one'><div><p>Media / Title</p></div></div>
        <div className='upcoming-header-two' >
        <div className='upcoming-header-two-child' >
        <p>Date & Time</p>
        <p>Tickets(sold)</p>
        <p>Revenue</p>
        <p>Status</p>
        </div>
        </div>
        <div className='upcoming-header-three'><div><p>Actions</p></div></div>
    </div>
    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'>
            <img src={ay} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ongoing'>Ongoing</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(0)
            } }><PiDotsThreeOutlineFill /></div>
            {
               count === 0 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'>
            <img src={fusion} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ongoing'>Ongoing</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=> {
                setToggle(!toggle)
                setCount(1)
            }
                }><PiDotsThreeOutlineFill /></div>
            {
                count === 1 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img' style={{backgroundColor:"aqua"}}>
            <img src={party} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ongoing'>Ongoing</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(2)
            } }><PiDotsThreeOutlineFill /></div>
            {
                count === 2 ?  toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two'onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>
    <div className='pagination-bg'>
        <div className='pagination-wrapper'>
            <p className='arrow'><IoIosArrowBack /></p>
            <div className='num'>1</div>
            <div className='num'>2</div>
            <div className='num'>3</div>
            <div className='num'>4</div>
            <div className='num'>5</div>
            <p className='dot'><PiDotsThreeOutlineFill /></p>
            <div className='num'>10</div>
            <p className='arrow'><IoIosArrowForward /></p>
        </div>
    </div>
</div>

) : active === 3 ?(
<div className='upcoming-wrapper'>
    <div className='upcoming-header'>
        <div className='upcoming-header-one'><div><p>Media / Title</p></div></div>
        <div className='upcoming-header-two' >
        <div className='upcoming-header-two-child' >
        <p>Date & Time</p>
        <p>Tickets(sold)</p>
        <p>Revenue</p>
        <p>Status</p>
        </div>
        </div>
        <div className='upcoming-header-three'><div><p>Actions</p></div></div>
    </div>
    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img' style={{backgroundColor:"blue"}}>
            <img src={ajegunle} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ended' >Ended</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(0)
            } }><PiDotsThreeOutlineFill /></div>
            {
               count === 0 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'>
            <img src={ay} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ended' >Ended</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=> {
                setToggle(!toggle)
                setCount(1)
            }
                }><PiDotsThreeOutlineFill /></div>
            {
                count === 1 ? toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>

    <div className='upcoming-event-info-wrapper'>
        <div className='upcoming-event-info-wrapper-one'>
            <div className='upcoming-event-info-wrapper-one-img'style={{backgroundColor:"yellow"}}>
            <img src={ajegunle} alt="" className='imagez' />
            </div>
            <p>Laugh with MC with wire-wire 1.0</p>
        </div>
        <div className='upcoming-event-info-wrapper-two'>
            <p>24/04/2025 - 11:00am</p>
            <p>350(220)</p>
            <p>#2,450,000</p>
            <p className='ended' >Ended</p>
        </div>
        <div className='upcoming-event-info-wrapper-three'>
            <div className='dot-icon' onClick={()=>{
                setToggle(!toggle)
                setCount(2)
            } }><PiDotsThreeOutlineFill /></div>
            {
                count === 2 ?  toggle && (
                    <div className='boxs'>
                    <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                    <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                    <div className='boxs-three'><h5>Check in</h5></div>
                </div>
                ) : ""
            }
           
        </div>
    </div>
    <div className='pagination-bg'>
        <div className='pagination-wrapper'>
            <p className='arrow'><IoIosArrowBack /></p>
            <div className='num'>1</div>
            <div className='num'>2</div>
            <div className='num'>3</div>
            <div className='num'>4</div>
            <div className='num'>5</div>
            <p className='dot'><PiDotsThreeOutlineFill /></p>
            <div className='num'>10</div>
            <p className='arrow'><IoIosArrowForward /></p>
        </div>
    </div>
</div>

) : active === 0 && (
  <div className='upcoming-wrappers'>
  <div className='upcoming-headers'>
      <div className='upcoming-header-ones'><div><p>Media / Title</p></div></div>
      <div className='upcoming-header-twos' >
      <div className='upcoming-header-two-childs' >
      <p>Date & Time</p>
      <p>Tickets(sold)</p>
      <p>Revenue</p>
      <p>Status</p>
      </div>
      </div>
      <div className='upcoming-header-threes'><div><p>Actions</p></div></div>
  </div>
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
            <img src={ajegunle} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='ongoing'>Ongoing</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(6)
          } }><PiDotsThreeOutlineFill /></div>
          {
             count === 6 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5 >Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={ay} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='upcomings'>Upcoming</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(0)
          } }><PiDotsThreeOutlineFill /></div>
          {
             count === 0 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={fusion} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='ongoing'>Ongoing</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(1)
          } }><PiDotsThreeOutlineFill /></div>
          {
             count === 1 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={party} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='upcomings'>Upcoming</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(2)
          } }><PiDotsThreeOutlineFill /></div>
          {
             count === 2 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two'onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={ajegunle} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='ended'>Ended</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(3)
          } }><PiDotsThreeOutlineFill /></div>
          {
             count === 3 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one'  onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs' style={{backgroundColor:"pink"}}>
          <img src={party} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='upcomings'>Upcoming</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icon' onClick={()=> {
              setToggle(!toggle)
              setCount(4)
          }
              }><PiDotsThreeOutlineFill /></div>
          {
              count === 4 ? toggle && (
                  <div className='boxs'>
                  <div className='boxs-one'  onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  
  <div className='upcoming-event-info-wrappers'>
      <div className='upcoming-event-info-wrapper-ones'>
          <div className='upcoming-event-info-wrapper-one-imgs'>
          <img src={ay} alt="" className='imagez' />
          </div>
          <p>Laugh with MC with wire-wire 1.0</p>
      </div>
      <div className='upcoming-event-info-wrapper-twos'>
          <p>24/04/2025 - 11:00am</p>
          <p>350(220)</p>
          <p>#2,450,000</p>
          <p className='upcomings'>Upcoming</p>
      </div>
      <div className='upcoming-event-info-wrapper-threes'>
          <div className='dot-icons' onClick={()=>{
              setToggle(!toggle)
              setCount(5)
          } }><PiDotsThreeOutlineFill /></div>
          {
              count === 5 ?  toggle && (
                  <div className='boxs'>
                  <div className='boxs-one' onClick={()=>navigate('/dashboard/create-event')}><h5>Create event</h5></div>
                  <div className='boxs-two' onClick={()=>navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
                  <div className='boxs-three'><h5>Check in</h5></div>
              </div>
              ) : ""
          }
         
      </div>
  </div>
  <div className='pagination-bgs'>
      <div className='pagination-wrappers'>
          <p className='arrows'><IoIosArrowBack /></p>
          <div className='nums'>1</div>
          <div className='nums'>2</div>
          <div className='nums'>3</div>
          <div className='nums'>4</div>
          <div className='nums'>5</div>
          <p className='dots'><PiDotsThreeOutlineFill /></p>
          <div className='nums'>10</div>
          <p className='arrows'><IoIosArrowForward /></p>
      </div>
  </div>
  </div>
  
  )} 
</div>
  )
}

export default ManageEvent