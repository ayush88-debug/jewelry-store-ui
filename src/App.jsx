import React, { useState, useEffect } from 'react';

// --- SVG Icon Imports from assets folder ---
import BackArrowIcon from './assets/back-arrow.svg';
import BagIcon from './assets/bag.svg';
import CheckGreenIcon from './assets/check-green.svg';
import ChevronDownIcon from './assets/chevron-down.svg';
import ChevronLeftThinIcon from './assets/chevron-left-thin.svg';
import ChevronRightThinIcon from './assets/chevron-right-thin.svg';
import FacebookIcon from './assets/facebook.svg';
import HamburgerIcon from './assets/hamburger.svg';
import HeartIcon from './assets/heart.svg';
import InstagramIcon from './assets/instagram.svg';
import LinkedinIcon from './assets/linkedin.svg';
import LoginIcon from './assets/login.svg';
import PlayIcon from './assets/play.svg';
import PlusIcon from './assets/plus.svg';
import PremiumIcon from './assets/premium.svg';
import ReturnIcon from './assets/return.svg';
import SidebarLinkIcon from './assets/sidebar-link.svg';
import SilverIcon from './assets/silver.svg';
import StarIcon from './assets/star.svg';
import UserIcon from './assets/user.svg';
import WarrantyIcon from './assets/warranty.svg';


