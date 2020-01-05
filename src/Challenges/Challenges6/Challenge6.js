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

class Challenge6 extends Component {
  constructor(test) {
    super(test);

    this.state = {
      input: "",
      out: "",
      negNumb: []
    };
  }

  handleInputChange = x => {
    this.setState({ input: x.target.value });
  };
  changeString = parsedString => {
    let negNumb = [];
    if (parsedString.length < 2) {
      for (let a = parsedString.length; a < 2; a++) {
        parsedString.push("0");
      }
      let changeString = parsedString.map(num => {
        if (isNaN(num) || num == "" || num > 1000) {
          num = 0;
        } else {
          num = parseInt(num, 10);
        }
        if (num < 0) {
          negNumb.push(num);
        }

        return num;
      });
      this.setState(prevState => ({
        negNumb: [...prevState.negNumb, ...negNumb]
      }));
      return changeString;
    }
  };
  delimiterhandle = () => {
    let delimiter = this.state.text.split(/[\n,]+/);
    let delimiter = "";

    if (delimiter) {
      return delimiter[1];
    }
  };

  handleSubmit = async x => {
    x.preventDefault();

    let delimiter = this.delimiterhandle();
    let expession = new expession("[\n," + delimiter + "]+", "g");
    let parsedString = this.state.text.split(expession);
    let changeString = await this.changeString(parsedString);

    let total = changeString.redice((accumulate, mainValue) => {
      return accumulate + mainValue;
    });
    if (negNumb.length > 0) {
      this.setState({
        out: "Error: Negative Numbers Included in Input: " + negNumb
      });
    } else {
      this.setState({
        out: total
      });
    }
  };
  render() {
    return (
      <StyledCard>
        <StyledTitle>
          Part 6:Support 1 custom delimiter of a single character. .
        </StyledTitle>
        <StyledForm onSubmit={x => this.SubmitContorl(x)}>
          <StyledLabel>
            Input &#8594;
            <StyledInput
              data-testid="input"
              value={this.state.text}
              onChange={x => this.handleInput(x)}
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
