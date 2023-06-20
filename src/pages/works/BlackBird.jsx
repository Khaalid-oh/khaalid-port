import React from 'react'

function BlackBird() {
  return (
    <div>
      <section>
        <div className="flex gap-x-2 mt-2 ml-6 w-3/4">
          <p className="text-xl text-midnight">Engineer</p>
          <h3 className="font-extrabold text-xl text-pink hover:underline">
            @BlackBird
          </h3>
        </div>
        <p className="text-midnight ml-6">Nov 2022 - June</p>
        <div className="ml-6 mt-2 sm:w-3/4">
         Wrote modern, performant,
          maintainable code for a diverse array of client and internal projects.
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript. TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlity. Communicate with
          multi-disciplinary teams of engineers, designers. producers, and
          clients on a daily basis
        </div>
      </section>
    </div>
  );
}

export default BlackBird