// --- Helper Data ---
const similarProducts = [
  { id: 1, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Product+1' },
  { id: 2, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Product+2' },
  { id: 3, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Product+3' },
  { id: 4, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Product+4' },
  { id: 5, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Product+5' },
];

const topPicks = [
    { id: 1, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Pick+1' },
    { id: 2, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Pick+2' },
    { id: 3, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Pick+3' },
    { id: 4, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Pick+4' },
    { id: 5, name: 'Rose Gold Earrings with alloy', price: '1999', originalPrice: '2999', rating: 4, image: 'https://placehold.co/300x400/F5EBEB/B07474?text=Pick+5' },
];

const TopBanner = () => {
    return (
        <div className="bg-[#CA8787] text-white text-center py-2.5 text-sm">
            50% off on all items Only Limited Time Deal Offer ending in <span className="font-semibold">03:34:15</span>
        </div>
    );
}

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="flex-shrink-0 w-40 md:w-60 text-left font-manrope">
            <div className="relative bg-zinc-100 group">
                <div className="absolute top-2 left-2 bg-[#A40303] text-white text-xs font-bold px-2 py-1">
                    BestSeller
                </div>
                <img src={product.image} alt={product.name} className="w-full h-52 md:h-72 object-cover"/>
                <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow"
                >
                    <img src={HeartIcon} alt="Wishlist" className={`w-4 h-4 md:w-5 md:h-5 transition-all ${isWishlisted ? 'fill-rose-500 stroke-rose-500' : 'stroke-zinc-800'}`}/>
                </button>
            </div>
            <h3 className="mt-2 text-xs md:text-sm text-zinc-700">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
                <p className="font-bold text-zinc-900 text-sm md:text-md">₹ {product.price}</p>
                <p className="text-xs md:text-sm text-zinc-400 line-through">₹{product.originalPrice}</p>
            </div>
            <p className="text-xs text-zinc-500">({product.rating})</p>
            <button className="mt-3 w-full bg-[#CA8787] text-white py-2 md:py-2.5 text-xs md:text-sm font-semibold hover:bg-[#d88b8b] transition-colors">
                Add to Cart
            </button>
        </div>
    );
};

const ProductCarousel = ({ title, products }) => {
    return (
        <div className="w-full py-8 md:py-16">
            <h2 className="text-2xl md:text-4xl font-['Roboto'] font-medium text-center text-zinc-800 mb-6 md:mb-8">{title}</h2>
            <div className="relative">
                <div className="flex items-center justify-center">
                    <button className="absolute -left-2 md:-left-5 z-10 bg-white p-2.5 rounded-full shadow-lg hover:bg-zinc-100 transition-colors hidden md:block">
                        <img src={ChevronLeftThinIcon} alt="Previous" className="h-6 w-6 text-zinc-800"/>
                    </button>
                    <div className="flex space-x-4 md:space-x-6 overflow-x-auto px-4 pb-4">
                        {products.map(product => <ProductCard key={product.id} product={product}/>)}
                    </div>
                    <button className="absolute -right-2 md:-right-5 z-10 bg-white p-2.5 rounded-full shadow-lg hover:bg-zinc-100 transition-colors hidden md:block">
                        <img src={ChevronRightThinIcon} alt="Next" className="h-6 w-6 text-zinc-800"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Header = ({ onMenuClick }) => (
    <header className="py-3 md:py-4 bg-white shadow-sm md:shadow-none">
        <div className="container mx-auto px-4 flex justify-between items-center">
             {/* Mobile Header */}
            <div className="md:hidden flex items-center gap-4">
                <button onClick={onMenuClick}>
                    <img src={HamburgerIcon} alt="Menu" className="text-zinc-800" />
                </button>
                <h1 className="text-2xl font-bold">LOGO</h1>
            </div>
            <div className="md:hidden flex items-center space-x-4">
                <button><img src={HeartIcon} alt="Wishlist" className="text-zinc-800"/></button>
                <button><img src={BagIcon} alt="Shopping Bag" className="text-zinc-800"/></button>
            </div>

            {/* Desktop Header */}
            <h1 className="text-4xl font-bold hidden md:block">LOGO</h1>
            <nav className="hidden md:flex items-center space-x-8 text-zinc-700 text-base">
                <a href="#" className="flex items-center gap-1 hover:text-[#FF8F9D]">Collections <img src={ChevronDownIcon} alt="Dropdown"/></a>
                <a href="#" className="flex items-center gap-1 hover:text-[#FF8F9D]">Categories <img src={ChevronDownIcon} alt="Dropdown"/></a>
                <a href="#" className="hover:text-[#FF8F9D]">Hot Picks</a>
                <a href="#" className="hover:text-[#FF8F9D]">Gifts</a>
                <a href="#" className="hover:text-[#FF8F9D]">Shop All</a>
            </nav>
            <div className="hidden md:flex items-center space-x-2">
                <button className="text-sm px-8 py-2.5 bg-[#FF8F9D] text-white hover:bg-opacity-90 font-bold">LOGIN</button>
                <button className="text-sm px-8 py-2.5 border border-[#FF8F9D] text-[#FF8F9D] hover:bg-rose-50 font-bold">REGISTER</button>
            </div>
        </div>
    </header>
);

const Footer = () => (
    <>
        <footer className="bg-[#F5F5F4] text-zinc-700 py-12 font-manrope border-t">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-1">
                     <h3 className="font-semibold mb-4 text-[#A40303]">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-[#FF8F9D]">Customer Reviews</a></li>
                        <li><a href="#" className="hover:text-[#FF8F9D]">Our Blogs</a></li>
                        <li><a href="#" className="hover:text-[#FF8F9D]">Store Locator</a></li>
                        <li><a href="#" className="hover:text-[#FF8F9D]">Jewellery Care</a></li>
                        <li><a href="#" className="hover:text-[#FF8F9D]">Join Us</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="font-semibold mb-4 text-[#A40303]">Details</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-[#FF8F9D]">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-[#FF8F9D]">Privacy Policy</a></li>
                    </ul>
                </div>
                 <div className="col-span-2 md:col-span-1">
                    <h3 className="font-semibold mb-4 text-[#A40303] md:invisible">Details</h3>
                    <ul className="space-y-3 text-sm">
                         <li><a href="#" className="hover:text-[#FF8F9D]">International Shipping</a></li>
                         <li><a href="#" className="hover:text-[#FF8F9D]">FAQ's and Support</a></li>
                         <li><a href="#" className="hover:text-[#FF8F9D]">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h3 className="font-semibold mb-4 text-[#A40303]">Contact Us</h3>
                    <div className="text-sm space-y-3">
                        <p>Elegant Jewels<br/>SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301</p>
                        <p className="hidden md:block">For any suggestions, queries or complaints please contact us:</p>
                        <p>Elegantjewel Private Limited</p>
                        <p>contact@elegantjewels.com</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-full">
                    <h3 className="font-semibold text-zinc-800">Our Social Links:</h3>
                     <div className="flex space-x-4 mt-2">
                         <a href="#"><img src={LinkedinIcon} alt="LinkedIn" className='text-[#A40303] hover:opacity-75 h-6 w-6'/></a>
                         <a href="#"><img src={FacebookIcon} alt="Facebook" className='text-[#A40303] hover:opacity-75 h-6 w-6' /></a>
                         <a href="#"><img src={InstagramIcon} alt="Instagram" className='text-[#A40303] hover:opacity-75 h-6 w-6' /></a>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bg-[#CA8787] text-white py-3">
            <div className="container mx-auto px-4 text-center text-sm">
                <p>&copy; 2024 Elegant Jewels. All Rights Reserved.</p>
            </div>
        </div>
    </>
);

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
            <div className={`fixed top-0 left-0 h-full bg-[#CA8787] w-4/5 max-w-sm z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-5 text-white">
                    <ul>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={PlusIcon} alt="" /> Add Account</a></li>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={SidebarLinkIcon} alt="" /> Gold Jewellery</a></li>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={SidebarLinkIcon} alt="" /> Silver Jewellery</a></li>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={SidebarLinkIcon} alt="" /> Trending Collection</a></li>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={SidebarLinkIcon} alt="" /> Gifts</a></li>
                        <li className="py-3.5 border-b border-white/30"><a href="#" className="flex items-center gap-3 text-base"><img src={SidebarLinkIcon} alt="" /> Shop by Occasion</a></li>
                    </ul>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center gap-3 bg-white text-zinc-800 font-semibold py-3 px-4 rounded-md text-base">
                            <img src={LoginIcon} alt="Login" /> Login / SignUp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

// --- Main App Component ---
export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Add Google Fonts link to the document head
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Playfair+Display:wght@700&family=Roboto:wght@300,400,500,700&display=swap";
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="font-manrope bg-white text-zinc-800">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopBanner />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        <div className="text-sm text-zinc-500 mb-4 md:mb-6 flex items-center space-x-2 md:hidden">
            <button><img src={BackArrowIcon} alt="Back" /></button>
            <span className="font-semibold text-zinc-800 text-lg">Product Details</span>
        </div>
        <div className="text-sm text-zinc-500 mb-6 items-center space-x-2 hidden md:flex">
            <span>Home</span> <img src={ChevronRightThinIcon} alt=">" className="w-4 h-4" />
            <span>Jewellery</span> <img src={ChevronRightThinIcon} alt=">" className="w-4 h-4" />
            <span>Gifts</span> <img src={ChevronRightThinIcon} alt=">" className="w-4 h-4" />
            <span>Necklace</span> <img src={ChevronRightThinIcon} alt=">" className="w-4 h-4" />
            <span>Chains</span> <img src={ChevronRightThinIcon} alt=">" className="w-4 h-4" />
            <span className="font-semibold text-zinc-700">Shining Diva...</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
            {/* Product Image Gallery */}
            <div className="flex items-start justify-center">
                <div className="relative w-full max-w-lg">
                     <div className="bg-zinc-100 flex items-center justify-center p-4 h-[400px] md:h-[550px] relative">
                        <img src="https://placehold.co/450x450/F5EBEB/B07474?text=Product+Image" alt="Gold-Plated Pearls Necklace" className="max-h-full max-w-full object-contain"/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity cursor-pointer md:flex hidden">
                            <img src={PlayIcon} alt="Play" className="text-white"/>
                        </div>
                     </div>
                     <div className="flex justify-center items-center space-x-2 mt-4 md:hidden">
                         <span className="h-1.5 w-1.5 bg-rose-300 rounded-full"></span>
                         <span className="h-1.5 w-1.5 bg-gray-300 rounded-full"></span>
                         <span className="h-1.5 w-1.5 bg-gray-300 rounded-full"></span>
                         <span className="h-1.5 w-1.5 bg-gray-300 rounded-full"></span>
                         <span className="h-1.5 w-1.5 bg-gray-300 rounded-full"></span>
                     </div>
                     <button className="absolute top-1/2 -translate-y-1/2 -left-5 bg-white p-2 rounded-full shadow-md hidden md:block">
                        <img src={ChevronLeftThinIcon} alt="Previous" className="h-6 w-6 text-zinc-600"/>
                    </button>
                    <button className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white p-2 rounded-full shadow-md hidden md:block">
                        <img src={ChevronRightThinIcon} alt="Next" className="h-6 w-6 text-zinc-600"/>
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-white p-0 md:p-8 mt-4 md:mt-0">
                <h2 className="text-xl md:text-4xl font-['Roboto'] font-light text-black">Gold-Plated Pearls Necklace</h2>
                <span className="inline-block font-['Roboto'] font-medium text-lg md:text-4xl text-gray-400">Made with 925 Silver</span>
                
                <div className="flex items-center mt-4">
                    <div className="bg-[#388E3C] text-white text-sm font-semibold px-2 py-0.5 flex items-center gap-1">
                       4.1 <img src={StarIcon} alt="Star" className="w-3 h-3 text-white fill-white" style={{ stroke: "#fff" }} />
                    </div>
                    <span className="ml-3 text-sm text-zinc-800 font-semibold">(23)</span>
                </div>
                
                <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-zinc-900">₹ 1,600</span>
                    <span className="text-lg text-zinc-400 line-through ml-3">₹2,000</span>
                    <span className="text-green-600 font-semibold ml-4">(20% off)</span>
                </div>
                
                <div className="mt-8 flex space-x-4">
                    <button className="flex-1 border border-[#FF8F9D] text-[#FF8F9D] font-bold py-3 hover:bg-rose-50 transition-colors text-sm">ADD TO CART</button>
                    <button className="flex-1 bg-[#FF8F9D] text-white font-bold py-3 hover:bg-opacity-90 transition-colors text-sm">BUY NOW</button>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-sm text-zinc-700">
                    <div className="flex items-center space-x-3"><img src={ReturnIcon} alt="Return" /><span className='text-lg'>Easy 30 Day Return</span></div>
                    <div className="flex items-center space-x-3"><img src={SilverIcon} alt="Silver" /><span className='text-lg'>925 Silver Plating</span></div>
                    <div className="flex items-center space-x-3"><img src={WarrantyIcon} alt="Warranty" /><span className='text-lg'>6- Month Warranty</span></div>
                    <div className="flex items-center space-x-3"><img src={PremiumIcon} alt="Premium" /><span className='text-lg'>Premium Gold</span></div>
                </div>

                <div className="mt-8 border rounded-md p-4">
                    <p className="font-semibold text-zinc-800">Estimated Delivery Time</p>
                    <div className="flex mt-2 items-center">
                        <input type="text" placeholder="Enter Pincode" className="flex-grow bg-transparent outline-none"/>
                        <button className="text-[#FF8F9D] font-semibold">Check</button>
                    </div>
                </div>
                
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-zinc-800">Offers <span className="text-xs font-normal text-zinc-500">2 available</span></h3>
                        <button className="text-sm text-[#FF8F9D] font-semibold">Check</button>
                    </div>
                    <p className="text-sm text-zinc-600 mt-1">Coupon can be applied at checkout</p>
                </div>

                <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-3">Product Description</h3>
                    <div className="space-y-2 text-zinc-600 text-sm">
                      <p className="flex items-center gap-2"><img src={CheckGreenIcon} alt="Check" /> <span>Material: <span className="font-semibold text-zinc-800">925 Sterling Silver</span></span></p>
                      <p className="flex items-center gap-2"><img src={CheckGreenIcon} alt="Check" /> <span>Plating: <span className="font-semibold text-zinc-800">18K Gold</span></span></p>
                      <p className="flex items-center gap-2"><img src={CheckGreenIcon} alt="Check" /> <span>Weight: <span className="font-semibold text-zinc-800">10grams</span></span></p>
                      <p className="flex items-center gap-2"><img src={CheckGreenIcon} alt="Check" /> <span>Stone Type: <span className="font-semibold text-zinc-800">Premium Jerkin</span></span></p>
                    </div>
                </div>

                 <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-3">Shipping</h3>
                    <p className="text-sm text-zinc-600">Get it by <span className="font-semibold text-[#FF8F9D]">25 Sept</span></p>
                </div>

                <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-4">Customer Ratings</h3>
                    <div className="mt-4">
                        <div className="pb-6">
                           <div className="flex items-center gap-3">
                               <img src={UserIcon} alt="User" className="text-zinc-400" />
                               <div>
                                   <p className="font-semibold text-zinc-800">Anu</p>
                                   <p className="text-xs text-zinc-500 mt-0.5">15/08/24</p>
                               </div>
                           </div>
                           <p className="text-zinc-600 mt-3 text-sm leading-relaxed">Such a gorgeous necklace. Got many compliments as well. Absolutely loved it</p>
                           <div className="flex gap-3 mt-3">
                               <div className="w-24 h-24 bg-zinc-100 rounded-md"></div>
                               <div className="w-24 h-24 bg-zinc-100 rounded-md"></div>
                           </div>
                        </div>
                        <hr className="border-rose-200" />
                        <div className="pt-6">
                           <div className="flex items-center gap-3">
                               <img src={UserIcon} alt="User" className="text-zinc-400" />
                               <div>
                                   <p className="font-semibold text-zinc-800">Anu</p>
                                   <p className="text-xs text-zinc-500 mt-0.5">15/08/24</p>
                               </div>
                           </div>
                           <p className="text-zinc-600 mt-3 text-sm leading-relaxed">Looks beautiful 😼❤️❤️❤️ Go for it girls 🤗💖💐 the quality is good ..</p>
                           <div className="flex gap-3 mt-3">
                               <div className="w-24 h-24 bg-zinc-100 rounded-md"></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <ProductCarousel title="Similar to this" products={similarProducts} />
        <ProductCarousel title="Top picks for you" products={topPicks} />

      </main>

      <Footer />
    </div>
  );
}

