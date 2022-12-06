import React from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 4));
        reset();
    }

    return (
        <div className='container'>
            <form className='form-cont' onSubmit={handleSubmit(onSubmit)}>
                <h1>Form Registration</h1>
                <div className='border-bot'></div>
                <div className="form-group">
                    <label htmlFor='fullname'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        placeholder="Enter Your Full Name"
                        {...register('fullname', {
                            required: 'Enter the full name!',
                            pattern: {
                                value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                                message: 'Do not use numbers, Cyrillic and symbols!'
                            },
                            minLength: {
                                value: 2,
                                message: 'Please enter a full name of at least 2 characters!'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Please enter the full name no more than 50 characters!'
                            }
                        })}
                    />
                    <div className='form-error'>
                        {errors.fullname && errors.fullname.message}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>E-mail Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your E-mail Address"
                        {...register('email', {
                            required: 'Enter your email!',
                            pattern: {
                                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                                message: 'Enter the correct email!'
                            }
                        })}
                    />
                    <div className='form-error'>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Your Phone Number"
                        {...register('phone', {
                            required: 'Enter your phone number!',
                            pattern: {
                                value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
                                message: 'The phone number is entered incorrectly!'
                            }
                        })}
                    />
                    <div className='form-error'>
                        {errors.phone && errors.phone.message}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                        {...register('password', {
                            required: 'Введите пароль!',
                            pattern: {
                                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                message: 'Lowercase and uppercase Latin letters, numbers, special characters. Minimum of 8 characters!'
                            }
                        })}
                    />
                    <div className='form-error'>
                        {errors.password && errors.password.message}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='city'>Choose Your Сity</label>
                    <select
                        className="form-control"
                        id="city"
                        {...register('city', {
                            required: 'You have not chosen your city!'
                        })}
                    >
                        <option value="">--- Select Your Сity ---</option>
                        <option value="Moscow">Moscow</option>
                        <option value="SaintPetersburg">Saint Petersburg</option>
                        <option value="Krasnodar">Krasnodar</option>
                        <option value="Kursk">Kursk</option>
                        <option value="Saratov">Saratov</option>
                    </select>
                    <div className='form-error'>
                        {errors.city && errors.city.message}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="male"
                            value="male"
                            name="gender"
                            {...register('gender', {
                                required: 'Введите пол!'
                            })}
                        />
                        <label className="form-check-label" htmlFor="male">male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                            {...register('gender', {
                                required: 'Введите пол!'
                            })}
                        />
                        <label className="form-check-label" htmlFor="female">female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            value="other"
                            name="gender"
                            {...register('gender', {
                                required: 'Choose a gender!'
                            })}
                        />
                        <label className="form-check-label" htmlFor="other">other</label>
                    </div>
                    <div className='form-error'>
                        {errors.gender && errors.gender.message}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="tnc"
                            {...register('tnc', {
                                required: 'You agree to all the terms and conditions!'
                            })}
                        />
                        <label className="form-check-label" htmlFor="tnc">I agree all terms & conditions</label>
                    </div>
                    <div className='form-error'>
                        {errors.tnc && errors.tnc.message}
                    </div>
                </div>
                <button className="btn-as" type='submit'>Create New Account</button>
            </form>
        </div>
    )
}

export default Form;