import { HTMLAttributes, ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io' 

const Modal = (props: IModal) => {
	if (props.isOpen) {
		return (
			<div className={'fixed inset-0 flex justify-center items-center z-10'} id={props.id} style={{ background: 'rgba(0,0,0,0.8)' }}>
				<div className={'bg-white relative rounded mt-0 -top-10 p-4 '} style={{ minWidth: '350px', maxWidth: '500px' }}>
					<IoMdClose className='text-black absolute cursor-pointer right-2' onClick={props.setOpen}/> 
					<h5 className={'font-bold text-base mb-3 mr-5 text-black'} style={props.style}>{props.title}</h5>
					{props.children}
				</div>
			</div>
		)
	} else { return <></> }
};

  

interface IModal extends Pick<HTMLAttributes<ReactNode>, 'children' | 'className' | 'style' | 'id'> {
	title?: string;
	isOpen?: boolean;
	setOpen?: () => void
}
export default Modal;
