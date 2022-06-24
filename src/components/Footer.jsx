import './Styles/Footer.css'

const Footer = () => {

    return <footer className="bg-black fixed-bottom p-lg-1 d-lg-flex justify-content-between">
        <p className="m-2 text-light">© alkemy</p>
        <div>
            <a href="https://www.facebook.com"
             rel="noopener noreferer">
                <img 
                    className="w-25"
                    src={'/assets/images/socialFacebook.svg'}
                    alt='Facebook'
                />
            </a>
            <a href="https://www.instagram.com"
             rel="noopener noreferer">
                <img
                    className="w-25"
                    src={'/assets/images/socialInstagram.svg'} 
                    alt='Instagram'
                />
            </a>
            <a href="https://www.linkedin.com/in/ariel-alejandro-gallardo-dev"
                rel="noopener noreferer">
                <img 
                    className="w-25"
                    src={'/assets/images/socialLinkedIn.svg'}
                    alt='LinkedIn'
                  />
            </a>
        </div>
    </footer>
}
export default Footer