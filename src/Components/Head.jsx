import React from "react";
import Banner3 from "../assets/banner3.png";
import Banner4 from "../assets/banner4.png";
import Banner5 from "../assets/banner5.png";
import Banner6 from "../assets/banner6.png";
import Banner7 from "../assets/banner7.png";
import Banner8 from "../assets/banner8.png";

const Head = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center items-center">
        <div className=" w-full gap-6 flex flex-col justify-center items-center">
          <div className="w-full justify-center items-center gap-[39px] inline-flex">
            <div className="w-48 h-[0px] border border-black"></div>
            <h1 className="text-black font-galorine text-4xl md:text-6xl font-normal leading-10">
              HEARDS
            </h1>
            <div className="w-48 h-[0px] border border-black"></div>
          </div>{" "}
          <div className="text-center text-black max-w-lg">
            Here are just a few individuals, both from the past and present,
            whose voices were heard and had a significant impact.
          </div>
          <div className="flex flex-col lg:grid w-full grid-cols-1 lg:grid-cols-3 gap-12 mt-20 ">
            <article className="col-span-3 flex flex-col gap-6 items-center">
              <img src={Banner3} alt="" />
              <p className="text-black leading-7">
                Mahatma Gandhi achieved Indian independence on August 15, 1947,
                through nonviolent resistance, promoted social equality, and
                inspired peaceful movements worldwide.
              </p>
              <h3 className=" text-black text-2xl mt-6 font-galorine leading-10">
                Read up on few individuals, both from the past and present,
                whose voices were heard and had a significant impact.
              </h3>
            </article>
            <article className="col-span-2 flex flex-col gap-6 items-center">
              <img src={Banner4} alt="" />
              <p className="text-black leading-7">
                Sir Tim Berners-Lee was the British inventor of the World Wide
                Web in 1989, revolutionized communication and information
                access, advocate for open internet and user rights. $HEARD
              </p>
            </article>
            <article className="col-span-1 flex flex-col gap-6 items-center">
              <img src={Banner5} alt="" />
              <p className="text-black leading-7">
                Mother Teresa, a Catholic nun and humanitarian, dedicated her
                life to serving the poor and marginalized, founding the
                Missionaries of Charity and leaving a lasting impact as a Nobel
                Peace Prize laureate. $HEARD
              </p>
            </article>
            <article className="col-span-1 flex flex-col gap-6 items-center">
              <img src={Banner6} alt="" />
              <p className="text-black leading-7">
                Irena Sendler was a Polish social worker who rescued around
                2,500 Jewish children during the Holocaust. Sendler was arrested
                by the Nazis, sentenced to death, but escaped. She passed away
                in 2008, leaving behind a legacy of courage and compassion.
                $HEARD
              </p>
            </article>
            <article className="col-span-2 flex flex-col gap-6 items-center">
              <img src={Banner7} alt="" />
              <p className="text-black leading-7">
                Martin Luther King Jr. achieved significant advancements in the
                American civil rights movement, advocating for racial equality
                through nonviolent means, leading impactful marches, and
                inspiring generations. $HEARD
              </p>
            </article>
            <article className="col-span-2 mx-auto flex flex-col gap-6 items-center">
              <img src={Banner8} alt="" />
              <p className="text-black leading-7">
                Malala Yousafzai is a Pakistani activist for female education
                and the youngest Nobel Prize laureate. She was shot by the
                Taliban in 2012 but survived and continued her advocacy. She
                founded the Malala Fund to promote education for girls
                worldwide. $HEAR
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
