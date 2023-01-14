import { useState } from "react";
import { useAuth } from "../utility/userContext";
import Modal from "./Modal";
import oielly from "@synevix/oielly-gateway";
import { ILogin } from "../interface/type";
import Link from "next/link";
import Image from "next/image";
import { IoMdCall, IoMdPerson, IoMdCart, IoMdArrowDropdown, IoMdClose, IoMdMenu } from 'react-icons/io'
import { useRouter } from "next/router";



const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={""}>
      <HeaderTop />
      <HeaderMiddle state={open} setState={setOpen} />
      <MobileHeader state={open} setState={setOpen} />
      <HeaderBottom />
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet sint possimus laborum voluptatibus maiores praesentium minus sunt dolores iste quaerat, dolorem quibusdam itaque in ipsum! Dolor animi fugiat eaque?</p>
       */}
    </div>
  );
};

const HeaderTop = () => {
  const [openModal, setModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<ILogin>({ email: 'guest@test.com', password: '16009A' } as ILogin)
  const router = useRouter();

  //TODO: Fix the signIn
  const signIn = () => {
    setModalOpen(false);
    oielly.guest.login({
      data: { ...user },
      response: (success: any, error) => {
        if (error) { console.error(error); return }

        if (success.message) {
          window.sessionStorage.setItem('auth-token', success.token)
          window.sessionStorage.setItem('referenceId', success.referenceId)
        }
        router.push('/account')
      }
    })

  }
  return (
    <div className="sm:px-4 lg:px-32 px-4 py-2 bg-black text-white flex justify-between">
      <p>Welcome to Butiq</p>
      <div>
        <Link href={"/contact-us"} className={"sr-only md:not-sr-only mx-5"}>
          <IoMdCall className="inline mx-2 text-lg" />
          Contact
        </Link>
        <Link href={"#"} className={"mx-5"} onClick={() => setModalOpen(true)}>
          <IoMdPerson className="inline mx-2 text-lg" />
          Sign in
        </Link>
      </div>

      <Modal isOpen={openModal} title={'Sign In'} setOpen={() => setModalOpen(false)} >
        <input type="email" placeholder={'Enter Email Address'} className={'w-full my-3 text-black border p-2 rounded-md '} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type={'password'} placeholder={'Enter Password'} className={'w-full my-3 text-black border p-2 rounded-md'} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <div className={'w-full flex justify-center mt-3'}>
          <button className={'p-3 w-5/12 mx-auto rounded-md bg-pink-700'} onClick={signIn}>Sign In</button>
        </div>
      </Modal >


    </div >
  );
}

const HeaderMiddle = (props: IMenuButton) => {
  const [search, setSearch] = useState<string>("");
  const [state] = useAuth();

  const onSearch = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={"grid px-4 sm:px-4 lg:px-32 py-5 gap-5 m-0 grid-cols-5"}>
      <Link href={"/"} className="col-span-4 md:col-span-1">
        <Image src={'/logo.png'} alt="logo" width="153" height="44" />
      </Link>
      <button className={"md:sr-only hover:text-pink-300 "} onClick={() => props.setState(true)}>
        <IoMdMenu className="text-3xl" />
      </button>
      <form
        onSubmit={(e) => onSearch(e)}
        className={"sr-only md:not-sr-only col-span-5 md:col-span-2"}
      >
        <input
          placeholder="Search..."
          value={search}
          className={'border w-full p-3 rounded-md'}
          type={'search'}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </form>
      <hr className={"col-span-5 md:sr-only"} />
      <div className="gap-8 col-span-5 md:col-span-2 flex justify-around items-center" >
        <a href="tel:233501043662" className={"flex flex-wrap gap-2"}>
          <IoMdCall className="inline text-4xl mt-2" />
          <div>
            <h4 className={'text-xs'} >Call Us Now </h4>
            <p className={'font-bold'} >(233) 247-049-416</p>
          </div>
        </a>

        <Link href={"/cart"} className={"flex flex-wrap gap-2"}>
          <div>
            <h4 className={'text-xs'} > My Cart </h4>
            <p className={'font-bold'} >GHC 0.00</p>
          </div>
          <div className={"relative"}>
            <IoMdCart className="inline text-4xl mt-2" />
            <span className={'bg-pink-600 p-3 rounded-full text-white absolute text-center -right-3'}>{state?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

 

const HeaderBottom = () => {
  return (
    <div className={"sr-only  md:not-sr-only flex justify-center"}>
      <ul className="flex flex-wrap">
        <li className="">
          <Link href={"/"} className={"px-5 py-2 font-bold"}>
            Home
          </Link>
        </li>
        <li className={"relative menu_item"}>
          <Link href="#product" className={"px-3 py-2 font-bold menu_item"}>
            Categories
            <IoMdArrowDropdown className={'text-xl inline'} />
          </Link>
          <ul className={"absolute w-full z-30 p-1 bg-white shadow-lg invisible"} style={{ borderWidth: '1px' }}>
            <li>
              <Link
                href={"/material/gtp"}
                className={"hover:bg-gray-100  block px-2 py-1"}
              >
                GTP
              </Link>
            </li>
            <li>
              <Link
                href={"/material/holland"}
                className={"hover:bg-gray-100  block px-2 py-1"}
              >
                Holland{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"/blog"} className={"px-5 py-2 font-bold"}>
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/about-us"} className={"px-5 py-2 font-bold"}>
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

const MobileHeader = (props: IMenuButton) => {
  const [search, setSearch] = useState<string>("");

  const onSearch = (e: any) => {
    e.preventDefault();
  };
 
  return (
    <div
      className={` fixed top-0 bottom-0 z-50 bg-gray-700  ${props.state === false ? " left-full -right-full" : " left-14 right-0"
        }`}
    >
      <button

        className={"text-white p-3 hover:text-pink-300 bg-transparent"}
        style={{ background: 'transparent' }}
        onClick={() => props.setState(false)}
      > <IoMdClose /></button>
      <form onSubmit={(e) => onSearch(e)} className={"my-5 mb-8 mx-3"}>
        <input
          placeholder="Search..."
          value={search}
          type={'search'}
          className={'w-full p-4 rounded-md'}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex flex-wrap flex-col gap-y-4">
        <li className="hover:bg-gray-500 cursor-pointer   p-4">
          <Link href={"/"} className={"px-5 py-2 font-bold text-white"}>
            Home
          </Link>
        </li>
        {/* <li className={"relative     p-4 pb-0"}>
          <Link href="#product" className={"px-3 py-2 font-bold menu_item"}>
            Categories
            <IoMdArrowDropdown className={'text-xl inline'} />
          </Link>
          <ul className={"absoluted w-full z-30 p-1 bg-white invisibles"} style={{ borderWidth: '1px' }}>
            <li>
              <Link
                href={"/material/gtp"}
                className={"hover:bg-gray-100  block px-2 py-1"}
              >
                GTP
              </Link>
            </li>
            <li>
              <Link
                href={"/material/holland"}
                className={"hover:bg-gray-100  block px-2 py-1"}
              >
                Holland{" "}
              </Link>
            </li>
          </ul>
        </li> */}
        <li className="hover:bg-gray-500 cursor-pointer  p-4">
          <Link href={"/blog"} className={"px-5 py-2 font-bold text-white"}>
            Blog
          </Link>
        </li>
        <li className="hover:bg-gray-500 cursor-pointer p-4">
          <Link href={"/about-us"} className={"px-5 py-2 font-bold text-white"}>
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

//     width: '20px',
//     height: '20px',
//     lineHeight: '12px',
//     top: '0',






interface IMenuButton {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
export default Header;
