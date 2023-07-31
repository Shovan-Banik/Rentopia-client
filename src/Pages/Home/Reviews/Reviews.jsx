import { FaQuoteRight } from "react-icons/fa";
import riv1 from '../../../assets/review/for1.jpg'
import riv2 from '../../../assets/review/for2.jpg'
import riv3 from '../../../assets/review/for3.jpg'


const Reviews = () => {
    return (
        <div className="mb-24">
            <div className="flex justify-center pb-12">
                <div>
                    <h2 className="uppercase text-5xl md:text-7xl text-white font-bold">Testimonial</h2>
                    <div className="flex justify-center py-5"><FaQuoteRight className="text-3xl font-bold"></FaQuoteRight></div>
                    <h5 className="text-center text-3xl font-bold">SOME REVIEWS</h5>
                </div>
            </div>
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 mx-8 md:mx-0">
                <div className="card w-72 md:w-96  bg-base-100 shadow-xl relative">
                        <img className="w-16 h-16 rounded-full border-4 border-green-600 absolute top-0 right-0 -mr-8 -mt-8" src={riv1} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Kuddos Boyati</h2>
                        <p className="font-bold">Banker</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis ad illo nihil excepturi quam?</p>
                        <p>Rating: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className="card w-72 md:w-96 bg-base-100 shadow-xl relative">
                        <img className="w-16 h-16 rounded-full border-4 border-green-600 absolute top-0 right-0 -mr-8 -mt-8" src={riv2} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Kuddos Boyati</h2>
                        <p className="font-bold">Banker</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis ad illo nihil excepturi quam?</p>
                        <p>Rating: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className="card w-72 md:w-96 bg-base-100 shadow-xl relative">
                        <img className="w-16 h-16 rounded-full border-4 border-green-600 absolute top-0 right-0 -mr-8 -mt-8" src={riv3} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Kuddos Boyati</h2>
                        <p className="font-bold">Banker</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis ad illo nihil excepturi quam?</p>
                        <p>Rating: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;