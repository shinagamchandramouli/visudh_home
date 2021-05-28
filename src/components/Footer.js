import react from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() 
{
    return (

        <footer id="footer">
            <div class="footer-newsletter">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Be updated will our new Features and Technologies</p>
                        <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
                </div>
            </div>

            <div class="footer-top">
                <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-md-6 footer-contact">
                    <h2><span class="text-primary">Visudh</span><span class="text-danger">Ajivam</span></h2>
                        <p>
                            <strong>Address:</strong>Surya nagar road no.3 Bijulia talab road ward no.8 <br />
                            Ramgarh canttRamgarh,Jharkhand <br /> 829122<br />
                            India <br /><br />
                            <strong>Phone:</strong> +91 00000xxx0<br />
                            <strong>Email:</strong> info@example.com<br/>
                        </p>
                    </div>

                    <div class="col-lg-12 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <p>Be updated with us on our Social Media Links</p>
                    <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"><TwitterIcon /></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"><FacebookIcon /></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"><InstagramIcon /></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"><LinkedInIcon /></i></a>
                    </div>
                    </div>

                </div>
                </div>
            </div>

            <div class="container py-4">
                <div class="copyright">
                &copy; Copyright <strong><span>VisudhAjivam</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                Designed by Shikhar Katiyar
                </div>
            </div>
        </footer>
    );

}

export default Footer;