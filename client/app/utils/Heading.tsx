import React , {useState , FC} from "react";

interface headProps {
    title : string,
    description : string,
    keyword : string
}

const Heading :  FC<headProps> = ({title , description , keyword}) => {
    return (
        <>
        <title> {title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        </>
    )

}

export default Heading