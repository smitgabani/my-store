import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "1sbxw3ql",
    dataset: "production",
    apiVersion: "2022-06-12",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_PUBLIC_TOKEN,
})


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);