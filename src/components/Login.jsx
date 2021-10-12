import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center loginBg">
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Bienvenido a Guitar Pro! 
                </h2>
                <p class="mt-2 text-sm text-gray-600">Por favor Ingresa con tu cuenta</p>
            </div>
            <div class="flex flex-row justify-center items-center space-x-3">
                <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white hover:shadow-lg cursor-pointer transition ease-in duration-300"><img src="https://img.icons8.com/color/48/000000/google-logo.png"/></span>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <span class="h-px w-16 bg-gray-300"></span>
                <span class="text-gray-500 font-normal">OR</span>
                <span class="h-px w-16 bg-gray-300"></span>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>
                <div class="relative">
                    <div class="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                    <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="mail@gmail.com"/>
                </div>
                <div class="mt-8 content-center">
                    <label class="text-sm font-bold text-gray-700 tracking-wide">
                        Contraseña
                    </label>
                    <input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"/>
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Recuerdame
                            </label>
                        </div>
                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                <div>
                    <Link to='/dashboard' class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                        Sign in
                    </Link>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                        <span>¿No tienes cuenta?</span>
                    <a href="#" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Registrate</a>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login


{/* <button type="submit" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
Sign in
</button> */}
