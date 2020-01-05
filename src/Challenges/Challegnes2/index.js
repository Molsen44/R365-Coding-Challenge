import React, { Component } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #4447ff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
  margin-top: 20px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledTitle = styled.h4`
  margin: 10px 0px 0px 10px;
`;

const StyledForm = styled.form`
  margin: 10px 0px 10px 14px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 8px;
`;

const StyledInput = styled.input`
  margin-left: 10px;
`;

const StyledButton = styled.button`
  height: 20px;
  margin-left: 10px;
  background: #5fe201;
  border: 1px solid #5fe201;
  border-radius: 3px;
  color: #eee;
  font-size: 8px;
  text-transform: uppercase;
`;

const StyledResult = styled.p`
  font-size: 8px;
  margin: 0px 0px 0px 15px;
  padding: 1px 8px;
  background: #ffae44;
  border: 1px solid #ffae44;
  border-radius: 1px;
`;

class Challenge2 extends Component {
  constructor(test) {
    super(test);

    this.state = {
      input: "",
      out: ""
    };
  }

  handleInputChange = x => {
    this.setState({ input: x.target.value });
  };
  handleSubmit = x => {
    x.preventDefault();
    let parsedString = this.state.text.split(",");

    if (parsedString.length < 2) {
      for (let a = parsedString.length; a < 2; a++) {
        parsedString.push("0");
      }
    }

    let convertedString = parsedString.map(num => {
      if (isNaN(num) || num == "") {
        num = 0;
      } else {
        num = parseInt(num, 10);
      }
      return num;
    });
    let total = convertedString.redice((accumulate, mainValue) => {
      return accumulate + mainValue;
    });
    this.setState({
      out: total
    });
  };
  render() {
    return (
      <StyledCard>
        <StyledTitle>
          Part 2: Remove the maximum constraint for numbers.
        </StyledTitle>
        <StyledForm onSubmit={e => this.handleSubmit(e)}>
          <StyledLabel>
            Input &#8594;
            <StyledInput
              data-testid="input"
              value={this.state.text}
              onChange={e => this.handleInputChange(e)}
            />
          </StyledLabel>
          <StyledButton data-testid="submit" type="submit">
            Calculate
          </StyledButton>
          <StyledResult data-testid="output">{this.state.output}</StyledResult>
        </StyledForm>
      </StyledCard>
    );
  }
}
