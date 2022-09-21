import styled from "styled-components";

export interface FooterProps {
    href: string,
    title: string,
    fontSize?: string,
    padding?: string,
    mediaFontSize?: string
}

interface PropsLinkFooter {
    fontSize?: string,
    padding?: string,
    mediaFontSize?: string
}

const ListItem = styled.li`
  margin: 5px 0;
  list-style: none;
`;

const LinkFooter = styled.a<PropsLinkFooter>`
  color: rgb(255, 255, 255);
  font-size: ${ ({ fontSize }) => fontSize };
  padding: ${ ({ padding = "5px" }) => padding };
  @media (max-width: 43em) {
    font-size: ${ ({ mediaFontSize }) => mediaFontSize };
  }
`;
export const FooterItem = ({ href, title, fontSize, padding, mediaFontSize }: FooterProps) => {
    return (
        <ListItem>
            <LinkFooter mediaFontSize={ mediaFontSize } padding={ padding } fontSize={ fontSize }
                        href={ href }>{ title } </LinkFooter>
        </ListItem>
    );

};