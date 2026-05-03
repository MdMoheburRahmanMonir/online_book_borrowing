'use client'
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

export default function Basic() {
    const [eyeChange, setEyeChange] = useState(false) 
    const Redirect = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const MysubmitData = async (data) => {
        const { name, email, password, image } = data;

        const { data: res, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
            callbackURL: "/login"
        }, {
            onSuccess: (ctx) => {
                toast('Registration success  ')
                Redirect.push('/login')
            },
            onError: (ctx) => {
                toast(ctx.error.message)
                Redirect.push('/login')
            },
        });

    }

    return (
        <div className=" flex w-[350px] mx-auto py-5 items-center justify-center">
            <div className=" bg-white/2 shadow shadow-white/[0.2] backdrop-blur-lg rounded-xl">
                <Form className="space-y-3 pt-5 px-4  flex shadow flex-col gap-4" onSubmit={handleSubmit(MysubmitData)}>
                    <h1 className="text-center text-2xl font-bold text-blue-400/70 hover:text-blue-400">Sign In</h1>
                    <div className="space-y-3">
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label className="text-white">Name</Label>
                            <Input placeholder="Enter your Name" className={`rounded-full`} {...register("name")} />
                        </TextField>
                        <TextField
                            isRequired
                            name="image"
                            type="text"
                        >
                            <Label

                                className="text-white focus:!text-white">Image</Label>
                            <Input placeholder="Enter your Image link" className={`rounded-full`} {...register("image")} />
                        </TextField>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-white">Email</Label>
                            <Input placeholder="john@example.com" className={`rounded-full`} {...register("email")} />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type={eyeChange ? 'text' : 'password'}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-white">Password</Label>
                            <div className="w-full relative">
                                <div onClick={() => setEyeChange(!eyeChange)} className="text-white/70 absolute top-0 text-lg right-0 translate-y-1/2 -translate-x-1/2 " >
                                    {
                                        eyeChange ? <IoEyeOff /> : <IoEye />
                                    }

                                </div>
                                <Input placeholder=" your password" className={`rounded-full w-full`}  {...register("password")} />
                            </div>


                            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </div>
                    <button type="submit" className={`w-full hover:text-blue-400 bg-white/4  hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_5px_20px_0_rgba(31,38,135,0.2)]  border border-transparent hover:border-green-500/10`}>
                        Sign in
                    </button>

                </Form>
                <hr className="border-t border-gray-300/20 my-4" />
                <div className="text-center flex flex-col space-y-2 pb-3 gap-2">
                    <h1 className="text-[12px]">Sign in with or <Link href={'/login'} className="text-blue-400">Login</Link></h1>
                    <div className="flex justify-center text-3xl gap-4  ">
                        <div className="cursor-pointer" onClick={async () => {
                            const data = await authClient.signIn.social({
                                provider: "google",
                                callbackURL: "/home",
                            });
                        }}>
                            <FcGoogle />
                        </div>
                        <div className="cursor-pointer" onClick={async () => {
                            const data = await authClient.signIn.social({
                                provider: "github",
                                callbackURL: "/home",
                            });
                        }}>
                            <FaGithubSquare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}