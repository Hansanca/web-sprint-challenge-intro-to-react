// Write your Character component here


import styled from 'styled-components'

const StyledDiv = styled.div`
font-size: large;
color: green;
`






const Character = (props) => {
    return <StyledDiv>{props.name}</StyledDiv>
}

export default Character