const Contents = () => {
    return (
        <div className="container-contents">
            <div className="container-contents-img1">
                <div className="container-contents-img-blur">
                    <img className="blurPattern" src="/assets/pattern-blur.svg" alt="blur pattern"/>
                </div>
                <div className="container-contents-img-jeremy">
                    <img src="/assets/image-jeremy-small.webp" alt="jeremy pics"/>
                </div>
                <div className="container-contents-img2">
                    <img src="/assets/pattern-curved-line-2.svg" alt="pattern2"/>
                </div>
            </div>
         
            <div className="container-part2">
                <p className="title-contents">It just <b>works.</b></p>
                <p className="text-contents-quote">“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
                <div className="container-quote-author">
                    <p className="author">JEREMY ROBINSON</p>
                    <p className="job">CMO, FYLO</p>
                </div>
            </div>
        </div>  
    )
}

export default Contents