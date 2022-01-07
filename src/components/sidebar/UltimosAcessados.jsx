import styled from 'styled-components';
import SignificonFlag from './../../assets/images/svg/siginificon';

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
export const UltimoAcessadosDefault = styled.p`
  color: ${(props) =>
    props.theme.colors.m3ReadOnlyLightSurface2};
  letter-spacing: 0.1px;
  font-family: ${(props) =>
    props.theme.fonts.m3TitleMedium.family};
  font-size: ${(props) =>
    props.theme.fonts.m3TitleMedium.size};
  font-weight: ${(props) =>
    props.theme.fonts.m3TitleMedium.weight};
  line-height: ${(props) =>
    props.theme.fonts.m3TitleMedium.lineHeight};
`;
