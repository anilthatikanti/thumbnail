// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {eachThumb, selectedImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb

  const selectFunction = () => {
    selectedImage(id)
  }

  return (
    <button className="btn" type="button" onClick={selectFunction}>
      <img className="btn-Logo" src={thumbnailUrl} alt={thumbnailAltText} />
    </button>
  )
}
export default Thumbnail
