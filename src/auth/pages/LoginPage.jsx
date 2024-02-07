import { useState } from 'react';
import { Divider, TextInput, Card, Title } from '@tremor/react';
import { Dialog, DialogPanel } from "@tremor/react";
import { Calendar } from '../../assets';
import { UserIcon, UserCircleIcon, LockClosedIcon } from '@heroicons/react/24/solid'

export const LoginPage = () => {

    const [isRegisterOpen, setisRegisterOpen] = useState(false);

    return (
        <>
            <Card className='flex justify-center items-center min-h-screen bg-slate-100'>
                <div className='bg-gray-100 p-8 rounded shadow-md min-w-[320px] sm:min-w-[512px] lg:min-w-[620px]'>
                    <div className="flex items-centermin-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className='flex justify-center'>
                                <img className="w-28 h-28 items-center justify-center" src={Calendar} />
                            </div>
                            <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                Log in to CalendarApp
                            </h3>
                            <form action="#" method="post" className="mt-6">
                                <label
                                    htmlFor="email"
                                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                >
                                    Email
                                </label>
                                <TextInput
                                    type="email"
                                    icon={UserIcon}
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Your email"
                                    className="mt-2 mb-2"
                                />
                                <label
                                    htmlFor="password"
                                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                >
                                    Password
                                </label>
                                <TextInput
                                    type="password"
                                    icon={LockClosedIcon}
                                    id="password"
                                    name="password"
                                    autoComplete="password"
                                    placeholder="Type your password"
                                    className="mt-2"
                                />
                                <button
                                    type="submit"
                                    className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                                >
                                    Sign in
                                </button>
                            </form>
                            <Divider className='cursor-pointer transition ease-in-out text-gray-500 hover:text-gray-900' onClick={() => setisRegisterOpen(true)}>or Register Here!</Divider>
                            <Dialog open={isRegisterOpen} onClose={() => setisRegisterOpen(false)} static={true}>
                                <DialogPanel>
                                    <Title className="mb-3 text-center">Register</Title>

                                    <label
                                        htmlFor="name"
                                        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                    >
                                        Name
                                    </label>
                                    <TextInput
                                        type="input"
                                        id="name"
                                        icon={UserCircleIcon}
                                        name="name"
                                        placeholder="Your name"
                                        className="mt-2 mb-2"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                    >
                                        Email
                                    </label>
                                    <TextInput
                                        type="email"
                                        id="email"
                                        icon={UserIcon}
                                        name="email"
                                        autoComplete="email"
                                        placeholder="Your email"
                                        className="mt-2 mb-2"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                    >
                                        Password
                                    </label>
                                    <TextInput
                                        type="password"
                                        id="password"
                                        icon={LockClosedIcon}
                                        name="password"
                                        autoComplete="password"
                                        placeholder="Type your password"
                                        className="mt-2 mb-2"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                                    >
                                        Confirm Password
                                    </label>
                                    <TextInput
                                        type="password"
                                        id="password"
                                        icon={LockClosedIcon}
                                        name="password"
                                        autoComplete="password"
                                        placeholder="Type your password again"
                                        className="mt-2 mb-2"
                                    />

                                    <div className="mt-3">
                                        <button
                                            type="submit"
                                            className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </DialogPanel>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}