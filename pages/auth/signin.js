import Header from "@/components/Header";
import PicMeUp from "../../public/picmeup-high-resolution-logo-transparent.png";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";

function SignIn({ providers }) {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <Image className="w-80" src={PicMeUp} />
      <p className="font-xs italic">
        This is not a REAL app, it is built for educational purposes only.
      </p>
      <div className="mt-40">
      {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
    
      
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log("Providers", providers)

  return {
    props: { providers },
  };
}

export default SignIn;
