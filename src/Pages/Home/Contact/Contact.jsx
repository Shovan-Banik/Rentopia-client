import { FaAddressBook, FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitterSquare, FaUser } from 'react-icons/fa';
import map from '../../../assets/map.png'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='my-12 px-5'>
            <h2 className='text-5xl text-green-600 font-bold text-center uppercase'>We Are Available <br />
                For You 24/7</h2>
            <p className='text-xl font-semibold text-center pt-5 pb-12'>OUR ONLINE SUPPORT SERVICE IS ALWAYS 24 HOURS</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <img src={map} alt="" />
                </div>
                <div className='grid items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                        <div>
                            <div className='flex items-center justify-center text-green-600'>
                                <FaAddressBook className='text-2xl font-bold mr-2'></FaAddressBook> <p className='text-2xl font-bold'>Address</p>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='text-xl font-semibold'>Balla Bazar, Kalihati, Tangail</p>
                                <p className='text-xl font-semibold'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-center text-green-600'>
                                <FaMailBulk className='text-2xl font-bold mr-2'></FaMailBulk > <p className='text-2xl font-bold'>Mail </p>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='text-xl font-semibold'>shovanbanik3@gmail.com</p>
                                <p className='text-xl font-semibold'>shovanbanik1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                        <div>
                            <div className='flex items-center justify-center text-green-600'>
                                <FaPhone className='text-2xl font-bold mr-2'></FaPhone> <p className='text-2xl font-bold'>Call</p>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='text-xl font-semibold'>+880-1794792728</p>
                                <p className='text-xl font-semibold'>+880-1580376568</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-center text-green-600'>
                                <FaUser className='text-2xl font-bold mr-2'></FaUser> <p className='text-2xl font-bold'>Social</p>
                            </div>
                            <div className='text-2xl font-bold flex justify-center gap-4 mt-4'>
                                <Link to='https://www.facebook.com/shovan.banik.9'><FaFacebook></FaFacebook></Link>
                                <Link to='https://www.linkedin.com/in/shovan-banik-a3542a177/'><FaLinkedin></FaLinkedin></Link>
                                <Link to='https://twitter.com/shovanbanik2'><FaTwitterSquare></FaTwitterSquare></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;