import React from "react";
import { Container } from '../../globalStyles';
import {
    FeatureText,
    FeatureSection,
    FeatureTitle,
    FeatureWrapper,
    FeatureColumn,
    FeatureImageWrapper,
    FeatureName,
    FeatureTextWrapper,
} from './FeaturesStyles';

// When the use scrolls down or clicks about button in the nav 
// they are taken to features section of the app

import { featuresData } from "../../data/FeaturesData";

// jsx
function Features() {
    return (
        <FeatureSection id='about'>
            <Container>
                <FeatureTextWrapper>
                    <FeatureTitle>What We Do</FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                    {featuresData.map((el, index) => (
                        <FeatureColumn key={index}>
                            <FeatureImageWrapper className={el.imgClass}>
                                {el.icon}
                            </FeatureImageWrapper>
                            <FeatureName>{el.name}</FeatureName>
                            <FeatureText>{el.description}</FeatureText>
                        </FeatureColumn>
                    ))}
                </FeatureWrapper>
            </Container>
        </FeatureSection>
    )
}

export default Features;
