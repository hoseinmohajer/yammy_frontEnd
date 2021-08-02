import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from '../../../../../redux/slices/auth';
import Modal from "../../../../modal";
import {FormRow, FormControl} from './style';


interface RegisterInterface {
  showModal: boolean;
  toggleModal: Function
}
const Register = ({showModal, toggleModal}: RegisterInterface) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    date: '',
    address: '',
  });
  const { loading, data } = useSelector((state: {auth: { register: { data: { message: string }, loading: boolean } }}) => state.auth.register);
  useEffect(() => {
    if (!showModal && error) {
      setError('')
    }
    return () => setError('');
  }, [showModal, setError, error]);
  useEffect(() => {
    if (!loading && data && !data.message) {
      toggleModal(false);
    }
    if (data && data.message) {
      setError(data.message);
    }
  }, [loading, data, toggleModal]);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (error) {
      setError('');
    }
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  };
  const inputStyle = {
    height: '32px !important',
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
    border: '#fff solid 1px',
    borderRadius: 'inherit',
    marginBottom: '8px',
    padding: '4px 8px',
    fontFamily: 'poppins'
  };
  const labelStyle = {
    color: '#000',
    fontSize: 16,
    FontWeight: 'bold'
  };
  const requireStyle = {color: '#f00', fontSize: 16};
  const errorStyle = {color: '#f00', fontSize: '16px', width: '100%'};
  return (
    <Modal
      show={showModal}
      closeHandler={() => toggleModal(!showModal)}
      loading={false}
      header={{ title: 'Register'}}
      footer={{
        footerAlign: 'space-between',
        buttons: [
          {
            buttonText: 'Cancel',
            clickHandler: () => toggleModal(!showModal)
          },
          {
            buttonText: 'Register',
            clickHandler: () => {
              const {confirmPassword, ...data} = formData;
              if (confirmPassword !== data.password) {
                setError('Password doesn\'t match!');
                return false;
              }
              return dispatch(register(data))
            }
          },
        ]
      }}
    >
      <div style={{width: '100%', margin: "0 auto"}}>
        <form action="">
          <FormRow>
            <FormControl>
              <label style={labelStyle} htmlFor="username">Username <span style={requireStyle}>*</span></label>
              <input onChange={changeHandler} style={inputStyle} type="text" id="username" name="username" placeholder='Username' />
            </FormControl>
            <FormControl>
              <label style={labelStyle} htmlFor="email">Email <span style={requireStyle}>*</span></label>
              <input onChange={changeHandler} style={inputStyle} type="email" id="email" name="email" placeholder='Email' />
            </FormControl>
          </FormRow>
          <FormRow>
            <FormControl>
              <label style={labelStyle} htmlFor="password">Password <span style={requireStyle}>*</span></label>
              <input onChange={changeHandler} style={inputStyle} type="password" id="password" name="password" placeholder='Password' />
            </FormControl>
            <FormControl>
              <label style={labelStyle} htmlFor="confirm-password">Confirm Password <span style={requireStyle}>*</span></label>
              <input onChange={changeHandler} style={inputStyle} type="password" id="confirm-password" name="confirmPassword" placeholder='Confirm Password' />
            </FormControl>
          </FormRow>
          <FormRow>
            <FormControl>
            <label style={labelStyle} htmlFor="firstName">First Name</label>
            <input onChange={changeHandler} style={inputStyle} type="text" id="firstName" name="firstName" placeholder='First Name' />
            </FormControl>
            <FormControl>
            <label style={labelStyle} htmlFor="lastName">Last Name</label>
            <input onChange={changeHandler} style={inputStyle} type="text" id="lastName" name="lastName" placeholder='Last Name' />
            </FormControl>
          </FormRow>
          <FormRow>
            <FormControl>
            <label style={labelStyle} htmlFor="phoneNumber">Phone Number</label>
            <input onChange={changeHandler} style={inputStyle} type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' />
          </FormControl>
            <FormControl>
            <label style={labelStyle} htmlFor="date">Date</label>
            <input onChange={changeHandler} style={inputStyle} type="text" id="date" name="date" placeholder='--/--/----' />
        </FormControl>
          </FormRow>
      <FormControl>
          <label style={labelStyle} htmlFor="address">Address</label>
          <input onChange={changeHandler} style={inputStyle} type="text" id="address" name="address" placeholder='Address' />
    </FormControl>
        </form>
        {error && <div style={errorStyle}>{error}</div>}
      </div>
    </Modal>
  );
};

export default Register;
