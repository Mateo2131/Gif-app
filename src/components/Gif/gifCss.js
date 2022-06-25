import styled from 'styled-components'

export const GifContainer = styled.div`
  position: relative;
`

export const GifTitle = styled.h4`
  position: absolute;
  bottom: 0px;
  left: 0;
  padding: 4px;
  color: #fff;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.5);
`

export const GifImage = styled.img`
  width: 100%;
  object-fit: contain;
`