import React from 'react'

function Combinator() {
  return (
    <div>
      <section>
        <div className="flex gap-x-2 mt-2 ml-6 w-3/4">
          <p className="text-xl text-midnight">Trainee</p>
          <h3 className="font-extrabold text-xl text-pink hover:underline">
            @Y Combinator
          </h3>
        </div>
        <p className="text-midnight ml-6">Nov 2019 - Sep 2020</p>
        <div className="ml-6 mt-2 sm:w-3/4">
          As a Fullstack intern working at Y Combinator, I was able to have the
          opportunity to work on cutting-edge technologies and build innovative
          web applications. I also had the opportunity to collaborate with a talented team of
          developers and gain valuable experience in developing and deploying
          software solutions.
        </div>
      </section>
    </div>
  );
}

export default Combinator
