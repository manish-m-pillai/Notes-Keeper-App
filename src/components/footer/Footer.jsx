import "./Footer.css"

function Footer(){
    const d = new Date()
    return(
        
        <footer>
            <p>Made by Manish M Pillai</p>
            <p>Copyright &copy; {d.getFullYear()}</p>
        </footer>
    )
}

export default Footer