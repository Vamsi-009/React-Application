  
function Profile(){
   const imagUrl ='./src/assets/profile.jpg';
    
   const handleClick = (e) => e.target.style.display = "none";
    return(<img onDoubleClick = {(e) => handleClick(e)} src={imagUrl} height={150} width={200}></img>);

}
export default Profile;