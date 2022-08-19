import React from "react";
import Work from "../Components/Work";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 style={{color:"tomato"}} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <section>
          <a href="Raghav_shukla_Resume.pdf" download="Raghav_shukla_Resume.pd">
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "teal",
                border: "1px solid black",
                marginBottom: "15px",
                fontSize: "x-large",
                color: "white",
                borderRadius: "20px",
                padding:"7px"
              }}
            >
              Resume
            </Button>
          </a>
        </section>
        <h1 style={{color:"tomato"}} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
