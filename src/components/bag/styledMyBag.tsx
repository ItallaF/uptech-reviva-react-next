import styled from "styled-components";


export const MyBag = styled.section`
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    gap: 0%;
    @media screen and (max-width: 576px){
        grid-template-columns: none;
        grid-area: auto;
        width: 81vw;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		grid-template-columns: none;
        grid-area: auto;
        width: 81vw;
	}
	@media screen and (min-width: 769px) and (max-width: 992px){
		grid-template-columns: none;
        grid-area: auto;
        width: 81vw;
	}
`;