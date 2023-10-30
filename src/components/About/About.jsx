import React from 'react'
function About() {
  return (
    <div>
       <section className="container mx-auto px-6 py-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
      About Us
    </h2>
    <div className="flex items-center flex-wrap mb-10">
      <div className="w-full md:w-1/2 px-4">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Responsive to the core
        </h4>
        <p className="text-gray-600 mb-8">
          Every Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png" alt="responsive"/>
      </div>
    </div>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2 px-4">
        <img src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png" alt="component-friendly"/>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Component-friendly
        </h4>
        <p className="text-gray-600 mb-8">
          While you can do a lot with just utility classes, as a project grows it can be useful to codify common patterns into higher level abstractions.
        </p>
      </div>
    </div>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2 px-4">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Designed to be customized
        </h4>
        <p className="text-gray-600 mb-8">
          If it makes sense to be customizable, Tailwind lets you customize it. This includes colors, border sizes, font weights, spacing utilities, breakpoints, shadows, and tons more.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img src="https://images.unsplash.com/photo-1697530152990-2c47d3cf7d7a?auto=format&fit=crop&q=80&w=1512&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-60' alt="customizable"/>
      </div>
    </div>
  </section>
  <section className="bg-gray-100">
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded shadow py-2">
            <p className="text-gray-800 text-base px-6 mb-5">
              Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
            </p>
            <p className="text-gray-500 text-xs md:text-sm px-6">
              John Doe
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded shadow py-2">
            <p className="text-gray-800 text-base px-6 mb-5">
              Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
            </p>
            <p className="text-gray-500 text-xs md:text-sm px-6">
              Jane Doe
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded shadow py-2">
            <p className="text-gray-800 text-base px-6 mb-5">
              Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
            </p>
            <p className="text-gray-500 text-xs md:text-sm px-6">
              James Doe
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About