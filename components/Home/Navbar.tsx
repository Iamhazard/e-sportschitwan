import Link from "next/link";
import MaxWidthWrapper from "./MaxwidthWrapper";
import { buttonVariants } from "../ui/button";
import Image from "next/image";



const Navbar = () => {
    const user = null;
    return (
        <>
            <header className="relative bg-gray-900">

                <MaxWidthWrapper>
                    <div className="h-[1px] bg-white mt-12 ">

                        <div className="flex h-20 items-center ">
                            {/* mbl   */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Image alt="logo" src='/images/logo.png' width={140} height={120}
                                    />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                {/* //nav items */}
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({ variant: "btn" })}>
                                            Sign in{" "}
                                        </Link>
                                    )}
                                    {user ? null : (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    )}

                                    {user ? (
                                        <p></p>
                                    ) : (
                                        <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: "btn",
                                            })}>
                                            Register
                                        </Link>
                                    )}
                                    {user ? (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    ) : null}

                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span
                                                className="h-6 w-px bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )}
                                    {/* <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </>
    );
};

export default Navbar;