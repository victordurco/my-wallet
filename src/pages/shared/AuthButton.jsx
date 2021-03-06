import React from 'react';
import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function AuthButton({ title, loading }) {
    return (
        <Button type="submit">
            {loading
                ? <Loader
                    type="Puff"
                    color="#ffffff"
                    height={40}
                    width={40}
                />
                :
                title
            }
        </Button>
    );
};

const Button = styled.button`
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 5px;
    background-color: #680D8C;
    color: white;
    font-weight: 700;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    margin-bottom: 36px;
`;