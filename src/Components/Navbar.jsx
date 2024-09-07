import * as React from 'react';
import { Link , NavLink } from 'react-router-dom'
import logo from '../Images/logo.svg'
import NavModal from './NavModal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "95%",
//   height: "70vh",
//   bgcolor: '#014085',
//   border: '2px solid #000',
//   color: "#fff",
//   boxShadow: 24,
//   p: 4,
  
// };

export default function Navbar() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>

          <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/онас">О нас</NavLink></li>
            <li><NavLink to="/продукция">Продукция</NavLink></li>
            <li><NavLink to="/контакты">Контакты</NavLink></li>
          </ul>

          <a className='brand-number' href="tel:+998950322226">
            <div className='nav-number'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <g clip-path="url(#clip0_52_6)">
                    <path d="M14.6665 11.78V13.78C14.6672 13.9657 14.6292 14.1494 14.5548 14.3195C14.4804 14.4897 14.3713 14.6424 14.2345 14.7679C14.0977 14.8934 13.9362 14.989 13.7603 15.0485C13.5844 15.1079 13.398 15.13 13.2131 15.1133C11.1617 14.8904 9.19113 14.1894 7.45979 13.0667C5.84901 12.0431 4.48335 10.6774 3.45979 9.06665C2.33311 7.32745 1.63195 5.34731 1.41313 3.28665C1.39647 3.10229 1.41838 2.91649 1.47746 2.74107C1.53654 2.56564 1.63151 2.40444 1.7563 2.26773C1.8811 2.13102 2.033 2.02179 2.20232 1.947C2.37164 1.87221 2.55469 1.83349 2.73979 1.83332H4.73979C5.06333 1.83013 5.37699 1.9447 5.6223 2.15567C5.86761 2.36664 6.02784 2.65961 6.07313 2.97998C6.15754 3.62003 6.31409 4.24847 6.53979 4.85332C6.62949 5.09193 6.6489 5.35126 6.59573 5.60057C6.54256 5.84988 6.41903 6.07872 6.23979 6.25998L5.39313 7.10665C6.34216 8.77568 7.7241 10.1576 9.39313 11.1067L10.2398 10.26C10.4211 10.0807 10.6499 9.95722 10.8992 9.90405C11.1485 9.85088 11.4078 9.87029 11.6465 9.95998C12.2513 10.1857 12.8797 10.3422 13.5198 10.4267C13.8436 10.4723 14.1394 10.6355 14.3508 10.885C14.5622 11.1345 14.6746 11.453 14.6665 11.78Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_52_6">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>+998 95 032 22 26</p>
            </div>
          </a>

          <svg className='burger' onClick={() => setModalShow(true)}  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="16" fill="white" fill-opacity="0.1"/>
            <path d="M11 11H23V12.3333H11V11ZM11 15.6667H23V17H11V15.6667ZM11 20.3333H23V21.6667H11V20.3333Z" fill="white"/>
          </svg>


        
          <NavModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </nav>
  )
}
