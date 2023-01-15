import styled from 'styled-components';
import * as T from '../../../shared/styles/text';

export const Label = styled.label`
    padding: 8px 16px;
    color: ${ ({ theme }) => theme.color.gray02 };
`

export const Paragraph = styled(T.SubTitle)`
    color: ${ ({ theme }) => theme.color.gray02 };
`

export const Radio = styled.input`
    display: none;
    &:checked + ${Paragraph} {
        color: ${ ({ theme }) => theme.color.gray04 };
    }
`;
