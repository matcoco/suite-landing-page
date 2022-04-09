import Buttons from "../_shared/Buttons"
import Logo from "../_shared/Logo"

const Nav = () => {
    return (
        <div className="container-Nav">
            <Logo />
            
            <Buttons text="Request Beta Access" cln="btn-nav"/>
        </div>
    )
}


export default Nav