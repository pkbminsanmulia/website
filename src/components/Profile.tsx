export default function Profile() {
  const schoolData = [
    { label: 'NPSN', value: 'P2960810' },
    { label: 'Nama Sekolah', value: 'PKBM INSAN MULIA' },
    { label: 'Bentuk Pendidikan', value: 'PKBM (Pusat Kegiatan Belajar Masyarakat)' },
    { label: 'Status', value: 'Swasta' },
    { label: 'SK Pendirian', value: '563/9373/415.35/2015' },
    { label: 'Tanggal SK', value: '22-12-2015' },
    { label: 'Akreditasi', value: 'Terakreditasi B' },
    { label: 'Alamat', value: 'Jl. Raya Bandung Desa Bandung Kecamatan Diwek 61471' },
    { label: 'Kab/Kota', value: 'Jombang' },
    { label: 'Provinsi', value: 'Jawa Timur' },
    { label: 'Kode Pos', value: '61471' },
  ];

  return (
    <section id="profil" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Data Referensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Identitas Lembaga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi terkini berdasarkan NPSN P2960810
          </p>
        </div>

        {/* Data Cards */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">PKBM INSAN MULIA</h3>
                <p className="text-blue-200 text-sm">Pusat Kegiatan Belajar Masyarakat</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schoolData.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-500 sm:min-w-[140px]">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditation Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status Akreditasi</p>
              <p className="font-bold text-gray-900">Terakreditasi B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
