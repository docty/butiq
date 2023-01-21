import { IoMdCar, IoMdCash, IoMdHelpBuoy } from "react-icons/io";
const Service = () => (
    <div className="mx-4 sm:mx-4 lg:mx-32 mt-12">
        <div className={'py-8 px-5 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 border shadow-sm rounded-md'}>
            <div className="flex">
                <IoMdCar className={'mr-4'} style={{ fontSize: '3rem' }} />
                <div className="">
                    <h4 className="font-bold">Free Delivering & Return </h4>
                    <p>Free delivering on orders</p>
                </div>
            </div>
            <div className="flex">
                <IoMdHelpBuoy className={'mr-4'} style={{ fontSize: '3rem' }} />
                <div className="">
                    <h4 className="font-bold">Customer Support 24/7 </h4>
                    <p>Instant access to perfect support</p>
                </div>
            </div>
            <div className="flex">
                <IoMdCash className={'mr-4'} style={{ fontSize: '3rem' }} />
                <div className="">
                    <h4 className="font-bold">100% Secure Payment </h4>
                    <p>We ensure secure payment</p>
                </div>
            </div>
           
        </div>
    </div>
);


export default Service;
