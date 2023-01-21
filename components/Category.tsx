 
 
 
import cart2 from '../assets/images/categories/category3.jpg';
import cart3 from '../assets/images/categories/category5.jpg';
import cart4 from '../assets/images/categories/category1.jpg';
import Link from 'next/link';
import Image from 'next/image';
//import * as css from '../utility/styling';

const Category = () => {
    return ( 
        <div className="mx-4 sm:mx-4 lg:mx-32 pt-10 mt-7">
            <h2  className={'uppercase text-center font-bold text-2xl mb-4'} >Categories </h2>
           <div     className={'grid gap-8 md:grid-cols-2 lg:grid-cols-4'}>
                 <Link href={"/material/gtp"}>
                    <Image src={'/assets/images/categories/category1.jpg'} alt={'category'} width={100} height={100} className={''} />
                    <h4   className={'hover:bg-pink-500'}>GTP </h4>
                </Link>
             {/*    <Link to={"/material/woodin"}>
                    <Image source={cart2} alt={'category'} width={'100%'} className={css.categoryBox} />
                    <Heading  type={'H4'} text={'Woodin'} className={'hover:bg-pink-500'}/>
                </Link>
                <Link to={"/material/holland"}>
                    <Image source={cart3} alt={'category'} width={'100%'} className={css.categoryBox} />
                    <Heading  type={'H4'} text={'Holland'} className={'hover:bg-pink-500'}/>
                </Link>
                <Link to={"/material/atl"}>
                    <Image source={cart4} alt={'category'} width={'100%'} className={css.categoryBox} />
                    <Heading  type={'H4'} text={'ATL'} className={'hover:bg-pink-500'}/>
                </Link>*/}
            </div> 
        </div>

    );
};

export default Category;
