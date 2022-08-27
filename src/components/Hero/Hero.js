import React, { useEffect } from "react";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
//   ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
//   CharacterContainer,
} from "./HeroStyles";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const variant = {
    hover: {
      y: 15,
      transition: {
        yoy: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    console.log(inView);
  }, inView);

  // logic for setting up animations
  return (
    <HeroSection>
      <HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
      <HeroImage className="guy" src="./images/hero-guy-1.png" />
      <HeroImage className="one" src="./images/image 1.png" />
      <HeroImage className="two" src="./images/image 2.png" />
      <HeroImage className="three" src="./images/image 3.png" />

      <HeroContent>
        <Heading>We are Designify</Heading>
        <HeroText>
          A team of passionate designer and developers ready to provide unique
          and outstanding products for you!
        </HeroText>
        <ButtonContainer>
          <ButtonWrapper>
            <HeroButton
            //   onClick={toggleModal}
              className={inView ? "" : "corner"}
            >
              {inView ? (
                <>Chat with us</>
              ) : (
                <FiMail color="white" size="2.3rem" />
              )}
            </HeroButton>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
