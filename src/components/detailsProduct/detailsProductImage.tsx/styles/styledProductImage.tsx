import styled from 'styled-components';
import { colorBorder } from '../../../variables';


const ImageDetails = styled.figure`
	height: 96vh;
	width: 37vw;
	margin: 0%; 
	@media screen and (max-width: 576px){
		width: 86vw;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		height: 87vh;
		width: 86vw;
	}
`;
export default ImageDetails;
