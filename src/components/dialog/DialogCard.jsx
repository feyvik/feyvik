/** @format */

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm, Controller } from 'react-hook-form';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import Styled from 'styled-components';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

const StyledButton = Styled.button`
	background-color: #073eaa;
	color: #fff;
  margin-top: 10px;
  cursor: pointer;
`;

const StyledHeader = Styled.h2`
  color: #073eaa;
`;
function DialogCard() {
	const [showMessage, setShowMessage] = useState(false);
	const [fullName] = useState('');
	const [email] = useState('');
	const [subject] = useState('');
	const [message] = useState('');
	const [formData, setFormData] = useState({});
	const form = useRef();
	const getFormErrorMessage = (name) => {
		return (
			errors[name] && <small className='p-error'>{errors[name].message}</small>
		);
	};

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm(fullName, email, subject, message);

	const onSubmit = (data) => {
		setFormData(data);
		emailjs
			.sendForm(
				'service_2hblhqx',
				'template_8husjq8',
				form.current,
				'6yUcHrxJlLXZIjfN-'
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowMessage(true);
					reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const dialogFooter = (
		<div className='flex justify-content-center'>
			<Button
				label='OK'
				className='p-button-text'
				autoFocus
				onClick={() => setShowMessage(false)}
			/>
		</div>
	);
	return (
		<div className='dialog-demo'>
			<Dialog
				visible={showMessage}
				onHide={() => setShowMessage(false)}
				position='top'
				showHeader={false}
				footer={dialogFooter}
				breakpoints={{ '960px': '80vw' }}
				style={{ width: '30vw' }}>
				<div className='flex justify-content-center flex-column pt-6 px-3'>
					<i
						className='pi pi-check-circle'
						style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
					<h5>Registration Successful!</h5>
					<p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
						Dear <b>{formData.fullName}</b>
						it'll be valid next 30 days without activation. Please check
						<b>{formData.email}</b> for activation instructions.
					</p>
				</div>
			</Dialog>

			<div className='card w-full'>
				<form
					ref={form}
					onSubmit={handleSubmit(onSubmit)}
					className='p-fluid mt-4 m-auto'>
					<div className='mb-3'>
						<StyledHeader>Let Work Together</StyledHeader>
						<small>
							Leave a message I will resmallly within 24hours (All fields are
							required)
						</small>
					</div>
					<div className='field'>
						<span className='p-float-label'>
							<Controller
								name='fullName'
								control={control}
								rules={{ required: 'Name is required.' }}
								render={({
									field: { onChange, onBlur, value },
									fieldState,
								}) => (
									<InputText
										onChange={onChange}
										value={value || ''}
										onBlur={onBlur}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>
								)}
							/>
							<label
								htmlFor='fullName'
								className={classNames({ 'p-error': errors.fullName })}>
								Full Name*
							</label>
						</span>
						{getFormErrorMessage('name')}
					</div>
					<div className='field mt-5'>
						<span className='p-float-label p-input-icon-right'>
							<i className='pi pi-envelope' />
							<Controller
								name='email'
								control={control}
								rules={{
									required: 'Email is required.',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'Invalid email address. E.g. example@email.com',
									},
								}}
								render={({
									field: { onChange, onBlur, value },
									fieldState,
								}) => (
									<InputText
										onChange={onChange}
										value={value || ''}
										onBlur={onBlur}
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>
								)}
							/>
							<label
								htmlFor='email'
								className={classNames({ 'p-error': !!errors.email })}>
								Email*
							</label>
						</span>
						{getFormErrorMessage('email')}
					</div>
					<div className='field mt-5'>
						<span className='p-float-label'>
							<Controller
								name='subject'
								control={control}
								rules={{ required: 'Subject is required.' }}
								render={({
									field: { onChange, onBlur, value },
									fieldState,
								}) => (
									<InputText
										onChange={onChange}
										value={value || ''}
										onBlur={onBlur}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>
								)}
							/>
							<label
								htmlFor='subject'
								className={classNames({ 'p-error': errors.subject })}>
								Subject*
							</label>
						</span>
						{getFormErrorMessage('subject')}
					</div>
					<div className='field mt-5'>
						<span className='p-float-label'>
							<Controller
								name='message'
								control={control}
								rules={{ required: 'Message is required.' }}
								render={({
									field: { onChange, onBlur, value },
									fieldState,
								}) => (
									<InputTextarea
										rows={5}
										cols={30}
										onChange={onChange}
										value={value || ''}
										onBlur={onBlur}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
										autoResize
									/>
								)}
							/>
							<label
								htmlFor='message'
								className={classNames({ 'p-error': errors.message })}>
								Message*
							</label>
						</span>
						{getFormErrorMessage('subject')}
					</div>
					<StyledButton type='submit'>Say Hi 👋</StyledButton>
				</form>
			</div>
		</div>

		// service_2hblhqx
	);
}

export default DialogCard;
