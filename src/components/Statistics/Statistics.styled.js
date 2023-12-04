import styled from "styled-components";

export const Statistic = styled.ul(() => {
    return {
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        color: '#2E2F42',
        marginBottom: '8px',
        listStyle: 'none',
        li: {
            padding: '8px'
        }
    };
});