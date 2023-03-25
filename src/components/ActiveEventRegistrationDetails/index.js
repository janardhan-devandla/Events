import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {newList} = props
  const {registrationStatus} = newList
  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      return (
        <div className="registration-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="registration-image"
          />
          <p>
            A live performance brings so much to your relationship with dance
            seeing the can often truly in love totally love with Beautiful.
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case 'REGISTERED':
      return (
        <div className="registration-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registration-image"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="registration-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="closed-image"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p className="closed-description">Stay tuned. We will reopen</p>
        </div>
      )
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
