import './index.css'

const EventItem = props => {
  const {eventsList, onClickEvent} = props
  const {id, name, location, imageUrl} = eventsList

  const onClickedImage = () => {
    onClickEvent(id)
  }
  return (
    <li className="event-container">
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onClickedImage}
        />
      </button>
      <p className="event-title">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
