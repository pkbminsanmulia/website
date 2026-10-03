export default function Programs() {
  const programs = [
    {
      icon: '📖',
      title: 'Paket A',
      subtitle: 'Setara SD',
      duration: '6 Tahun',
      description: 'Program kesetaraan pendidikan dasar untuk tingkat Sekolah Dasar. Cocok untuk yang ingin menyelesaikan pendidikan dasar.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      features: ['Materi setara SD', 'Ijazah resmi', 'Fleksibel'],
    },
    {
      icon: '🎓',
      title: 'Paket B',
      subtitle: 'Setara SMP',
      duration: '3 Tahun',
      description: 'Program kesetaraan pendidikan menengah pertama untuk wajib belajar. Langkah penting menuju pendidikan yang lebih tinggi.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      features: ['Materi setara SMP', 'Ijazah resmi', 'Life skill'],
      popular: true,
    },
    {
      icon: '🎓',
      title: 'Paket C',
      subtitle: 'Setara SMA',
      duration: 'Jurusan IPS',
      description: 'Program kesetaraan pendidikan menengah atas untuk persiapan karir atau melanjutkan ke perguruan tinggi.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      features: ['Materi setara SMA', 'Persiapan kuliah', 'Ijazah resmi'],
    },
  ];

  return (
    <section id="program" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Program Pendidikan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Kesetaraan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih program pendidikan yang sesuai dengan kebutuhan Anda. Semua program kami diakui oleh pemerintah dan memiliki ijazah resmi.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                program.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {program.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    Populer
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className={`bg-gradient-to-r ${program.color} p-8 text-white`}>
                <span className="text-4xl">{program.icon}</span>
                <h3 className="text-2xl font-bold mt-4">{program.title}</h3>
                <p className="text-white/80 text-sm">{program.subtitle}</p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">{program.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${program.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#kontak"
                  className={`block text-center mt-6 px-6 py-3 ${program.bgColor} ${program.textColor} font-semibold rounded-xl hover:opacity-80 transition-opacity`}
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-gray-200/50 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Tahukah Anda?
              </h4>
              <p className="text-gray-600">
                Ijazah dari PKBM memiliki nilai yang sama dengan ijazah dari sekolah formal. Anda bisa menggunakannya untuk melanjutkan pendidikan ke jenjang yang lebih tinggi atau melamar pekerjaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
