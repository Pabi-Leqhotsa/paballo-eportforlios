document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Paballo Leqhotsa</h3>
                            <p>Computer Science Student & Mathematics Tutor passionate about technology, education, and creating innovative solutions.</p>
                            <p>Let's build something amazing together!</p>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html#about">About</a></li>
                                <li><a href="index.html#skills">Skills</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Connect With Me</h4>
                            <div class="social-links">
                                <a href="https://www.linkedin.com/in/paballo-leqhotsa-86aa8217a" class="social-link" target="_blank" title="LinkedIn" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/yourusername" class="social-link" target="_blank" title="GitHub" aria-label="GitHub">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:paballoleqhotsa2@gmail.com" class="social-link" title="Email" aria-label="Email">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <a href="https://twitter.com/yourusername" class="social-link" target="_blank" title="Twitter" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Contact Info</h4>
                            <div class="contact-info-footer">
                                <p><i class="fas fa-phone"></i> 078 445 1709</p>
                                <p><i class="fas fa-envelope"></i> paballoleqhotsa2@gmail.com</p>
                                <p><i class="fas fa-map-marker-alt"></i> Cape Town, South Africa</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p class="copyright">&copy; 2025 Paballo Leqhotsa. All Rights Reserved.</p>
                        <p class="footer-credit">Designed & Developed with ❤️ by Paballo Leqhotsa</p>
                    </div>
                </div>
            </footer>
        `;
    }
});