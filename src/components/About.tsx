export default function About() {
  const misiList = [
    'Menyelenggarakan pendidikan kesetaraan berkualitas (Paket A, B, C).',
    'Mengembangkan potensi peserta didik melalui kegiatan life skill.',
    'Membangun kemitraan dengan pemerintah dan swasta untuk berdaya saing.',
    'Mewujudkan lingkungan belajar yang inklusif dan nyaman.',
  ];

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengenal PKBM Insan Mulia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed text-lg pl-4">
                PKBM Insan Mulia didirikan dengan semangat untuk memberikan kesempatan kedua bagi putra-putri bangsa yang belum memiliki kesempatan menyelesaikan pendidikan formal. Kami percaya bahwa pendidikan adalah kunci untuk membuka segala macam peluang kehidupan.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
                Dengan tenaga pengajar yang profesional dan kurikulum yang terstruktur, kami berkomitmen untuk membantu setiap peserta didik meraih cita-citanya melalui jalur pendidikan non-formal yang berkualitas dan diakui oleh negara.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🎯', title: 'Kurikulum Terstruktur', desc: 'Sesuai standar nasional' },
                { icon: '👨‍🏫', title: 'Pengajar Profesional', desc: 'Berpengalaman & bersertifikat' },
                { icon: '📜', title: 'Ijazah Resmi', desc: 'Diakui negara' },
                { icon: '💰', title: 'Biaya Terjangkau', desc: 'Untuk semua kalangan' },
              ].map((feature) => (
                <div key={feature.title} className="p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mt-2 group-hover:text-blue-700">{feature.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-600/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Visi</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Terwujudnya masyarakat pembelajar yang mandiri, berkarakter mulia, dan kompetitif.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg shadow-gray-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-4">
                {misiList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
