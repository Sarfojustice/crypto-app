export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Coinbase" className="h-11 w-11" />
          </a>

          {/* Nav links - desktop only */}
          <nav className="hidden lg:flex items-center gap-9">
            {['Cryptocurrencies', 'Individuals', 'Businesses', 'Institutions', 'Developers', 'Company'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[17px] font-semibold text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side - desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search */}
          <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Globe */}
          <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          {/* Sign in */}
          <a
            href="#"
            className="px-5 py-2.5 text-[17px] font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            Sign in
          </a>

          {/* Sign up */}
          <a
            href="#"
            className="px-5 py-2.5 text-[17px] font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Sign up
          </a>
        </div>

        {/* Right side - mobile */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Search */}
          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Sign up */}
          <a
            href="#"
            className="px-5 py-2.5 text-[17px] font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Sign up
          </a>

          {/* Hamburger */}
          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
