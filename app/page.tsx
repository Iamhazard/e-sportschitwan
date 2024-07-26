
import MaxWidthWrapper from "@/components/Home/MaxwidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="gradient" />

      </div>
      <MaxWidthWrapper>
        <div className="py-[500px] mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-fuchsia-500  sm:text-6xl ">
            <span className=" text-fuchsia-500 bg-gradient-to-r from-blue-400 to-pink-500  bg-clip-text animate-pulse">
              ESAN {""} {""}
            </span>
            E-SPORT ASSOCIATION CHITWAN {""}

          </h1>
          <p className="mt-6 text-lg max-w-prose text-fuchsia-500 font-bold">
            Welcome to E-SPORT ASSOCIATION CHITWAN.Let's of Play Games & Fantasy in Virtual Reality

          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link className={buttonVariants()} href="/products">
              Browse Trending{" "}
            </Link>

          </div>
        </div>
      </MaxWidthWrapper>

    </>

  );
}
