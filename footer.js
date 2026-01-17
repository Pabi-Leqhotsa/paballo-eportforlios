document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3 class="footer-logo">Paballo Leqhotsa</h3>
                            <p class="footer-description">Computer Science graduate & Mathematics Tutor specializing in software engineering and technical education.</p>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html#home"><i class="fas fa-chevron-right"></i> Home</a></li>
                                <li><a href="projects.html"><i class="fas fa-chevron-right"></i> Projects</a></li>
                                <li><a href="index.html#contact-cta"><i class="fas fa-chevron-right"></i> Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Connect With Me</h4>
                            <div class="social-links">
                                <a href="https://www.linkedin.com/in/paballo-leqhotsa-86aa8217a" class="social-link" target="_blank" title="LinkedIn" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/PaballoLeqhotsa" class="social-link" target="_blank" title="GitHub" aria-label="GitHub">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:paballoleqhotsa2@gmail.com" class="social-link" title="Email" aria-label="Email">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <a href="tel:+27784451709" class="social-link" title="Call" aria-label="Phone">
                                    <i class="fas fa-phone"></i>
                                </a>
                            </div>
                            <div class="footer-cta">
                                <a href="index.html#contact-cta" class="btn-footer">
                                    <i class="fas fa-paper-plane"></i> Get In Touch
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Contact Info</h4>
                            <div class="contact-info-footer">
                                <p><i class="fas fa-phone"></i> <a href="tel:+27784451709">078 445 1709</a></p>
                                <p><i class="fas fa-envelope"></i> <a href="mailto:paballoleqhotsa2@gmail.com">paballoleqhotsa2@gmail.com</a></p>
                                <p><i class="fas fa-map-marker-alt"></i> Cape Town, South Africa</p>
                                <p><i class="fas fa-clock"></i> Available for opportunities</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p class="copyright">&copy; ${new Date().getFullYear()} Paballo Leqhotsa. All Rights Reserved.</p>
                        <div class="footer-bottom-links">
                            <a href="images/Paballo_Leqhotsa_CV.pdf" download>Download CV</a>
                            <span class="separator">•</span>
                            <a href="privacy.html">Privacy Policy</a>
                            <span class="separator">•</span>
                            <a href="terms.html">Terms of Use</a>
                        </div>
                        <p class="footer-credit">Designed & Developed with ❤️ by Paballo Leqhotsa</p>
                    </div>
                </div>
            </footer>
        `;
    }
});
