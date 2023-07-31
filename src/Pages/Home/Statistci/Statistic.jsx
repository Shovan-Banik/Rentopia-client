import bgImg from '../../../assets/bg2.jpg'

const Statistic = () => {
    return (
        <div className="bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-16 px-4'>
                <div className='text-white text-center bg-black py-5 opacity-70'>
                    <h2 className='text-5xl font-bold'>2500</h2>
                    <p className='text-xl font-bold'>Clients</p>
                </div>
                <div className='text-white text-center bg-black py-5 opacity-70'>
                    <h2 className='text-5xl font-bold'>3055</h2>
                    <p className='text-xl font-bold'>Booking</p>
                </div>
                <div className='text-white text-center bg-black py-5 opacity-70'>
                    <h2 className='text-5xl font-bold'>1530</h2>
                    <p className='text-xl font-bold'>Apartment</p>
                </div>
                <div className='text-white text-center bg-black py-5 opacity-70'>
                    <h2 className='text-5xl font-bold'>50</h2>
                    <p className='text-xl font-bold'>Swimming</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;