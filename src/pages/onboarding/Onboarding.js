import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Card as MuiCard,
  CardContent,
  Box,
  Grid,
  Button as MuiButton,
  Typography as MuiTypography,
  Select,
  MenuItem,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { withStyles } from "@material-ui/styles";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled(Card)`
  background: white;
  border-radius: 8px;
  padding: 24px 48px 32px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UtilitySelect = withStyles({
  root: {
    marginTop: 12,
    minWidth: 340,
  },
  select: {
    borderBottomColor: "black",
    "&:focus": {
      borderBottomColor: "black",
    },
  },
  icon: {
    display: "none",
  },
})(Select);

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LogoContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 40px;
  margin: 0 10px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CTABox = styled(Box)`
  max-width: 420px;
`;

const AuthButton = withStyles({
  root: {
    borderRadius: 20,
    background: "#af4bfb",
    "&:hover": {
      backgroundColor: "#9c36eb",
    },
    color: "white",
    width: 128,
    padding: "5px 0",
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
  },
})(MuiButton);

const SkipButton = withStyles({
  root: {
    color: "#af4bfb",
    marginLeft: 16,
  },
  label: {
    fontSize: "10px",
  },
})(MuiButton);

const Steps = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

const StepMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90px;
`;

const StepNumber = styled.div`
  width: 22px;
  height: 22px;
  margin-bottom: 8px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? "#AF4BFB" : "#B4B4B4")};
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

const StepLabel = styled(Typography)`
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  font-weight: ${(props) => (props.active ? 700 : 400)};
`;

const Description = styled(Typography)`
  font-size: 8px;
  line-height: 11px;
`;

const TitleLabel = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  color: #343434;
`;

const BodyLabel = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
  color: #343434;
`;

function Onboarding() {
  return (
    <React.Fragment>
      <Helmet title="Onboarding" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={12} xl={12}>
          <Wrapper m={6}>
            <TitleLabel gutterBottom>Select Utility</TitleLabel>
            <BodyLabel gutterBottom mt={2}>
              Select your utility provider...
            </BodyLabel>

            <UtilitySelect id="utility-select">
              <MenuItem value={1}>SDG&E</MenuItem>
              <MenuItem value={2}>LEAP</MenuItem>
            </UtilitySelect>

            <Logos>
              <LogoContainer>
                <img
                  alt="logo-colored"
                  src="/static/img/onboarding/logo-colored.svg"
                />
              </LogoContainer>
              <img
                alt="or"
                src="/static/img/onboarding/or.svg"
                style={{ width: 12 }}
              />
              <LogoContainer>
                <img
                  alt="sdge-logo"
                  src="/static/img/onboarding/sdge-logo.svg"
                  style={{ width: 30 }}
                />
                <img
                  alt="leap-logo"
                  src="/static/img/onboarding/leap-logo.svg"
                />
              </LogoContainer>
            </Logos>

            <CTABox mt={7}>
              <TitleLabel gutterBottom my={4}>
                Support Your Local Grid
              </TitleLabel>
              <ul>
                <li>
                  <BodyLabel gutterBottom my={4}>
                    Help reduce CO2 and grid blackouts by delaying charging
                    during high electricity demand.
                  </BodyLabel>
                </li>
                <li>
                  <BodyLabel gutterBottom my={4}>
                    Optiwatt will notify you prior to these rare events and
                    automatically resume charging immediately afterwards.
                  </BodyLabel>
                </li>
                <li>
                  <BodyLabel gutterBottom my={4}>
                    You can opt-out at anytime.
                  </BodyLabel>
                </li>
              </ul>

              <div>
                <AuthButton variant="contained">Authorize</AuthButton>
                <SkipButton>Skip for Later</SkipButton>
              </div>

              <Description mt={3}>
                By clicking Authorize, Leap, our 3rd party provider, will
                connect to your ultility company meter and enable Optiwatt to
                support the grid.
              </Description>
            </CTABox>
          </Wrapper>

          <Card m={6}>
            <CardContent>
              <Steps>
                <StepMark>
                  <img
                    alt="checkmark"
                    src="/static/img/onboarding/complete.svg"
                    style={{ width: 22, marginBottom: 8 }}
                  />
                  <StepLabel>Connect Tesla</StepLabel>
                </StepMark>
                <StepMark>
                  <img
                    alt="checkmark"
                    src="/static/img/onboarding/complete.svg"
                    style={{ width: 22, marginBottom: 8 }}
                  />
                  <StepLabel>Add Home</StepLabel>
                </StepMark>
                <StepMark>
                  <StepNumber active>3</StepNumber>
                  <StepLabel active>Select Utility</StepLabel>
                </StepMark>
                <StepMark>
                  <StepNumber>4</StepNumber>
                  <StepLabel>Select Electric Plan</StepLabel>
                </StepMark>
              </Steps>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Onboarding;
