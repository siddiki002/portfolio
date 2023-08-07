import './modal.css'

export default function Modal(props){
    return (
        <div className={`modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content">
            {props.children}

            </div>
        </div>
    )

}

export const ModalBody = props => {
    return <div className="modal__header">
        {props.children}
    </div>
}
export const ModalFooter = props => {
    return <div className="modal__footer">
        {props.children}
    </div>
}
