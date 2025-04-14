import React, { useState } from 'react';
import '../payoutDetails/payOutDetails.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import img from '../../../src/assets/paypal.png';
import { TbChartCandle } from "react-icons/tb";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Modal } from 'antd';
import { VscVerifiedFilled } from "react-icons/vsc";

const PayOutDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModals = () => {
    setIsModalOpens(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const timeout = () => {
    setTimeout(() => {
      setIsModalOpens(false);
    }, 2000);
  };

  return (
    <div className='payout-bg'>
      <div className='payout-wrapper'>
        <div className='payout-model-wrapper'>
          <div className='move-back'>
            <p className='back-arrow'><IoIosArrowBack /></p>
            <h3 className='back-text'>back</h3>
          </div>

          <div className='payout-model-holder'>
            <div className='payout-model-holder-one'>
              <div className='bank-details'>
                <div className='holder-bank-detailss'>
                  <div className='holder-bank-detailss-child'>
                    <p className='bank-icon'><RiBankFill /></p>
                    <h3>Bank details</h3>
                  </div>
                  <div className='radio-container'>
                    <input type="radio" className='radio' name='payment' />
                  </div>
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Account Name</h3></label>
                  <input type="text" placeholder='mighty solomon' className='bank-account-input' style={{ padding: "7px" }} />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Account Number</h3></label>
                  <input type="text" placeholder='4567  0012  3947  3478' className='bank-account-input' style={{ padding: "7px" }} />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Name</h3></label>
                  <input type="text" placeholder='Access bank' className='Access-bank-input' />
                </div>
              </div>
            </div>

            <div className='payout-model-holder-two'>
              <div className='paypal-details'>
                <div className='holder-bank-detailss'>
                  <div className='holder-bank-detailss-child'>
                    <p className='bank-icon'><img src={img} alt="paypal-icon" /></p>
                    <h3>Paypal</h3>
                  </div>
                  <div className='radio-container'>
                    <input type="radio" className='radio' name='payment' />
                  </div>
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Paypal email address</h3></label>
                  <input type="text" placeholder='mighty solomon' className='bank-account-input' />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Full name</h3></label>
                  <div className='bank-account-input'>
                    <input type="text" placeholder='mighty solomon' className='bank-account-inputs' />
                    <div className='ng'><h3>NG</h3></div>
                  </div>
                </div>
              </div>

              <button className='request-for-payment-btn' onClick={showModal}>
                <h3>Request For payment</h3>
              </button>
            </div>

            <Modal open={isModalOpen} onCancel={handleCancel} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }}>
              <div className='modal-bg'>
                <div className='payment-modal-header'>
                  <h3>Add amount to withdraw</h3>
                </div>

                <div className='amount-input-holder'>
                  <p className='amount'>Amount</p>
                  <input type="number" placeholder='#80000' className='amount-input' min={0} />
                </div>

                <div className='request-for-payment-btn-div'>
                  <button className='request-for-payment-btns' onClick={() => { timeout(); showModals(); }}>
                    <h3>Request For payment</h3>
                  </button>
                </div>
              </div>
            </Modal>

            <Modal open={isModalOpens} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }} closable={false}>
              <div className='success-bg'>
                <div className='verified-icon-holder'><VscVerifiedFilled className='verified-icon' /></div>
                <div className='successful-text-holder'>
                  <h3 className='successful-text'>Congratulations on successfully creating an event!!</h3>
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <div className='payout-history-bg'>
          <div className='payout-history-header'>
            <div className='payout-history'>
              <h3>Payout history</h3>
            </div>

            <div className='payout-history-input-wrapper'>
              <div className='payout-history-input-holder'>
                <input type="text" placeholder='search attended by name or phone number' className='payout-history-input' />
                <p className='search-icons'><CiSearch /></p>
              </div>

              <div className='payout-history-filter-holder'>
                <div className='filter'><p>filter by</p></div>
                <p className='filter-icon'><TbChartCandle /></p>
              </div>
            </div>

            <div className='table-bg'>
              <div className='body'>
                <table>
                  <thead>
                    <tr>
                      <th>Request Date</th>
                      <th>Event Name</th>
                      <th>Requested Amount</th>
                      <th>Status</th>
                      <th>Payment Date</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2025-03-25</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Paid<span className="status-dot green"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Startup Summit 2025</td>
                      <td>₦1,800,000</td>
                      <td><span className="status">Pending<span className="status-dot yellow"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Rejected<span className="status-dot red"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Paid<span className="status-dot green"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-25</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Paid<span className="status-dot green"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Startup Summit 2025</td>
                      <td>₦1,800,000</td>
                      <td><span className="status">Pending<span className="status-dot yellow"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Rejected<span className="status-dot red"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td>2025-03-18</td>
                      <td>Tech Conference 2025</td>
                      <td>₦800,000</td>
                      <td><span className="status">Paid<span className="status-dot green"></span></span></td>
                      <td>2025-03-26</td>
                      <td>Bank Transfer</td>
                    </tr>
                  </tbody>
                </table>

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
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PayOutDetails;
