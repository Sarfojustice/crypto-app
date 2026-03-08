import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">

        {/* Mobile: text first, then image. Desktop: image left, text right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:min-h-[780px]">

          {/* Text content - top on mobile, right on desktop */}
          <div className="order-1 lg:order-2 flex-1 max-w-full lg:max-w-[560px] pt-8 lg:pt-0">
            <h1
              className="text-[50px] sm:text-[68px] lg:text-[80px] leading-[1.05] text-gray-900 mb-5 lg:mb-7"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              The future of finance is here.
            </h1>

            <p
              className="text-[18px] lg:text-[20px] text-gray-700 mb-6 lg:mb-10 font-normal"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Trade crypto and more on a platform you can trust.
            </p>

            {/* Email signup - stacked on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-[17px] text-gray-900 placeholder-gray-400 border border-gray-300 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button className="w-full sm:w-auto px-8 py-4 text-[17px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>

          {/* Hero image - bottom on mobile, left on desktop */}
          <div className="order-2 lg:order-1 flex-shrink-0 w-full lg:w-[660px] mt-8 lg:mt-12">
            <img
              src="/hero.avif"
              alt="Coinbase app"
              className="w-full h-auto object-contain rounded-[40px] lg:rounded-[60px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
