import styled from "styled-components";

export const BoxModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  box-sizing: border-box;
  width: 369px;
  height: 342px;
  position: absolute;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
export const HeaderModal = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #343b41;
  border-radius: 4px 4px 0px 0px;

  h2 {
    margin: 0;
    width: 140px;
    height: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  button {
    width: 11px;
    height: 26px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  button:hover {
    cursor: pointer;
    color: #f8f9fa;
  }
`;
export const FormModal = styled.form`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 15px;
  padding: 0 15px;
`;
export const InputsModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 325px;
  height: 75px;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    margin-top: 10px;
    color: #f8f9fa;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 95%;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    width: 340px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
    border-radius: 4px;
  }
`;
export const BtnModal = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 340px;
  height: 48px;
  margin-top: 30px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  :hover {
    background: #ff427f;
    border: 1.2182px solid #ff427f;
    border-radius: 4px;
    cursor: pointer;
  }
`;
