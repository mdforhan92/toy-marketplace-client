import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content grid lg:grid-cols-3 grid-cols-2 mt-8 ">
            <div>
            <div className='flex'>
            <Link to='/'>
                <img className='h-20 w-24 ' src={logo} alt="" />
                </Link>
                <Link to="/">
    <a className="btn btn-ghost normal-case text-xl grid grid-cols-1"><span className='text-green-700'>POP</span> <span className='text-red-600 text-3xl font-bold'>TOY</span></a>
    </Link>
            </div>
                
                <p>POP TOY offers a vast selection of high-quality and fun toys for kids of all ages. From classic board games to the latest action figures, we have something for everyone. Shop now and discover the joy of playtime with POP TOY!</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Swift Delivery</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <a href="https://www.facebook.com/profile.php?id=100007941765858">Facebook <FaFacebookSquare /></a>
                <a href="https://github.com/mdforhan92">GitHub<FaGithub /> </a>
                <a className="link link-hover">Mail</a>
                <a className="link link-hover">+880 1819 365933</a>
                <a className="link link-hover">Seattle, Washington, USA</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <a className="link link-hover">Copyright © 2023 - All right reserved</a>
            </div>
        </footer>
    );
};

export default Footer;