import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="pagetwo">Page two</Link>
      </Nav>
      {children}
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  max-width: 600px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
