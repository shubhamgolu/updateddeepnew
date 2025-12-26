export const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEADPOLL | Ultimate Gaming Zone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script data-cfasync="false" src="https://help.prowebventures.com/HelpChatBot"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Rajdhani', sans-serif;
            background: #0a0a0a;
            color: #fff;
            overflow-x: hidden;
        }
        h1, h2, h3, h4 {
            font-family: 'Orbitron', sans-serif;
        }
        @keyframes pulse-glow {
            0%, 100% { text-shadow: 0 0 10px #ff003c, 0 0 20px #ff003c, 0 0 30px #ff003c; }
            50% { text-shadow: 0 0 20px #00ffea, 0 0 30px #00ffea, 0 0 40px #00ffea; }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        .hero-title {
            animation: pulse-glow 2s infinite, float 4s ease-in-out infinite;
        }
        .scanline {
            position: fixed;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, #00ffea, transparent);
            z-index: 9999;
            pointer-events: none;
            animation: scanline 8s linear infinite;
        }
        .flicker {
            animation: flicker 0.3s infinite;
        }
        .neon-border {
            border: 2px solid #ff003c;
            box-shadow: 0 0 15px #ff003c, inset 0 0 15px rgba(255, 0, 60, 0.2);
        }
        .neon-border-blue {
            border: 2px solid #00ffea;
            box-shadow: 0 0 15px #00ffea, inset 0 0 15px rgba(0, 255, 234, 0.2);
        }
        .glow-text {
            text-shadow: 0 0 10px currentColor;
        }
        .grid-bg {
            background-image: 
                linear-gradient(rgba(0, 255, 234, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 234, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255, 0, 60, 0.4);
        }
    </style>
</head>
<body class="relative">
    <div class="scanline"></div>
    <div class="fixed inset-0 grid-bg pointer-events-none z-0"></div>

    <!-- Navigation -->
    <nav class="relative z-50 py-4 px-6 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-4 mb-4 md:mb-0">
                <img src="https://prowebventures.com/EmployeePortal/logoas.png" alt="Deadpoll Logo" class="h-12 w-12 animate-spin-slow" style="animation: spin 10s linear infinite;">
                <h1 class="text-3xl font-bold text-cyan-400 glow-text">DEADPOLL</h1>
            </div>
            <div class="flex flex-wrap justify-center gap-4 md:gap-8">
                <a href="#home" class="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">HOME</a>
                <a href="#games" class="text-lg font-semibold text-white hover:text-pink-500 transition-colors">GAMES</a>
                <a href="#facilities" class="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">FACILITIES</a>
                <a href="#events" class="text-lg font-semibold text-white hover:text-pink-500 transition-colors">EVENTS</a>
                <a href="#pricing" class="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">PRICING</a>
                <a href="#contact" class="text-lg font-semibold text-white hover:text-pink-500 transition-colors">CONTACT</a>
            </div>
            <button class="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <i class="fas fa-gamepad mr-2"></i>BOOK NOW
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div class="container mx-auto px-6 text-center relative z-10">
            <h2 class="text-5xl md:text-8xl font-black mb-6 hero-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
                ENTER THE ZONE
            </h2>
            <p class="text-xl md:text-3xl mb-10 text-cyan-300 max-w-3xl mx-auto">
                Where reality ends and the game begins. Ultimate PC, console, VR & tournament experience.
            </p>
            <div class="flex flex-col md:flex-row justify-center gap-6">
                <button class="px-10 py-4 text-2xl font-bold bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <i class="fas fa-play mr-3"></i> PLAY NOW
                </button>
                <button class="px-10 py-4 text-2xl font-bold neon-border rounded-full hover:bg-pink-600/30 transition-all flex items-center justify-center">
                    <i class="fas fa-trophy mr-3"></i> TOURNAMENTS
                </button>
            </div>
            <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center p-6 neon-border-blue rounded-2xl bg-black/50">
                    <i class="fas fa-desktop text-5xl text-cyan-400 mb-4"></i>
                    <h4 class="text-2xl font-bold">200+ PCs</h4>
                    <p class="text-gray-300">RTX 4090, 240Hz</p>
                </div>
                <div class="text-center p-6 neon-border rounded-2xl bg-black/50">
                    <i class="fas fa-vr-cardboard text-5xl text-pink-500 mb-4"></i>
                    <h4 class="text-2xl font-bold">VR Arena</h4>
                    <p class="text-gray-300">Full Immersion</p>
                </div>
                <div class="text-center p-6 neon-border-blue rounded-2xl bg-black/50">
                    <i class="fas fa-users text-5xl text-cyan-400 mb-4"></i>
                    <h4 class="text-2xl font-bold">24/7 Open</h4>
                    <p class="text-gray-300">Never Sleep</p>
                </div>
                <div class="text-center p-6 neon-border rounded-2xl bg-black/50">
                    <i class="fas fa-utensils text-5xl text-pink-500 mb-4"></i>
                    <h4 class="text-2xl font-bold">Cafe & Bar</h4>
                    <p class="text-gray-300">Fuel Up</p>
                </div>
            </div>
        </div>
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div class="animate-bounce text-cyan-400 text-3xl">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </section>

    <!-- Games Section -->
    <section id="games" class="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div class="container mx-auto">
            <h2 class="text-5xl font-bold text-center mb-4 text-cyan-400 glow-text">FEATURED GAMES</h2>
            <p class="text-center text-xl text-gray-300 mb-16">Play the latest titles on max settings</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="card-hover neon-border-blue rounded-3xl overflow-hidden bg-black/60">
                    <div class="h-64 bg-gradient-to-br from-cyan-900/50 to-black relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-crosshairs text-9xl text-cyan-400/40"></i>
                        </div>
                        <div class="absolute bottom-4 left-6">
                            <h3 class="text-3xl font-bold">FPS ARENA</h3>
                            <p class="text-cyan-300">Call of Duty, Valorant, CS2</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <p class="text-gray-300 mb-6">Competitive shooting with professional-grade peripherals and low-latency monitors.</p>
                        <button class="w-full py-3 bg-cyan-700 hover:bg-cyan-600 rounded-lg font-bold">JOIN SERVER</button>
                    </div>
                </div>
                <div class="card-hover neon-border rounded-3xl overflow-hidden bg-black/60">
                    <div class="h-64 bg-gradient-to-br from-pink-900/50 to-black relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-dragon text-9xl text-pink-500/40"></i>
                        </div>
                        <div class="absolute bottom-4 left-6">
                            <h3 class="text-3xl font-bold">RPG REALMS</h3>
                            <p class="text-pink-300">Baldur's Gate 3, Elden Ring</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <p class="text-gray-300 mb-6">Immersive worlds with surround sound and ultra-wide curved displays.</p>
                        <button class="w-full py-3 bg-pink-700 hover:bg-pink-600 rounded-lg font-bold">ENTER WORLD</button>
                    </div>
                </div>
                <div class="card-hover neon-border-blue rounded-3xl overflow-hidden bg-black/60">
                    <div class="h-64 bg-gradient-to-br from-purple-900/50 to-black relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-car text-9xl text-purple-400/40"></i>
                        </div>
                        <div class="absolute bottom-4 left-6">
                            <h3 class="text-3xl font-bold">RACING SIM</h3>
                            <p class="text-purple-300">Forza, F1, Assetto Corsa</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <p class="text-gray-300 mb-6">Full motion racing rigs with force feedback wheels and pedal sets.</p>
                        <button class="w-full py-3 bg-purple-700 hover:bg-purple-600 rounded-lg font-bold">START ENGINE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Facilities -->
    <section id="facilities" class="py-20 px-6 bg-black">
        <div class="container mx-auto">
            <h2 class="text-5xl font-bold text-center mb-4 text-pink-500 glow-text">PREMIUM FACILITIES</h2>
            <p class="text-center text-xl text-gray-300 mb-16">Designed for hardcore gamers</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="flex items-start space-x-6">
                        <div class="text-cyan-400 text-4xl">
                            <i class="fas fa-microchip"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold mb-2">ULTIMATE RIGS</h4>
                            <p class="text-gray-400">Intel i9, NVIDIA RTX 4090, 64GB DDR5, 2TB NVMe SSD, 240Hz G-Sync monitors.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-6">
                        <div class="text-pink-500 text-4xl">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold mb-2">PRO AUDIO</h4>
                            <p class="text-gray-400">7.1 Surround Sound, Noise-cancelling headsets, studio microphones.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-6">
                        <div class="text-cyan-400 text-4xl">
                            <i class="fas fa-chair"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold mb-2">ERGONOMIC THRONES</h4>
                            <p class="text-gray-400">Premium gaming chairs with lumbar support, adjustable armrests.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-6">
                        <div class="text-pink-500 text-4xl">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold mb-2">LIGHTNING NETWORK</h4>
                            <p class="text-gray-400">10 Gbps fiber optic, <1ms latency, dedicated gaming servers.</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="neon-border rounded-3xl overflow-hidden h-96">
                        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-600/20 flex items-center justify-center">
                            <i class="fas fa-gamepad text-9xl text-white/30"></i>
                        </div>
                    </div>
                    <div class="absolute -bottom-6 -right-6 w-64 h-64 neon-border-blue rounded-3xl bg-black/80 p-6 backdrop-blur-sm">
                        <h4 class="text-2xl font-bold text-cyan-300 mb-4">VR CAVE</h4>
                        <p class="text-gray-300">Full-room VR tracking with haptic feedback suits.</p>
                        <div class="mt-6 text-pink-400 text-3xl">
                            <i class="fas fa-vr-cardboard"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tournament Section -->
    <section id="events" class="py-20 px-6 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-pink-600"></div>
        <div class="container mx-auto text-center">
            <h2 class="text-5xl font-bold mb-6"><span class="text-cyan-400">UPCOMING</span> <span class="text-pink-500">TOURNAMENTS</span></h2>
            <p class="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">Compete for glory and massive prize pools. Weekly events with pro players.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div class="bg-black/70 neon-border p-8 rounded-3xl card-hover">
                    <div class="text-5xl text-cyan-400 mb-4">
                        <i class="fas fa-crown"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-2">VALORANT CHAMPIONSHIP</h4>
                    <p class="text-gray-400 mb-4">May 15, 2024</p>
                    <p class="text-3xl font-bold text-pink-500">$25,000 PRIZE</p>
                    <div class="mt-6 h-2 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full"></div>
                </div>
                <div class="bg-black/70 neon-border-blue p-8 rounded-3xl card-hover">
                    <div class="text-5xl text-pink-500 mb-4">
                        <i class="fas fa-fighter-jet"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-2">FORTNITE DUOS</h4>
                    <p class="text-gray-400 mb-4">May 22, 2024</p>
                    <p class="text-3xl font-bold text-cyan-400">$15,000 PRIZE</p>
                    <div class="mt-6 h-2 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full"></div>
                </div>
                <div class="bg-black/70 neon-border p-8 rounded-3xl card-hover">
                    <div class="text-5xl text-cyan-400 mb-4">
                        <i class="fas fa-chess"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-2">CS2 SHOWDOWN</h4>
                    <p class="text-gray-400 mb-4">June 1, 2024</p>
                    <p class="text-3xl font-bold text-pink-500">$30,000 PRIZE</p>
                    <div class="mt-6 h-2 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full"></div>
                </div>
                <div class="bg-black/70 neon-border-blue p-8 rounded-3xl card-hover">
                    <div class="text-5xl text-pink-500 mb-4">
                        <i class="fas fa-car-burst"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-2">RACING GRAND PRIX</h4>
                    <p class="text-gray-400 mb-4">June 10, 2024</p>
                    <p class="text-3xl font-bold text-cyan-400">$20,000 PRIZE</p>
                    <div class="mt-6 h-2 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full"></div>
                </div>
            </div>
            
            <button class="px-12 py-4 text-2xl font-bold bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full hover:scale-105 transition-transform flex items-center justify-center mx-auto">
                <i class="fas fa-calendar-check mr-3"></i> VIEW ALL EVENTS
            </button>
        </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-20 px-6 bg-black">
        <div class="container mx-auto">
            <h2 class="text-5xl font-bold text-center mb-4 text-cyan-400 glow-text">MEMBERSHIP PLANS</h2>
            <p class="text-center text-xl text-gray-300 mb-16">Choose your level of access</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div class="neon-border rounded-3xl p-10 bg-gradient-to-b from-gray-900 to-black text-center card-hover">
                    <h3 class="text-3xl font-bold mb-6 text-gray-300">CASUAL</h3>
                    <div class="text-5xl font-bold mb-2 text-white">$8<span class="text-xl text-gray-400">/hour</span></div>
                    <p class="text-gray-400 mb-8">Pay as you play</p>
                    <ul class="space-y-4 mb-10 text-left">
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Access to PC Zone</li>
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Standard Peripherals</li>
                        <li class="flex items-center"><i class="fas fa-times text-gray-600 mr-3"></i> Priority Booking</li>
                        <li class="flex items-center"><i class="fas fa-times text-gray-600 mr-3"></i> Tournament Entry</li>
                        <li class="flex items-center"><i class="fas fa-times text-gray-600 mr-3"></i> VR Access</li>
                    </ul>
                    <button class="w-full py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold">GET STARTED</button>
                </div>
                
                <div class="neon-border-blue rounded-3xl p-10 bg-gradient-to-b from-cyan-900/30 to-black text-center card-hover transform scale-105 relative">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-gradient-to-r from-cyan-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold">POPULAR</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-6 text-cyan-300">PRO GAMER</h3>
                    <div class="text-5xl font-bold mb-2 text-white">$99<span class="text-xl text-gray-400">/month</span></div>
                    <p class="text-gray-400 mb-8">Unlimited access</p>
                    <ul class="space-y-4 mb-10 text-left">
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-3"></i> Unlimited PC Access</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-3"></i> Premium Peripherals</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-3"></i> Priority Booking</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-3"></i> Free Tournament Entry</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-3"></i> 10hrs VR Monthly</li>
                    </ul>
                    <button class="w-full py-4 bg-gradient-to-r from-cyan-600 to-pink-700 hover:opacity-90 rounded-xl font-bold">GO PRO</button>
                </div>
                
                <div class="neon-border rounded-3xl p-10 bg-gradient-to-b from-gray-900 to-black text-center card-hover">
                    <h3 class="text-3xl font-bold mb-6 text-gray-300">VIP ELITE</h3>
                    <div class="text-5xl font-bold mb-2 text-white">$299<span class="text-xl text-gray-400">/month</span></div>
                    <p class="text-gray-400 mb-8">The ultimate experience</p>
                    <ul class="space-y-4 mb-10 text-left">
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> All Pro Features</li>
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Private Gaming Suite</li>
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Unlimited VR</li>
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Free Drinks & Snacks</li>
                        <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-3"></i> Personal Locker</li>
                    </ul>
                    <button class="w-full py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold">BECOME VIP</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div class="container mx-auto">
            <h2 class="text-5xl font-bold text-center mb-4 text-pink-500 glow-text">FIND US</h2>
            <p class="text-center text-xl text-gray-300 mb-16">Open 24/7 for all gamers</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div class="neon-border-blue rounded-3xl p-10 mb-10 bg-black/50">
                        <h3 class="text-3xl font-bold mb-8 text-cyan-300">CONTACT INFO</h3>
                        <div class="space-y-8">
                            <div class="flex items-center space-x-6">
                                <div class="text-cyan-400 text-3xl">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold">ADDRESS</h4>
                                    <p class="text-gray-400">123 Gaming Street, Cyber District, Neon City 10101</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-6">
                                <div class="text-pink-500 text-3xl">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold">PHONE</h4>
                                    <p class="text-gray-400">+1 (555) GAMER-ZONE</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-6">
                                <div class="text-cyan-400 text-3xl">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold">EMAIL</h4>
                                    <p class="text-gray-400">play@deadpoll.zone</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-6">
                                <div class="text-pink-500 text-3xl">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold">HOURS</h4>
                                    <p class="text-gray-400">24/7 - 365 days a year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex space-x-8 justify-center">
                        <a href="#" class="text-4xl text-cyan-400 hover:text-cyan-300 transition-colors">
                            <i class="fab fa-discord"></i>
                        </a>
                        <a href="#" class="text-4xl text-pink-500 hover:text-pink-400 transition-colors">
                            <i class="fab fa-twitch"></i>
                        </a>
                        <a href="#" class="text-4xl text-cyan-400 hover:text-cyan-300 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-4xl text-pink-500 hover:text-pink-400 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div class="neon-border rounded-3xl p-10 bg-black/50">
                    <h3 class="text-3xl font-bold mb-8 text-pink-300">SEND MESSAGE</h3>
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-400 mb-2">Your Name</label>
                                <input type="text" class="w-full bg-gray-900 border border-cyan-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500">
                            </div>
                            <div>
                                <label class="block text-gray-400 mb-2">Email Address</label>
                                <input type="email" class="w-full bg-gray-900 border border-pink-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-pink-500">
                            </div>
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-2">Subject</label>
                            <input type="text" class="w-full bg-gray-900 border border-cyan-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500">
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-2">Message</label>
                            <textarea rows="5" class="w-full bg-gray-900 border border-pink-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-pink-500"></textarea>
                        </div>
                        <button type="submit" class="w-full py-4 bg-gradient-to-r from-pink-600 to-cyan-600 hover:opacity-90 rounded-xl font-bold text-xl">
                            <i class="fas fa-paper-plane mr-3"></i> SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-12 px-6 border-t border-gray-800">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-4 mb-8 md:mb-0">
                    <img src="https://prowebventures.com/EmployeePortal/logoas.png" alt="Deadpoll Logo" class="h-16 w-16">
                    <div>
                        <h2 class="text-4xl font-bold text-cyan-400">DEADPOLL</h2>
                        <p class="text-gray-500">ULTIMATE GAMING ZONE</p>
                    </div>
                </div>
                <div class="text-center md:text-right">
                    <p class="text-gray-400 mb-4">© 2024 Deadpoll Gaming Zone. All rights reserved.</p>
                    <p class="text-gray-500">Designed for gamers by gamers</p>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                <p class="flicker">WARNING: EXTREME FUN AHEAD. ENTER AT YOUR OWN RISK.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.card-hover, .hero-title').forEach(el => {
            observer.observe(el);
        });

        // Glitch effect on title
        const heroTitle = document.querySelector('.hero-title');
        if(heroTitle) {
            setInterval(() => {
                if(Math.random() > 0.7) {
                    heroTitle.classList.add('flicker');
                    setTimeout(() => {
                        heroTitle.classList.remove('flicker');
                    }, 200);
                }
            }, 3000);
        }

        // Button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Live visitor count
        function updateVisitorCount() {
            const countElement = document.getElementById('visitorCount');
            if(countElement) {
                const baseCount = 1247;
                const randomAdd = Math.floor(Math.random() * 10);
                countElement.textContent = (baseCount + randomAdd).toLocaleString();
            }
        }
        setInterval(updateVisitorCount, 5000);
        updateVisitorCount();
    </script>
</body>
</html>`;
