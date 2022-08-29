
function Navbar() {
  return (
    <nav className="w-full bg-blue1 fixed top-0 z-50">
      <div className="flex flex-row justify-between px-20 py-5">
        <img src="/images/logo-tedi-white.svg" alt="logo tedi" />
        <ul className="flex items-center text-white">
          <li><a href="#home" className="mr-5">Beranda</a></li>
          <li><a href="#home" className="mr-5">Tentang Kami</a></li>
          <li><a href="#home" className="mr-5">Fitur</a></li>
          <li><a href="#home" className="mr-5">Blog</a></li>
          <li><a href="#home" className="bg-white text-blue1 rounded p-2">Unduh Versi Beta</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;