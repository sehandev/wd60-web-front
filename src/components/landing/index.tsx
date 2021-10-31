import React from "react";

export const Landing: React.FC = () => {
    return (
        <div
            className="leading-normal tracking-normal text-gray-200 bg-cover bg-fixed"
            style={{ backgroundImage: "url('/image/header.png')" }}
        >
            <div className="container flex flex-col min-h-screen mx-auto px-8 pt-8">
                <div className="flex items-center justify-between">
                    <a
                        className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="/"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-pink-400">
                            WD60
                        </span>
                    </a>

                    <a
                        className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="/app"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                            GO!
                        </span>
                    </a>
                </div>

                <div className="pt-24 md:pt-36 flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                            Frame Interpolation with
                            <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-400">
                                SOTA model
                            </span>
                        </h1>

                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                            Merging fastest "RIFE" and highest quality
                            "SoftSplat"
                        </p>

                        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label
                                    className="block text-blue-300 py-2 font-bold mb-2"
                                    htmlFor="emailaddress"
                                >
                                    Signup for our service
                                </label>
                                <input
                                    className="shadow appearance-none border p-3 w-full text-gray-700 focus:ring focus:outline-none transition"
                                    id="emailaddress"
                                    type="text"
                                    placeholder="you@somewhere.com"
                                />
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <button
                                    className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-full xl:w-3/5 p-12 overflow-hidden">
                        <img
                            className="mx-auto w-full md:w-2/5 transform -rotate-12 transition hover:scale-110 duration-1000 ease-in-out hover:rotate-12"
                            src="/image/wd40.png"
                        />
                    </div>

                    <div className="w-full pt-24 text-sm text-center md:text-left fade-in">
                        <span className="pr-1 text-gray-500">
                            &copy; WD60 2021 By
                        </span>
                        <a
                            className="no-underline hover:no-underline text-gray-400"
                            href="https://www.tailwindtoolbox.com"
                        >
                            AGGA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
