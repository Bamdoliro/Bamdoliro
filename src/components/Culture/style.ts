import styled from "styled-components";
import { color } from '../../shared/styles/theme';

export const Culture = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    margin-top: 20%;
    width: 100vw;
    height: 100vh;

    background-color: ${color.white};
`;

export const Container = styled.div`
    position: absolute;

    left: 10%;
    width: 62.5%;
    height: 100%;
`;

export const SubExplains = styled.div`
    margin-top: 6rem;
    position: absolute;

    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
`;


