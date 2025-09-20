import profilepic from './assets/profile.jpg'

function Card(){
   return(
    <div className="card">
        <img className='card-image' src={profilepic}></img>
        <h2 className='card-title'>Bro code</h2>
        <p className='card-text'>This is react application</p>
    </div>
   )
}
export default Card