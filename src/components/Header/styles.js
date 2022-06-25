import styled from 'styled-components'

export const AppHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-block: 1rem;
    position: relative;
`
export const AppLogo = styled.div`
    width: 80px;
`

export const Logo = styled.img`
    width: 100%;
    object-fit: cover;
`

export const AppNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen  and (min-width: 600px) {
        width: auto;
    }
`

export const AppNavList = styled.ul``

export const AppNavItem = styled.li`
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.8rem;

    @media screen  and (min-width: 600px) {
        width: auto;
        margin-left: 2.4rem;
        margin-bottom: 0;
    }
`

export const AppNavButton = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 20px;
    cursor: pointer;

    svg {
        color: #fff;
        font-size: 30px;
    }

    @media screen  and (min-width: 600px) {
        display: none;
    }
`