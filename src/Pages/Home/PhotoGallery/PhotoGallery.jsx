import gal1 from '../../../assets/gallery/gallery1.jpg'
import gal2 from '../../../assets/gallery/gallery6.jpg'
import gal3 from '../../../assets/gallery/gallery3.jpg'
import gal4 from '../../../assets/gallery/gallery4.jpg'
import gal5 from '../../../assets/gallery/gallery5.jpg'
import { Link } from 'react-router-dom'

const PhotoGallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            <div className='flex'>
                <div className='w-full'>
                    <img className='border-2 border-orange-600 h-48' src={gal1} alt="" />
                    <img className='border-2 border-orange-600 h-48' src={gal2} alt="" />
                </div>
                <div className='w-full h-full'>
                    <img className='h-full border-2 border-orange-600' src={gal3} alt="" />
                </div>
                <div className='w-full h-full'>
                    <img className='border-2 border-orange-600 h-48' src={gal4} alt="" />
                    <img className='border-2 border-orange-600 h-48' src={gal5} alt="" />
                </div>
            </div>
            <div className='flex items-center px-4'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold uppercase'>Our Photo Gallery</h2>
                    <h5 className='text-xl font-semibold py-4 uppercase'>Best of our
                        Event portfolio Photos</h5>
                    <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                    <Link to='/signUp'><button className='btn btn-neutral mt-4'>Register</button></Link>
                </div>

            </div>
        </div>
    );
};

export default PhotoGallery;