import styled from 'styled-components';

const flex = `
    display: flex;
    justify-content: center;
`

export const Container = styled.div`    
    ${flex}
    align-items: center;
    height: 100vh;
    width: 100%;
    
    .login-container{
        ${flex}
        background-color: var(--white);
        width: 450px;
        height: 550px;
        margin-top: 50px;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        border-radius: 15px;
        color: var(--black);

        & button {
            cursor: pointer;
            transition: .2s;

        }

        & button:hover, a:hover {
            transform: scale(1.02);
        }
        
        & button, & input {
            width: 300px;
            height: 40px;
            border: 1px solid var(--gray);
            border-radius: 5px;
        };

        .btn-container{
            ${flex}
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 5px;

            > button {
                ${flex}
                align-items: center;
                gap: 10px;
                border-color: var(--gray);
                background-color: var(--white);

                & p{
                    color: var(--gray);
                    font-weight: bold;
                };
            };
        };

        .paragrafo-container{
            ${flex}
            width: 100%;
            gap: 5px;
            color: var(--gray);

            & p:first-child, & p:last-child{
                width: 130px;
                border-bottom: 1px solid var(--gray);
                margin-bottom: 12px;
            };
        };

        form {
            ${flex}
            width: 100%;
            align-items: center;
            flex-direction: column;
            gap: 5px;

            > button {
                background-color: var(--green);
                color: var(--white);
            }

            & input {
                padding-left: 10px;
            }
        };

        .signup-container {
            ${flex}
            flex-direction: column;
            align-items: center;

            & a {
                color: var(--green);
                text-decoration: none;
                transition: .2s;
            };
        };
        
    }
`;