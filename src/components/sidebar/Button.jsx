import React from 'react';
import styled from 'styled-components';
import SignificonFlag from './../../assets/images/svg/siginificon';

const m3ReadOnlyLightSurface2 = `rgba(251,253,255,1)`;
const transparentBlack2 = `rgba(0,0,0,0.25)`;
const transparentMidnightBlue = `rgba(5, 21, 63, 0.55)`;
const transparentSlateBlue = `rgba(103,80,164,0.03)`;

export const UltimosAcessados = styled.div`
  border-radius: 8px;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Frame2608523 = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  align-self: stretch;
`;
export const Frame427318159 = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledSignificonFlag = styled(SignificonFlag)`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;


const UltimosAcessadosComponent = () => {
  return (
    <UltimosAcessados>
      <Frame2608523>
        <Frame427318159>
          <SignificonFlag />
          Últimos acessados
        </Frame427318159>
      </Frame2608523>
    </UltimosAcessados>
  );
};

export default UltimosAcessadosComponent;
