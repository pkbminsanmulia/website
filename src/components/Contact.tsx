export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Alamat',
      value: 'Jl. Raya Bandung Desa Bandung Kecamatan Diwek 61471',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telepon / WhatsApp',
      value: '+62 852-1133-3890',
      color: 'bg-green-100 text-green-600',
      href: 'https://wa.me/6285211333890',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'pkbminsanmulia69@gmail.com',
      color: 'bg-purple-100 text-purple-600',
      href: 'mailto:pkbminsanmulia69@gmail.com',
    },
  ];

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Informasi Pendaftaran
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Silakan datang ke kantor kami atau hubungi kami melalui kontak di bawah ini untuk informasi pendaftaran.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href
                ? { href: item.href, target: item.title === 'Email' ? '_self' : '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <Wrapper
                  key={item.title}
                  {...wrapperProps}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.title}</p>
                    <p className="text-gray-900 font-semibold mt-1">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Operating Hours */}
            <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold">Jam Operasional</h4>
              </div>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium text-white">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium text-white">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium text-white">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 h-[400px]">
              <iframe
                title="Lokasi PKBM Insan Mulia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d112.262826!3d-7.5911638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78400555fc9f53%3A0x5d3449fa7735233c!2sPKBM%20Insan%20Mulia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 text-center">
              📍 PKBM Insan Mulia - Jl. Raya Bandung, Sugihwaras, Bandung, Kec. Diwek, Kabupaten Jombang, Jawa Timur 61471
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
