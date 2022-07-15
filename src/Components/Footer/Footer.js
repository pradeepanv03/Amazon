import React from "react";
import "../Footer/FooterStyle.scss"

export function Footer() {


    return <>
       <section className="footer">
            <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"/>
        <article className="footer_inner">
        <div>
        <ul>
        <li>Terms and Privacy Notice</li>
        <li>Send us feedback</li>
        <li>Hep</li>
       </ul>
       </div>
       <div>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
        
        </article>        
       </section>
    </>
}