import LogoWhite from '../public/icons/logo-white.png';
import Image from 'next/image';
import popCorn from '../public/login-popcorn.png'

const Login = () => {
    return ( 
        <div className="auth">
            <div className="auth__wrapper">
                <div className="auth__left">
                <a href="" className="auth__logo">
                    <Image
                        
                        src={LogoWhite}
                        alt="Picture of the author"
                        className='auth__logo-image'
                    />
                    <span className='auth__logo-title'>CinemaFlix</span>
                </a>

                <div className="auth__left--content">
                    <h3>Ready to take the next step?</h3>
                    <h5>Create an account or sign in.</h5>
                    <p>By creating an account or logging in, you understand and agree to CinemaFlix&apos;s Terms. You also acknowledge our Cookie and Privacy policies.</p>
                </div>

                <div className="auth__left--image">
                    <Image
                    alt='popcorn'
                     src={popCorn}
                     />
                </div>

                </div>
                <div className="auth__right">
                   <div className="auth__form">
                        <div className="auth__form--title">
                           <h3>SignUp</h3> 
                        </div>
                        <form action="">
                            <div className="auth__formgroup">
                                <input type="text" placeholder='First Name'/>
                            </div>

                            <div className="auth__formgroup">
                                <input type="text" placeholder='Last Name'/>
                            </div>

                            <div className="auth__formgroup">
                                <input type="text" placeholder='Email'/>
                            </div>

                            <div className="auth__formgroup">
                                <input type="text" placeholder='Create password'/>
                            </div>

                            <div className="auth__formgroup">
                                <input type="text" placeholder='Country'/>
                            </div>

                            <div className="auth__formgroup">
                                <button type='submit' >Countinue</button>
                            </div>
                        </form>
                   </div>

                </div>
            </div>
        </div>
     );
}
 
export default Login;