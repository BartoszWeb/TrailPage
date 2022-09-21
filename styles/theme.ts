export interface ThemeTypes {
    theme: {
        colors: {
            primaryColor: string,
            secondaryColor: string,
            tertiaryColor: string,
            hoverColor: string,
            textColor: string,
            accentColor: string
        },
        font: {
            thin: number,
            regular: number,
            bold: number,
        },
    };
}
export const theme = {
    colors: {
        primaryColor: "rgba(255, 222, 0, 1)",
        secondaryColor: "rgba(255, 255, 255, 1)",
        tertiaryColor: "rgb(240,240,240)",
        hoverColor: "rgba(255, 234, 88, 1)",
        textColor: "rgba(0, 0, 0, 1)",
        accentColor: "rgb(204, 239, 252, 1)",
    },
    font: {
        thin: 300,
        regular: 400,
        bold: 700,
    },
};