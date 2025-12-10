export const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Template</title>
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
        }
        
        a {
            text-decoration: none;
            color: #2c3e50;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        /* Header Styles */
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #3498db;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 1.5rem;
        }
        
        nav ul li a {
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav ul li a:hover {
            color: #3498db;
        }
        
        /* Hero Section */
        .hero {
            background-color: #2c3e50;
            color: white;
            padding: 4rem 0;
            margin-bottom: 2rem;
        }
        
        .hero-content {
            max-width: 700px;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        /* Main Content */
        .main-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        /* Blog Posts */
        .blog-post {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        .post-image {
            height: 200px;
            background-color: #ddd;
            background-size: cover;
            background-position: center;
        }
        
        .post-content {
            padding: 1.5rem;
        }
        
        .post-meta {
            color: #777;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .post-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .post-excerpt {
            margin-bottom: 1rem;
        }
        
        .read-more {
            display: inline-block;
            color: #3498db;
            font-weight: 500;
        }
        
        /* Sidebar */
        .sidebar {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .sidebar-widget {
            margin-bottom: 2rem;
        }
        
        .sidebar-widget h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #3498db;
        }
        
        .categories-list {
            list-style: none;
        }
        
        .categories-list li {
            margin-bottom: 0.5rem;
        }
        
        .categories-list li a {
            display: block;
            padding: 0.5rem;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .categories-list li a:hover {
            background-color: #f3f3f3;
        }
        
        /* Newsletter Form */
        .newsletter-form {
            display: flex;
            flex-direction: column;
        }
        
        .newsletter-form input {
            padding: 0.8rem;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
         
        .newsletter-form button {
            padding: 0.8rem;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .newsletter-form button:hover {
            background-color: #2980b9;
        }
        
        /* Footer */
        footer {
            background-color: #2c3e50;
            color: white;
            padding: 2rem 0;
            margin-top: 2rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
        
        .footer-column h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        
        .footer-column p {
            margin-bottom: 1rem;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
        }
        
        .copyright {
            text-align: center;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive Design */
        @media (max-width: 900px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 600px) {
            .header-container {
                flex-direction: column;
                text-align: center;
            }
            
            nav ul {
                margin-top: 1rem;
                justify-content: center;
            }
            
            nav ul li {
                margin: 0 0.5rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">Your Site Name</div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container hero-content">
            <h1>Welcome to My Blog</h1>
            <p>Discover amazing articles on various topics including technology, lifestyle, travel and more.</p>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container main-content">
        <!-- Blog Posts -->
        <main>
            <article class="blog-post">
                <div class="post-image" style="background-color: #95a5a6;"></div>
                <div class="post-content">
                    <div class="post-meta">June 12, 2023 • Technology</div>
                    <h2 class="post-title">The Future of Web Development</h2>
                    <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </article>
                 
            

                
                                                                                                                                                      
                          
            <article class="blog-post">
                <div class="post-image" style="background-color: #e74c3c;"></div>
                <div class="post-content">
                    <div class="post-meta">June 10, 2023 • Travel</div>
                    <h2 class="post-title">Top 10 Destinations for 2023</h2>
                    <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </article>

            <article class="blog-post">
                <div class="post-image" style="background-color: #3498db;"></div>
                <div class="post-content">
                    <div class="post-meta">June 5, 2023 • Lifestyle</div>
                    <h2 class="post-title">How to Build Healthy Habits</h2>
                    <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                    <a href="#" class="read-more">Read More</a>
                </div>      
            </article>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-widget">
                <h3>About Me</h3>
                <p>Hello! I'm a blogger passionate about sharing knowledge and experiences on various topics.</p>
            </div>

            <div class="sidebar-widget">
                <h3>Categories</h3>
                <ul class="categories-list">
                    <li><a href="#">Technology (12)</a></li>
                    <li><a href="#">Travel (8)</a></li>
                    <li><a href="#">Lifestyle (15)</a></li>
                    <li><a href="#">Food (7)</a></li>
                    <li><a href="#">Health (9)</a></li>
                </ul>
            </div>

            <div class="sidebar-widget">
                <h3>Newsletter</h3>
                <p>Subscribe to get the latest posts delivered to your inbox.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </aside>
    </div>

    <!-- Footer -->
    <footer>.   
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>About BlogSite</h3>
                    <p>A platform for sharing ideas, experiences and knowledge on various topics.</p>
                </div>

                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Categories</a></p>
                    <p><a href="#">About</a></p>
                    <p><a href="#">Contact</a></p>
                </div>

                <div class="footer-column">
                    <h3>Connect With Us</h3>
                    <div class="social-links">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IG</a>
                        <a href="#">YT</a>
                    </div>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; 2023 BlogSite. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;
