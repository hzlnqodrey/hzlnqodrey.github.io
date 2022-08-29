
function HomePage() {
  return (
    <div id="home">
      {/* section jumbotron */}
      <div id="jumbotron" className="bg-gradient-to-b from-blue1 to-blue2 relative">
        <div className="absolute bottom-0 left-0 -mb-1 -ml-1">
          <img src="/images/shape1.svg" alt="shape" className="w-screen" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center container mx-auto px-4 lg:px-10 xl:px-14 2xl:20">
          <img src="/images/mobile-app.png" alt="mobile app" className="max-w-sm mt-20 z-10"/>
          <div className="text-white mx-5 z-10 lg:order-first">
            <h1 className="text-4xl font-bold mb-6">Aplikasi aksesibilitas<br/>all-in-one untuk<br/>Indonesia!</h1>
            <h2 className="mb-6">TeDi (Teman Disabilitas) bertujuan untuk menciptakan kebermanfaatan teknologi yang mempermudah hidup para difabel.</h2>
            <button className="bg-yellow1 hover:bg-yellow2 text-black font-bold px-5 py-2 rounded-md">Pelajari Selengkapnya</button>
          </div>
        </div>
      </div>

      {/* section problem */}
      <div id="problem" className="py-20">
        <h1 className="text-center font-bold mb-20">Tedi hadir untuk menjawab<br/>permasalahan disabilitas di Indonesia</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto lg:px-10 xl:px-14 2xl:20">
          <div className="flex flex-col justify-center mb-10 md:mb-0">
            <img src="/images/ic-person1.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-center"><span className="font-bold">1 dari 10 orang di Indonesia</span><br/>adalah penyandang<br/>disabilitas*</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img src="/images/ic-person2.svg" alt="icon persons" className="max-h-40 mb-5" />
            <h2 className="text-center"><span className="font-bold">1 dari 2 difabel di Indonesia</span><br/>adalah penyandang<br/>disabilitas ganda**</h2>
          </div>
        </div>
        <h3 className="text-center mt-20 mx-10">* Riset World Health Organization pada tahun 2019. **Pusat Data dan Informasi Kementrian Kesehatan RI, 2019.</h3>
      </div>

      {/* section feature */}
      <div id="feature" className="py-20">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 container mx-auto md:px-10 xl:px-14 2xl:20">
          <div>
            <p className="text-9xl text-blue1 font-bold mb-10 text-center lg:text-start">Fitur<br/>TeDi</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-10">
            <div className="relative">
              <img src="/images/img-fitur1.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-5 left-5 flex flex-row shrink">
                <div className="bg-white w-16 h-16 rounded flex justify-center mr-3">
                  <img src="/images/ic-fitur1.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-white"><span className="font-bold">BISINDO</span><br/>Translator</h2>
              </div>
            </div>
            <div className="relative">
              <img src="/images/img-fitur2.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-5 left-5 flex flex-row">
                <div className="bg-white w-16 h-16 rounded flex justify-center mr-3">
                  <img src="/images/ic-fitur2.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-white"><span className="font-bold">Object</span><br/>Detection</h2>
              </div>
            </div>
            <div className="relative">
              <img src="/images/img-fitur3.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-5 left-5 flex flex-row">
                <div className="bg-white w-16 h-16 rounded flex justify-center mr-3">
                  <img src="/images/ic-fitur3.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-white"><span className="font-bold">Currency</span><br/>Detection</h2>
              </div>
            </div>
            <div className="relative">
              <img src="/images/img-fitur4.png" alt="bisindo translator" className="w-full" />
              <div className="absolute bottom-5 left-5 flex flex-row">
                <div className="bg-white w-16 h-16 rounded flex justify-center mr-3">
                  <img src="/images/ic-fitur4.svg" alt="bisindo" className="my-2" />
                </div>
                <h2 className="text-white"><span className="font-bold">Text</span><br/>Detection</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section tedinians */}
      <div id="tedinians" className="py-20">
        <div className="text-center">
          <h1 className="font-bold mb-5">Kami, TeDi Rangers</h1>
          <h2 className="mb-10">Membangun aplikasi TeDi untuk kamu, Tedinians</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-end container mx-auto px-5 lg:px-16 xl:px-20 2xl:px-40">
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-gilang.png" alt="gilang" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Gilang Martadinata</h3>
              <h3 className="h-7">Product Manager</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-julio.png" alt="julio" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Julio Fachrel</h3>
              <h3 className="h-7">Founder &<br/>ML Engineer</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-najma.png" alt="najma" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Najma</h3>
              <h3 className="h-7">Team Lead &<br/>ML Engineer</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-hazlan.png" alt="hazlan" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Hazlan M. Qodri</h3>
              <h3 className="h-7">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-pram.png" alt="pram" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Pratama Azmi</h3>
              <h3 className="h-7">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-bintang.png" alt="bintang" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Bintang Putra</h3>
              <h3 className="h-7">Software Engineer</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-gilang.png" alt="gilang" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Gilang Martadinata</h3>
              <h3 className="h-7">Product Manager</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-gilang.png" alt="gilang" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Gilang Martadinata</h3>
              <h3 className="h-7">Product Manager</h3>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-10">
            <img src="/images/img-gilang.png" alt="gilang" />
            <div className="text-center mt-2 mr-5">
              <h3 className="font-bold">Gilang Martadinata</h3>
              <h3 className="h-7">Product Manager</h3>
            </div>
          </div>
        </div>
      </div>

      {/* section blog */}
      <div id="blog" className="bg-gradient-to-b from-blue1 to-blue2 relative py-20">
        <div className="absolute bottom-0 left-0">
          <img src="/images/shape2.svg" alt="shape" className="w-screen" />
        </div>
        <div className="container mx-auto flex flex-col text-white px-10">
          <div className="mb-16">
            <h1 className=" font-bold">
              Harapan untuk TeDi
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <img src="/images/blog1.png" alt="blog" className="object-cover mb-5" />
            <div className="lg:ml-14">
              <img src="/images/ic-quote.svg" alt="quote" />
              <h1 className="text-justify">"Semoga inovasi yang dibangun oleh TeDi bisa menjadi contoh bagi anak-anak muda untuk terus bermanfaat bagi sesama."</h1>
              <h2 className="font-bold mt-6">Mochamad Ridwan Kamil</h2>
              <h2 className="">Gubernur Jawa Barat</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage;