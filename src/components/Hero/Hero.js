import React, { useEffect } from "react";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
} from "./HeroStyles";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // after you drag the image away, it'll return to it's orginal postion
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const variants = {
    // when you hover over the element
    hover: {
      y: 15,
      transition: {
        // animated infinity
        yoy: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    // console log which displays inView whenever it changes
    // so when its in view its true when its not in view its false
    console.log(inView);
  }, [inView]);

  // logic for setting up animations
  return (
    <HeroSection id="hero">
      <HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
      <HeroImage className="guy" src="./images/hero-guy-1.png" />
      {/* CharacterContainer gets rid of the drag animation for resposiveness */}
      <CharacterContainer>
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="one"
          src="./images/image 1.png"
        />
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="two"
          src="./images/image 2.png"
        />
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="three"
          src="./images/image 3.png"
        />
      </CharacterContainer>

      <HeroContent>
        <Heading>We are Designify</Heading>
        <HeroText>
          A team of passionate designer and developers ready to provide unique
          and outstanding products for you!
        </HeroText>
        <ButtonContainer ref={ref}>
          <ButtonWrapper>
            <HeroButton
              //   onClick={toggleModal}
              onClick={() => console.log("TODO")}
            // if the element is in view and also if its in view we 
            // are changing the children of this component from Chat with us to email icon  
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
