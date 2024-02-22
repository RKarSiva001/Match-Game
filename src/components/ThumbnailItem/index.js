import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails} = props
  const {thumbnailUrl} = thumbnailDetails

  return (
    <li className="app-item">
      <img className="app-image" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default ThumbnailItem
