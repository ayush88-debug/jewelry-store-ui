import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// --- Helper Data ---
// In a real app, this data would come from an API
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


// --- SVG Icons ---
const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);
const ChevronLeftThinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightThinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);
const PlayIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
);
const UserIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const HeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const StarIcon = ({ filled, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#00B57A" : "none"} stroke={filled ? "#00B57A" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const ReturnIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M4 12l4-4M4 12l4 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 20a8 8 0 1 0 0-16" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const SilverIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5S7.858 6.5 12 6.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6.5V2.5m-3 12h6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const WarrantyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7v5l3 2" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const PremiumIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1L12 2.25l3.093 6.255 6.9 1-5 4.867 1.179 6.873L12 17.75z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CheckGreenIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 4L6 11.333 2.667 8" stroke="#00B57A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const TopBanner = () => {
    // Simple countdown logic
    const timeLeft = "03:34:15";
    return (
        <div className="bg-[#C48282] text-white text-center py-2.5 text-sm">
            50% off on all items Only Limited Time Deal Offer ending in <span className="font-semibold">{timeLeft}</span>
        </div>
    );
}

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="flex-shrink-0 w-60 text-left font-manrope">
            <div className="relative bg-zinc-100 group">
                <div className="absolute top-2 left-2 bg-[#C53030] text-white text-xs font-bold px-2 py-1">
                    BestSeller
                </div>
                <img src={product.image} alt={product.name} className="w-full h-72 object-cover"/>
                <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow"
                >
                    <HeartIcon className={isWishlisted ? 'fill-rose-500 stroke-rose-500' : 'stroke-zinc-800'}/>
                </button>
            </div>
            <h3 className="mt-2 text-sm text-zinc-700">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
                <p className="font-bold text-zinc-900 text-md">₹ {product.price}</p>
                <p className="text-sm text-zinc-400 line-through">₹{product.originalPrice}</p>
            </div>
            <p className="text-xs text-zinc-500">({product.rating})</p>
            <button className="mt-3 w-full bg-[#C48282] text-white py-2.5 text-sm font-semibold hover:bg-[#d88b8b] transition-colors">
                Add to Cart
            </button>
        </div>
    );
};

