import Image from "next/image";
import { Container } from "./ImageComponent.styles";

interface Props {
    props: {
        src: string,
        alt: string,
        preLoading?: boolean
    };
}

export const ImageComponent = ({ props }: Props) => {
    const { preLoading = false, src, alt } = props;

    if (preLoading) {
        return (
            <Container>
                <Image priority={ preLoading }
                       loading={ "eager" }
                       src={ `/` + src }
                       layout="fill"
                       className={ "image" }
                       alt={ alt }
                />
            </Container>
        );
    } else {
        return (
            <Container>
                <Image src={ `/` + src }
                       layout="fill"
                       className={ "image" }
                       alt={ alt }
                />
            </Container>
        );
    }
};