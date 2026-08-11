import location from '../../../assets/location-merchant.png'
import merchant from '../../../assets/be-a-merchant-bg.png'



const CustomerSatisfaction = () => {
    return (
        <div>


            <div className="hero bg-secondary rounded-2xl max-w-9/12 mx-auto mb-14 relative">


                <div className='absolute top-0 max-w-7xl'>
                    <img src={merchant} alt="" />
                </div>

                <div className="hero-content flex-col lg:flex-row-reverse p-7 pl-14">
                    <img
                        alt="Tailwind CSS hero component"
                        src={location}
                        className="max-w-sm "
                    />
                    <div className='p-7'>
                        <h1 className="text-3xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
                        <p className="py-6 text-gray-300">
                            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>
                        <div className='space-x-6  '>
                            <button className="btn btn-primary text-black rounded-3xl ">Become a Merchant</button>
                            <button className="btn bg-secondary text-primary rounded-3xl">Earn with ZapShift Courier</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default CustomerSatisfaction;