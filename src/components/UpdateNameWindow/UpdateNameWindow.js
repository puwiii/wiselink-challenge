import { useRef } from "react";
import styled from "styled-components";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateNameToWallet } from "../../reducers/walletReducer";

const WindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1em;
`;

const Window = styled.div`
  padding: 2em 4em;
  max-width: 920px;
  max-height: 720px;
  overflow: auto;
  background: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const FormUpdateName = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Input = styled.input``;

const Button = styled.button``;

export const Title = styled.h4``;

const CoinsWindow = ({ closeWindow, idWallet }) => {
  const outerContainerRef = useRef();
  const dispatch = useDispatch();

  const checkClickOutside = (e) => {
    e.target === outerContainerRef.current && closeWindow();
  };

  const update = (e) => {
    e.preventDefault();
    if (e.target.name.value.trim() === "") {
    } else {
      dispatch(updateNameToWallet(idWallet, e.target.name.value.trim()));
      closeWindow();
    }
  };

  return (
    <WindowContainer ref={outerContainerRef} onClick={checkClickOutside}>
      <Window>
        <Title>Actualizar nombre</Title>
        <FormUpdateName onSubmit={update}>
          <Input name="name" id="name" type="text" />
          <Button>
            <MdDriveFileRenameOutline />
            Cambiar nombre
          </Button>
        </FormUpdateName>
      </Window>
    </WindowContainer>
  );
};

export default CoinsWindow;
