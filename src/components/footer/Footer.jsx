import Logo from "../_shared/Logo"

const Footer = () => {
    return (
        <footer className="container-footer">
             <div className="wrapper">
                <div className="container-contents-footer">
                    <div className="container-contents-logo pad">
                        <Logo />
                    </div>
                
                    <p className="copyright pad">Copyright - Suite</p>
                    <div className="socials">
                        <img src="/assets/icon-facebook.svg" alt="facebook logo"/>
                        <img src="/assets/icon-twitter.svg" alt="twitter logo"/>
                        <img src="/assets/icon-instagram.svg" alt="instagram logo"/>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer