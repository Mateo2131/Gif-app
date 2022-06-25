import styled from 'styled-components'

export const LoaderContainer = styled.div`
    display: grid;
    place-content: center;
    height: 100vh;
`

export const Loader = styled.div`
  width:90px;
  height:120px;
  --c:linear-gradient(#7f5af0 0 0);
  background: 
    var(--c) 0%   50%,
    var(--c) 50%  50%,
    var(--c) 100% 50%;
  background-size:18px 50%;
  background-repeat: no-repeat;
  animation:b7 1s infinite linear alternate;

  @keyframes b7 {
    20% {background-size:18px 20% ,18px 50% ,18px 50% }
    40% {background-size:18px 100%,18px 20% ,18px 50% }
    60% {background-size:18px 50% ,18px 100%,18px 20% }
    80% {background-size:18px 50% ,18px 50% ,18px 100%}
  }
`