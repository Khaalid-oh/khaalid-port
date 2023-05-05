import React from 'react'

function Kabu() {
  return (
    <div>
      <section>
        <div className="flex gap-x-2 mt-2 ml-6 w-3/4">
          <p className="text-xl text-midnight">Engineer</p>
          <h3 className="font-extrabold text-xl text-pink hover:underline">
            @Kabu
          </h3>
        </div>
        <p className="text-midnight ml-6">Apr 2020 - May 2022</p>
        <div className="ml-6 mt-2 sm:w-3/4">
          As a Frontend Engineer at Kabu, an E-hailing service, I was
          responsible for designing and developing user interfaces that provide
          a seamless and intuitive experience for Kabu's customers. I also worked
          closely with the design team to implement visual and interaction
          designs, and collaborate with backend engineers to ensure seamless
          integration with the underlying systems.
        </div>
      </section>
    </div>
  );
}

export default Kabu
