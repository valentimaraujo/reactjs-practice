import React from 'react'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
// import axios from 'axios'
import {history} from '../../history'

import '../../app-assets/css/pages/authentication.css'
import Logo from '../../app-assets/images/pages/dribble_2-09_2x.png'

const Login = () => {
    const handleSubmit = values => {
        // axios.post('http://localhost:8000/v1/api/auth', values)
        //     .then(({data}) => {
        //         if (data) {
        //             localStorage.setItem('app-token', data)
        //             history.push('/')
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        localStorage.setItem('app-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RkFICesV8vFYVvFGMEfb6JGpB9YA397qjy2M53fXoMg')
        // history.push('/')
    }

    const validations = yup.object().shape({
        email: yup
            .string('Digite uma usuário valido!')
            .required('Digite uma usuário valido!'),
        password: yup
            .string('Digite uma senha valida!')
            .required('Digite uma senha valida!')
    })
    return (
        <section id="auth-login" className="row flexbox-container">
            <div className="col-xl-8 col-11">
                <div className="card bg-authentication mb-0">
                    <div className="row m-0">
                        <div className="col-md-6 col-12 px-0">
                            <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                <div className="card-header pb-1">
                                    <div className="card-title">
                                        <h4 className="text-center mb-2">Seja bem vindo à EvoDev</h4>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="divider">
                                            <div className="divider-text text-uppercase text-muted">
                                                <small>faça seu login</small>
                                            </div>
                                        </div>
                                        <Formik
                                            initialValues={{email: '', password: ''}}
                                            onSubmit={handleSubmit}
                                            validationSchema={validations}
                                        >
                                            <Form action="index.html">
                                                <div className="form-group mb-50">
                                                    <label className="text-bold-600" htmlFor="exampleInputEmail1">
                                                        Usuário
                                                    </label>
                                                    <Field type="email" className="form-control" name='email' placeholder="Usuário"/>
                                                    <ErrorMessage
                                                        component='div'
                                                        name='email'
                                                        className='text-danger'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-bold-600" htmlFor="exampleInputPassword1">Senha</label>
                                                    <Field type="password" className="form-control" name='password' placeholder="Senha"/>
                                                    <ErrorMessage
                                                        component='div'
                                                        name='password'
                                                        className='text-danger'
                                                    />
                                                </div>
                                                <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                                    <div className="text-left">
                                                        <div className="checkbox checkbox-sm">
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <a href="auth-forgot-password.html" className="card-link">
                                                            <small>Esqueci minha senha?</small>
                                                        </a>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary glow w-100 position-relative">
                                                    Entrar
                                                    <i id="icon-arrow" className="bx bx-right-arrow-alt"/>
                                                </button>
                                            </Form>
                                        </Formik>
                                        <hr/>
                                        <div className="text-center">
                                            <small className="mr-25">Não tem uma conta?</small>
                                            <a href="auth-register.html">
                                                <small>Cadastre-se</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                            <div className="card-content">
                                <img className="img-fluid" src={Logo} alt="MoneyCicle"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