const ProductCarousel = ({ title, products }) => {
    return (
        <div className="w-full py-16">
            <h2 className="text-4xl font-['Roboto'] font-medium text-center text-zinc-800 mb-8">{title}</h2>
            <div className="relative">
                <div className="flex items-center justify-center">
                    <button className="absolute -left-5 z-10 bg-white p-2.5 rounded-full shadow-lg hover:bg-zinc-100 transition-colors">
                        <ChevronLeftThinIcon className="h-6 w-6 text-zinc-800"/>
                    </button>
                    <div className="flex space-x-6 overflow-x-auto px-4 pb-4">
                        {products.map(product => <ProductCard key={product.id} product={product}/>)}
                    </div>
                    <button className="absolute -right-5 z-10 bg-white p-2.5 rounded-full shadow-lg hover:bg-zinc-100 transition-colors">
                        <ChevronRightThinIcon className="h-6 w-6 text-zinc-800"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Header = () => (
    <header className="py-4 bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold">LOGO</h1>
            <nav className="hidden md:flex items-center space-x-8 text-zinc-700 text-base">
                <a href="#" className="flex items-center gap-1 hover:text-[#FF8899]">Collections <ChevronDownIcon/></a>
                <a href="#" className="flex items-center gap-1 hover:text-[#FF8899]">Categories <ChevronDownIcon/></a>
                <a href="#" className="hover:text-[#FF8899]">Hot Picks</a>
                <a href="#" className="hover:text-[#FF8899]">Gifts</a>
                <a href="#" className="hover:text-[#FF8899]">Shop All</a>
            </nav>
            <div className="flex items-center space-x-2">
                <button className="text-sm px-8 py-2.5 bg-[#FF8899] text-white hover:bg-opacity-90 font-semibold rounded-sm">LOGIN</button>
                <button className="text-sm px-8 py-2.5 border border-[#FF8899] text-[#FF8899] hover:bg-rose-50 font-semibold rounded-sm">REGISTER</button>
            </div>
        </div>
    </header>
);

const Footer = () => (
    <>
        <footer className="bg-[#F5F5F4] text-zinc-700 py-12 font-manrope border-t">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-1">
                     <h3 className="font-semibold mb-4 text-[#C53030]">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-[#FF8899]">Customer Reviews</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Our Blogs</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Store Locator</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Jewellery Care</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4 text-[#C53030]">Details</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-[#FF8899]">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">International Shipping</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">FAQ's and Support</a></li>
                        <li><a href="#" className="hover:text-[#FF8899]">Terms of Service</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold mb-4 text-[#C53030]">Details</h3>
                    <ul className="space-y-3 text-sm">
                         <li><a href="#" className="hover:text-[#FF8899]">Shipping & Returns</a></li>
                         <li><a href="#" className="hover:text-[#FF8899]">Privacy Policy</a></li>
                         <li><a href="#" className="hover:text-[#FF8899]">International Shipping</a></li>
                         <li><a href="#" className="hover:text-[#FF8899]">FAQ's and Support</a></li>
                         <li><a href="#" className="hover:text-[#FF8899]">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h3 className="font-semibold mb-4 text-[#C53030]">Contact Us</h3>
                    <div className="text-sm space-y-3">
                        <p>Elegant Jewels<br/>SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301</p>
                        <p>For any suggestions, queries or complaints please contact us:</p>
                        <p>Elegantjewel Private Limited</p>
                        <p>contact@elegantjewels.com</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-full">
                    <h3 className=" text-zinc-800">Our Social Links:</h3>
                     <div className="flex space-x-4 mt-2">
                        <a href="#"><FaLinkedin className='text-[#C53030] hover:opacity-75 text-2xl'/></a>
                        <a href="#"><FaFacebookF className='text-[#C53030] hover:opacity-75 text-2xl' /></a>
                        <a href="#"><FaInstagram className='text-[#C53030] hover:opacity-75 text-2xl' /></a>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bg-[#C48282] text-white py-3">
            <div className="container mx-auto px-4 text-center text-sm">
                <p>&copy; 2024 Elegant Jewels. All Rights Reserved.</p>
            </div>
        </div>
    </>
);

// --- Main App Component ---
export default function App() {
  useEffect(() => {
    // Add Google Fonts link to the document head
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Playfair+Display:wght@700&display=swap";
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="font-manrope bg-white text-zinc-800">
      <TopBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-sm text-zinc-500 mb-6 flex items-center space-x-2">
            <span>Home</span> <ChevronRightThinIcon className="w-4 h-4" />
            <span>Jewellery</span> <ChevronRightThinIcon className="w-4 h-4" />
            <span>Gifts</span> <ChevronRightThinIcon className="w-4 h-4" />
            <span>Necklace</span> <ChevronRightThinIcon className="w-4 h-4" />
            <span>Chains</span> <ChevronRightThinIcon className="w-4 h-4" />
            <span className="font-semibold text-zinc-700">Shining Diva...</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Product Image Gallery */}
            <div className="flex items-start justify-center">
                <div className="relative w-full max-w-lg">
                     <div className="bg-zinc-100 flex items-center justify-center p-4 h-[550px] relative">
                        <img src="https://placehold.co/450x450/F5EBEB/B07474?text=Product+Image" alt="Gold-Plated Pearls Necklace" className="max-h-full max-w-full object-contain"/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                            <PlayIcon className="text-white"/>
                        </div>
                     </div>
                     <button className="absolute top-1/2 -translate-y-1/2 -left-5 bg-white p-2 rounded-full shadow-md">
                        <ChevronLeftThinIcon className="h-6 w-6 text-zinc-600"/>
                    </button>
                    <button className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white p-2 rounded-full shadow-md">
                        <ChevronRightThinIcon className="h-6 w-6 text-zinc-600"/>
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-white p-8">
                <h2 className="text-4xl font-['Roboto'] font-light text-black">Gold-Plated Pearls Necklace</h2>
                <span className="inline-block font-['Roboto'] font-medium text-4xl text-gray-400">Made with 925 Silver</span>
                
                <div className="flex items-center mt-4">
                    <div className="bg-[#00B57A] text-white text-sm font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                       4.1 <StarIcon filled className="w-3 h-3 text-white fill-white stroke-white"/>
                    </div>
                    <span className="ml-3 text-sm text-zinc-800 font-semibold">(23)</span>
                </div>
                
                <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-zinc-900">₹ 1,600</span>
                    <span className="text-lg text-zinc-400 line-through ml-3">₹2,000</span>
                    <span className="text-green-600 font-semibold ml-4">(20% off)</span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-sm text-zinc-700">
                    <div className="flex items-center space-x-3"><ReturnIcon /><span>Easy 30 Day Return</span></div>
                    <div className="flex items-center space-x-3"><SilverIcon /><span>925 Silver Plating</span></div>
                    <div className="flex items-center space-x-3"><WarrantyIcon /><span>6- Month Warranty</span></div>
                    <div className="flex items-center space-x-3"><PremiumIcon /><span>Premium Gold</span></div>
                </div>

                <div className="mt-8 flex space-x-4">
                    <button className="flex-1 border border-[#FF8899] text-[#FF8899] font-bold py-3 hover:bg-rose-50 transition-colors text-sm rounded-sm">ADD TO CART</button>
                    <button className="flex-1 bg-[#FF8899] text-white font-bold py-3 hover:bg-opacity-90 transition-colors text-sm rounded-sm">BUY NOW</button>
                </div>

                <div className="mt-8 border rounded-md p-4">
                    <p className="font-semibold text-zinc-800">Estimated Delivery Time</p>
                    <div className="flex mt-2 items-center">
                        <input type="text" placeholder="Enter Pincode" className="flex-grow bg-transparent outline-none"/>
                        <button className="text-[#FF8899] font-semibold">Check</button>
                    </div>
                </div>
                
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-zinc-800">Offers <span className="text-xs font-normal text-zinc-500">2 available</span></h3>
                        <button className="text-sm text-[#FF8899] font-semibold">Check</button>
                    </div>
                    <p className="text-sm text-zinc-600 mt-1">Coupon can be applied at checkout</p>
                </div>

                <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-3">Product Description</h3>
                    <div className="space-y-2 text-zinc-600 text-sm">
                      <p className="flex items-center gap-2"><CheckGreenIcon /> <span>Material: <span className="font-semibold text-zinc-800">925 Sterling Silver</span></span></p>
                      <p className="flex items-center gap-2"><CheckGreenIcon /> <span>Plating: <span className="font-semibold text-zinc-800">18K Gold</span></span></p>
                      <p className="flex items-center gap-2"><CheckGreenIcon /> <span>Weight: <span className="font-semibold text-zinc-800">10grams</span></span></p>
                      <p className="flex items-center gap-2"><CheckGreenIcon /> <span>Stone Type: <span className="font-semibold text-zinc-800">Premium Jerkin</span></span></p>
                    </div>
                </div>

                 <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-3">Shipping</h3>
                    <p className="text-sm text-zinc-600">Get it by <span className="font-semibold text-[#FF8899]">25 Sept</span></p>
                </div>

                <div className="mt-6 border-t pt-6">
                    <h3 className="font-semibold text-zinc-800 text-md mb-4">Customer Ratings</h3>
                    <div className="mt-4">
                        <div className="pb-6">
                           <div className="flex items-center gap-3">
                               <UserIcon className="text-zinc-400" />
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
                               <UserIcon className="text-zinc-400" />
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

