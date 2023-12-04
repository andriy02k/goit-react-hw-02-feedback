import styled from "styled-components";

export const NotificationMessage = styled.p(() => {
    return {
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        color: 'orange',
        marginBottom: '8px',
    };
});