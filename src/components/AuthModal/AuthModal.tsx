import React from 'react';
import Modal from "../../layout/Modal/Modal";

interface IAuthModalProps {
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal = (props: IAuthModalProps) => {
    return (
        <Modal toggleModal={props.toggleModal}>
            <form method='POST'>
                <div>
                    <input type='text' placeholder='username' />
                </div>
                <div>
                    <input type='text' placeholder='password'/>
                </div>
                <button>Login</button>
            </form>
        </Modal>
    );
};

export default AuthModal;