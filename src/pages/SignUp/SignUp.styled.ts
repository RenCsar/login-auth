import styled from 'styled-components';

export const Container = styled.div`    
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    
    .login-container{
        background-color: var(--white);
        width: 450px;
        height: 550px;
        margin-top: 50px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            > button {
                display: flex;
                justify-content: center;
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
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 5px;
            color: var(--gray);

            & p:first-child, & p:last-child{
                width: 130px;
                border-bottom: 1px solid var(--gray);
                margin-bottom: 12px;
            };
        };

        form {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 5px;

            > button {
                background-color: var(--green);
                color: var(--white);
            }
        };

        .signup-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;

            & a {
                color: var(--green);
                text-decoration: none;
                transition: .2s;
            };
        };
        
    }

`;