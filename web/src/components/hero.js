import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
const maybeImage = (illustration) => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img
        className="w-full md:w-4/5 z-50 mt-10 mb-10 mx-auto"
        src={fluidProps.src}
        alt={illustration.image.alt}
      />
    );
  }
  return img;
};

function Hero(props) {
  const img = maybeImage(props.illustration);
  return (
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center border-b-2 border-gray-900">
      <div className="bg-blur"></div>
      {/* Left col */}
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full">{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8">
          <PortableText blocks={props.tagline} />
        </div>
        <form
          action="https://codestackr.podia.com/email_lists/75636/subscriptions"
          accept-charset="UTF-8"
          method="post"
          className="mx-auto"
        >
          <input name="utf8" type="hidden" value="✓" />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Email"
            className="border-b border-orange bg-transparent appearance-none focus:outline-none mx-auto text-orange my-6 p-4 md:my-2"
          />
          <input
            type="submit"
            value="Sign me up!"
            className="mx-auto ml-4 hover:underline bg-orange text-gray-800 font-bold rounded-full my-6 md:my-2 py-4 px-8 shadow-lg cursor-pointer"
          />
        </form>

        {/* {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )} */}
      </div>
      {/* Right col */}
      <div className="w-full md:w-3/5 py-6 text-center">
        <a href="https://vscodehero.com">{img}</a>
      </div>
    </div>
  );
}

export default Hero;
