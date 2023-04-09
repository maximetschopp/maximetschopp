export type ProjectProps = {
    name: string;
    dir: string;
    desktop_thumbnail: string;
    mobile_thumbnail: string;
    category: string;
    tags: string[];
    accentColor: string;
    grid_span: string;
}

export type BodyContent = {
    type: string;
    props: textComponentProps | videoComponentProps | imageComponentProps;
}

export type textComponentProps = {
    text: string;
    align?: string;
    color?: string;
    size?: string;
    weight?: string;
    margin?: string;
}

export type videoComponentProps = {
    src: string;
    alt?: string;
    caption?: string;
}

export type imageComponentProps = {
    src: string;
    alt?: string;
    caption?: string;
}