import React from "react";

interface CustomHead{
    title: string
    description: string
    keywords?: string
}
export default function CustomHead({title, description, keywords}: CustomHead){
    return (
        <>
            <title>{`${title} | PSDOweb`}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={`psdoweb, psdo, ${keywords}`}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
        </>
    )
}