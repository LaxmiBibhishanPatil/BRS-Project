import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { logout } from "../../features/authSlice";

function UserProfile(){
    const dispatch = useDispatch()
    const navigate=useNavigate();
    const logoutUser= ()=>{
        console.log("logout")
    
        sessionStorage.clear()
        dispatch(logout())
        navigate( "/ratingRedirect");

      }

    //  const redirectRating = ()=>{
    //     window.location.href = '/Rating'; 
    //  }


    return (
        <>
        <UncontrolledDropdown>
                <DropdownToggle
                    caret
                    style={{color:"aqua",backgroundColor:"#000d6b"}}>
                    👤
                </DropdownToggle>
            <DropdownMenu style={{backgroundColor:" #000d6b"}}>
                <DropdownItem header>
                My Profile
                </DropdownItem>
                <DropdownItem>
                <Link to="/updateprofile">Edit Profile</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/viewProfile">View Profile</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/changePassword">Change Password</Link>
                </DropdownItem>
                
                <DropdownItem>
                <Link to="/myBooking">My Booking</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/ratingRedirect" onClick={logoutUser}  >Logout</Link>
                </DropdownItem>
                {/* <DropdownItem>
                <Link to="/ratingRedirect" onClick={redirectRating}  >Review</Link>
                </DropdownItem> */}
            </DropdownMenu>
            </UncontrolledDropdown>
        
      </>
      );
}

export default UserProfile;