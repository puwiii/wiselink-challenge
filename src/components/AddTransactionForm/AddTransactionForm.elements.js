import styled from "styled-components";

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: max-content;
`;

export const Title = styled.h2`
  font-size: 0.9rem;
`;

export const MainForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  flex-wrap: wrap;
`;

export const ValuesForm = styled.form`
  display: flex;
  flex-direction: column;
  /* padding: 2em 4em; */
  gap: 1em;
  flex: 1;
`;

export const Label = styled.label`
  align-self: flex-start;
`;

export const InputNumber = styled.input`
  padding: 0.67em;
  font-size: 1rem;
  text-align: right;
  outline: none;
  border: none;
  background: #efefef;
  border-radius: 100px;
  font-weight: 600;
`;

export const Button = styled.button`
  align-self: flex-end;
`;

export const ActionNav = styled.nav`
  display: flex;
  list-style: none;
`;

export const ActionItem = styled.li`
  padding: 0.67em 1em;
  font-weight: 600;
  border-bottom: ${({ isActive }) => isActive && "2px solid #285177"};
  color: ${({ isActive }) => isActive && "#285177"};
  cursor: pointer;
`;
