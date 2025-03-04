import React from "react";

function About() {
  return (
    <div className="space m-auto flex w-[75vw] flex-col text-justify text-slate-900">
      <h2 className=" mt-16 text-2xl font-bold"> What is this ?</h2>
      <p className="mt-4">
        This project is created by{" "}
        <span className="font-bold ">Christopher Dubois</span>, a french
        computer science student. It is a non-commercial, open-source API linked
        to a complete database containing a tons of data about PSG History. From
        players to coaches and matches, you have everything you need to make a
        web or mobile app with data about the team, or just train with it, so
        dont wait and go for it.
      </p>
      <p className="mt-1">
        Check the{" "}
        <a
          href="/documentation"
          className="inline-block font-bold after:block after:h-[0.2rem] after:origin-center after:scale-x-0 after:rounded-xl after:transition-all after:duration-200 after:ease-in-out hover:after:scale-x-100 hover:after:bg-red-500 "
        >
          Documentation
        </a>{" "}
        to get started
      </p>
      <h2 className=" mt-4 text-2xl font-bold"> Is it licensed ?</h2>
      <p className="mt-4">
        This API is licensed under the{" "}
        <b>GNU Affero General Public License v3.0</b> (AGPL-3.0).
      </p>
      <div className="mt-2">
        <b>Terms of Use:</b>
        <ul className="mb-2 mt-2">
          <li>
            1. You may access and use this API for non-commercial purposes.
          </li>
          <li>
            2. You may contribute to the code via pull requests on GitHub.
          </li>
          <li>
            3. You must give appropriate credit to the original author by citing
            the <b>"PSGAPI" by Christopher Dubois</b>, and include a link to the
            original GitHub repository:{" "}
            <a
              href="https://github.com/christopherdbs/psgapi"
              className="inline-block font-bold after:block after:h-[0.2rem] after:origin-center after:scale-x-0 after:rounded-xl after:transition-all after:duration-200 after:ease-in-out hover:after:scale-x-100 hover:after:bg-red-500 "
            >
              https://github.com/christopherdbs/psgapi
            </a>
            .
          </li>

          <li>
            {" "}
            4. Any modifications made must be shared under the same license
            (AGPL-3.0).
          </li>
        </ul>
      </div>
      <p className="mt-1">
        Check the{" "}
        <a
          href="https://github.com/christopherdbs/psgapi/LICENSE.md"
          className="inline-block font-bold after:block after:h-[0.2rem] after:origin-center after:scale-x-0 after:rounded-xl after:transition-all after:duration-200 after:ease-in-out hover:after:scale-x-100 hover:after:bg-red-500 "
        >
          Project's LICENSE
        </a>{" "}
        on Github to get more details on the detailed term of use.
      </p>
      <h2 className=" mt-4 text-2xl font-bold"> What about the data ?</h2>
      <p className="mt-2">
        Every infos, photos, names belongs to their respective owners and is
        only used in the purpose of informing and illustrating the data
        provided. We will not take responsability for any misusing of the
        protected data provided.
      </p>
      <h2 className=" mt-4 text-2xl font-bold"> What's used behind ?</h2>
      <p className="mt-2">
        The API has been made with modern technologies such as Node.JS, Express,
        React, Vite, Tailwind, Jest. The API is hosted by IONOS and served by
        Netlify.
      </p>
      <h2 className=" mt-4 text-2xl font-bold"> How can I contribute ?</h2>
      <p className="mb-16 mt-2">
        You can find and contribute to the project on Github : URL. Soon will
        come a new feature to modify the data. Any help with the database will
        be grealty appreciated. Please do not hesitate to share with us any
        project you made with the API, we will be happy to share your project
        and put a link on the user projects page.
      </p>
    </div>
  );
}

export default About;
