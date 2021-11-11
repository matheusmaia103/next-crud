import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html,
    body{
        background-color: #ffffff;


        padding:0;
        margin: 0;

        #nprogress {
            pointer-events: none;
        }

        #nprogress .bar {
        background: red;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
        }

        #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: red;
        border-left-color: red;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
        position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }

        #root{            
            width: 100%auto;
            height: 100% !important;
        }

        
        .divider{
            width: 90% !important;
            box-sizing: border-box !important;

            display: flex;
            flex-direction: row;
            align-items: center !important;
            

        }
    }

    *{
        box-sizing: border-box;
        font-family: 'Poppins';
        text-transform: none !important;

        ul{
            list-style: none;
        }

    }

    nav{
        background-color: #041218;
        color: white!important;
        box-shadow: 6px 9px 20px -8px black;

        padding: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        right:0;
        left: 0;

        z-index: 10;
        button{
            color: white !important;
        }
        .hamburguer{
            display: none;
        }
        
        #logo{
            width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 60%;

            margin: 0;
            padding: 0;
            li{
                max-width: 30px;
                color: white !important;
            }
        }
    }

    #drawer{
        
        .MuiPaper-root{
            background-color: #000000b3;
            color: white;
            
        }

        .MuiIconButton-colorInherit {
            color: inherit;
            transform: rotate(
            90deg);
        }

        #close{
            .MuiSvgIcon-root{
                transform: rotateX(180) !important;
            }
        }
    }

    main{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        padding: 50px 0;
        padding-top: 100px;

        width: 100% !important;
        min-height: 95vh;

        

        .card{

            box-shadow: 7px 9px 20px -4px grey;
            box-sizing: border-box;

            width: 25vw;
            max-width: 400px !important;
            min-width: 300px;

            margin: 40px;

            border-radius: 10px;


            transition: 0.3s ease;
            :hover{
                transform: scale(1.05);
            }

            .MuiButtonBase-root {
                display: flex !important;
                flex-direction: column !important;
            }
        }
    }


    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: black;
        color: #e1e1e1;
        font-size: 14px;

        width: 100%;

        padding: 15px 0 15px 0;

        hr{
            width: 90%;
        }

        .divider{
            ::before,
            ::after{
                border-top: thin solid white;
            }
        }

        #mail{
            
            display: flex;
            align-items: center;
            justify-content: space-around;

            text-align: center;

            .input{
                background-color: white;
                color: black;

                display: inline-grid;

                transform: scale(0.8)
            }

            .btn{
                background-color: transparent !important;
                color:white;
            }

        }

    }

    
    @media screen and (max-width: 600px) {
        
        nav{
             ul{
                display: none;
            }

            #hamburguer{
                display: inline;
            }
        }
    
    }
    
    @media screen and (min-width: 600px) {
        
        nav{
             ul{
                display: flex;
            }

            #hamburguer{
                display: none !important;
            }
        }
    
    }


`;

export default GlobalStyle;
