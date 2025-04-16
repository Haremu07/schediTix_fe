import { useEffect, useState } from "react"
import { FaUser, FaEnvelope, FaPhone, FaEye, FaEyeSlash, FaArrowLeft, FaPlus } from "react-icons/fa"
import "./profieSetting.css"
import DeletePopUp from "./DeletePopUp"

function ProfileSetting() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    deleteConfirm: "",
  })

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  })

  const [profileImage, setProfileImage] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true)
  }

const input = JSON.parse(localStorage.getItem(`input`))

console.log(input)

  return (
    <>
     {
        toggle && <DeletePopUp setToggle={setToggle}/>
      }
    <div className="profile-settings-container">
     
      {/* <div className="back-button">
        <FaArrowLeft className="back-icon" />
        <span>back</span>
      </div> */}
        <div className="profile-settings-container-small">

        
      <h1 className="profile-title">Profile Settings</h1>

      <form onSubmit={handleSubmit}>
      
        <div className="profile-picture-section">
          {/* <p className="section-label">profile picture</p> */}
          <label htmlFor="profile-picture-input" className="profile-picture-circle">
            {profileImage ? (
              <img src={profileImage || "/placeholder.svg"} alt="Profile" className="profile-image" />
            ) : (
              <FaPlus className="profile-picture-plus" />
            )}
          </label>
          <input
            type="file"
            id="profile-picture-input"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden-file-input"
          />
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Fullname</label>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullname"
                placeholder="FullName"
                value={input.fullname}
                onChange={handleInputChange}
                className="form-input"
                
              />

            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email address</label>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleInputChange}
                placeholder="enter your email"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Phone number</label>
            <div className="input-container">
              <FaPhone  className="input-icon" />
              {/* <p>+234</p> */}
              <input
                type="tel"
                name="phone"
                value={input.phoneNo}
                onChange={handleInputChange}
                placeholder="enter your phone number"
                className="form-input"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Change Password</h2>

          <div className="form-group">
            <label className="form-label">Old password</label>
            <div className="input-container">
              <input
                type={showPasswords.old ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                placeholder="enter old password"
                className="form-input password-input"
              />
              <button type="button" className="password-toggle" onClick={() => togglePasswordVisibility("old")}>
                {showPasswords.old ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">New password</label>
            <div className="input-container">
              <input
                type={showPasswords.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="enter new password"
                className="form-input password-input"
              />
              <button type="button" className="password-toggle" onClick={() => togglePasswordVisibility("new")}>
                {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm new password</label>
            <div className="input-container">
              <input
                type={showPasswords.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="re-enter new password"
                className="form-input password-input"
              />
              <button type="button" className="password-toggle" onClick={() => togglePasswordVisibility("confirm")}>
                {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        <button type="submit" className="update-button">
          Update Profile
        </button>
      </form>

      <div className="account-management">
        <h3 className="account-title">Account management</h3>
        <p className="delete-text">Delete account</p>
        <input
          type="text"
          name="deleteConfirm"
          value={formData.deleteConfirm}
          onChange={handleInputChange}
          placeholder="confirm your password to delete account"
          className="delete-input"
        />
        <button type="button" className="delete-button"
        onClick={handleToggle}
        >
          delete account
        </button>
      </div>
      </div>
      
    </div>
    </>

  )
}

export default ProfileSetting
