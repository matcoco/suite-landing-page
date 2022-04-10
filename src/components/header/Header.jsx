import Buttons from "../_shared/Buttons"

const Header = () => {
    return (
        <div className="container-header">
            <div className="container-header-title">
                <p>A<b> super{" "}<span className="solution"> solution</span></b></p>
                <p> for your<b> business.</b></p>
            </div>

            <div className="container-part1">
                <div className="container-part-with-img">

                    <div className="container-header-text">
                        Our marketing and sales automations help you scale your outreach to get more leads for your company.
                    </div>
                    <div className="container-header-btn">
                        <Buttons text="Request Beta Access" cln={"btn-header"} />
                    </div>
                </div>


                <div className="container-header-img">
                    <img src="assets/image-hero-landscape@2x.webp" alt="phone assets" />
                </div>
                <div className="container-header-img-2">
                    <img src="assets/image-hero-portrait@2x.webp" alt="phone assets" />
                </div>
            </div>


            <div className="container-header-stats">
                <div className="stat1">
                    <p>2K+</p>
                    <p>COMPANIES</p>
                </div>
                <div className="stat2">
                    <p>8</p>
                    <p>LANGUAGES</p>
                </div>
                <div className="stat3">
                    <p>1.2M</p>
                    <p>LEADS</p>
                </div>
            </div>
        </div>
    )
}

export default Header