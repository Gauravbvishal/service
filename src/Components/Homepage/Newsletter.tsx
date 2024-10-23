"use client"
import { useState } from "react";


export const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageState, setMessageState] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      setMessageState("Thank you for subscribing!"); 
    }, 1000);
  };

  return (
    <section className="container mx-auto m-6 max-w-7xl px-4 sm:px-6 lg:px-8 relative font-serif ">
      <div className='absolute inset-0 bg-yellow'></div>

      <div className="grid items-left align-left gap-2  py-[15%] px-[6%] dark:bg-zinc-900 md:p-[6%] lg:grid-cols-2 relative z-20">
        <div>
        <h1 className='text-4xl font-bold text-white justify-left'>
          Join Our News Letter
        </h1>
          <p className="mt-5 text-lg text-neutral-200 text-justify">
            Join our newsletter to get new posts before anyone else, I&apos;ll
            send you an email with links to all of the articles.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="gap-3 md:flex">
            <input
              type="email"
              className="peer block w-full rounded-md border-gray-300 bg-black py-3 pl-7 pr-12 text-white focus:border-white focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Your Email"
              autoComplete="email"
              required
              onChange={(e) => setMail(e.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full rounded-md bg-white py-3 px-5 text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-opacity-60 md:mt-0 md:w-auto"
            >
              {!loading ? (
                "SUBSCRIBE"
              ) : (
                <div className="flex w-full items-center justify-center">
                 
                </div>
              )}
            </button>
          </div>

          {messageState && (
            <p className={`mt-2 ${loading ? "text-pink-500" : "text-green-400"} dark:text-green-400`}>
              {messageState}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
