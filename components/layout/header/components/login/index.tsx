import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from '../../../../../redux/slices/auth';
import Modal from "../../../../modal";

interface LoginInterface {
  showModal: boolean;
  toggleModal: Function
}
const Login = ({showModal, toggleModal}: LoginInterface) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: '', password: ''});
  const { loading } = useSelector((state: {auth: {login: {loading: boolean}}}) => state.auth.login);
  useEffect(() => {
    if (!loading) {
      toggleModal(false);
    }
  }, [loading, toggleModal]);
  const inputStyle = {
    height: '32px !important',
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
    border: '#fff solid 1px',
    borderRadius: 'inherit',
    marginBottom: '16px',
    padding: '4px 16px',
    fontFamily: 'poppins'
  };
  const labelStyle = {
    color: '#000',
    fontSize: 16,
    FontWeight: 'bold'
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  };
  return (
    <Modal
      show={showModal}
      closeHandler={() => toggleModal(!showModal)}
      loading={loading}
      header={{ title: 'Login' }}
      footer={{
        footerAlign: 'space-between',
        buttons: [
          {
            buttonText: 'Cancel',
            clickHandler: () => toggleModal(!showModal)
          },
          {
            buttonText: 'Login',
            clickHandler: () => dispatch(login(formData)),
            loading
          },
        ]
      }}
    >
      <div style={{width: '100%', margin: "0 auto"}}>
        <form action="">
          <label style={labelStyle} htmlFor="email">Email</label>
          <input onChange={changeHandler} style={inputStyle} type="email" required id="email" name="email" placeholder='Email' />
          <br/>
          <label style={labelStyle} htmlFor="password">Password</label>
          <input onChange={changeHandler} style={inputStyle} type="password" id="password" name="password" placeholder='Password' />
        </form>
      </div>
    </Modal>
  );
};

export default Login;
