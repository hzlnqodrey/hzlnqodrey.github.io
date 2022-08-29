
function Footer() {
  return (
    <footer className="container mx-auto py-20">
      <div className="flex flex-row text-grey px-32 gap-16">
        <div className="basis-4/6">
          <div className="flex flex-row">
            <img src="/images/logo-tedi.svg" alt="logo tedi" className="mr-5 w-2/5" />
            <h2 className="">TeDi (Teman Disabilitas) adalah startup sosial yang bergerak dibidang penyedia  an aplikasi aksesibilitas dengan teknologi mahcine learning.</h2>
          </div>
          <div className="flex flex-row items-center gap-4 py-10">
            <h4>Didukung oleh</h4>
            <img src="/images/logo-kemendikbud.png" alt="logo kemendikbud" className="h-full" />
            <img src="/images/logo-google.png" alt="logo kemendikbud" className="h-full" />
            <img src="/images/logo-bangkit.png" alt="logo kemendikbud" className="h-full" />
          </div>
        </div>
        <div className="basis-2/6">
          <h2 className="font-bold mb-5">Kontak</h2>
          <ul className="">
            <li className="mb-3"><h4>Fakultas Matematika dan Ilmu Pengetahuan Alam, Program Studi Statistika, Universitas Padjadjaran.</h4></li>
            <li className="mb-3"><h4>info@temandisabilitas.com</h4></li>
            <li className="mb-3"><h4>@tedi.temandisabilitas</h4></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;