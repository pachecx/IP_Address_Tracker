import styled from "styled-components";


export const Container = styled.div`
    min-width: 32rem;
    width: 42rem;
    padding: 0 2.4rem;
    position: relative;
    margin: 0 auto;
   
   .imgBgMobile,
   .imgBgDesk{
        position: absolute;
        z-index: -1;
        width: 100%;
        left: 0;
    }

    .imgBgDesk{
        display: none;
    }

    @media(min-width: 760px){
        width: 100%;

        .imgBgMobile{
            display: none;
        }

        .imgBgDesk{
            display: initial;
        }
    }
`;

export const Search = styled.header`
    text-align: center;
    padding-top: 3rem;

    .inputDiv{
        margin: 3.4rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            height: 4.8rem;
            border: none;
            border-radius: 1rem 0 0 1rem;
            width: 100%;
            font-size: 2rem;
            padding-left: 1rem;
            cursor: pointer;
        }

        ::-webkit-input-placeholder{
            font-size: 1.6rem;
        }

        button{
            height: 4.8rem;
            width: 5.8rem;
            border: none;
            background: black;
            border-radius: 0 1rem 1rem 0;
            cursor: pointer;
        }

        button:hover{
            background: gray;
            transition: .1s;
        }
    }

    h1{
        color: #ffff;
        font-size: 2rem;
    }

    @media(min-width: 760px){
        h1{
            margin-top: 4rem;
        }
        .inputDiv{
            input{
                width: 30%;
            }
        }
    }
`;

export const Card = styled.div`
    background: #ffff;
    padding: 2.5rem 2.5rem 1rem;
    text-align: center;
    border-radius: 1rem;
    margin: 0 auto;
    width: 30rem;

    .info{
        margin-bottom: 1.5rem;
    }

    .info span{
        color: #939393;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .info p{
        font-size: 1.8rem;
        font-weight: 500;
    }
   
   @media(min-width: 760px){
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        align-items: center;
        width: 70%;
        height: 16rem;

        .info{
            width: 100%;
            height: 8rem;
            text-align: left;
            padding: 0 9rem 0 2rem;
        
            p{
                margin-top: 1.5rem;
            }
        }

        .info:nth-child(-n+3){
            border-right: 1px solid #939393;
        }
    }
`;

export const Map = styled.div`
    margin-top: -95px;

    .map-Container{
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;

        .leaflet-container{
            height: 70.5vh;
            width: 100%;
        }
    }

    @media(min-width: 760px){
        .map-Container .leaflet-container{
            height: 62.1vh;
            width: 100%;
        }
    }
`;