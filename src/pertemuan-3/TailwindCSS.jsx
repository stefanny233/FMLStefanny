export default function Tailwindcss() {
    return (
        <div className="min-h-screen bg-[#F8F9FB] text-gray-900 font-sans selection:bg-purple-100">
            <FlexboxGrid/> 
            
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Header Section */}
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 mb-4">
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                        <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">New Update 4.0</span>
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900 mb-6">
                        Belajar Tailwind <span className="text-purple-600">CSS 4</span>
                    </h1>
                    <button className="group relative bg-purple-900 text-gray-100 py-4 px-8 rounded-xl font-semibold shadow-2xl shadow-purple-950/20 hover:bg-purple-800 transition-all duration-300 active:scale-95 overflow-hidden">
                        <span className="relative z-10">Click Me</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <Spacing/>
                    </div>
                    <div className="md:col-span-1">
                        <Typography/>
                    </div>
                    <div className="md:col-span-1">
                        <BorderRadius/>
                    </div>
                    <div className="md:col-span-1">
                        <BackgroundColors/>
                    </div>
                    <div className="md:col-span-1">
                        <ShadowEffects/>
                    </div>
                </div>
            </main>
        </div>
    )
}

function Spacing(){
    return (
        <div className="h-full bg-white border border-gray-200/60 p-10 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:border-purple-200 transition-colors duration-500">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
                <div className="h-10 w-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-400">#1</div>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Menguasai <span className="text-gray-900 font-medium tracking-tight">padding dan margin</span> adalah langkah awal menciptakan desain yang bernapas dan eksklusif.
            </p>
        </div>
    )
}

function Typography(){
    return (
        <div className="h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200/60 p-8 rounded-3xl flex flex-col justify-center">
            <h1 className="text-3xl font-black text-purple-600 leading-[0.9] tracking-tighter mb-4">
                Tailwind<br/>Typography
            </h1>
            <p className="text-gray-400 text-sm font-medium leading-relaxed uppercase tracking-wider">
                Efisiensi dalam setiap karakter.
            </p>
        </div>
    )
}

function BorderRadius(){
    return (
        <div className="h-full flex items-center justify-center p-8 bg-white border border-gray-200/60 rounded-3xl">
            <button className="w-full border-2 border-purple-100 text-purple-600 font-bold px-6 py-4 rounded-2xl hover:bg-purple-50 hover:border-purple-600 transition-all duration-300"> 
                Klik Saya 
            </button>
        </div>
    )
}

function BackgroundColors(){
    return(
        <div className="h-full bg-purple-900 p-8 rounded-3xl shadow-xl shadow-purple-900/10 flex flex-col justify-between">
            <div>
                <h3 className="text-purple-100 font-bold text-xl mb-2">Tailwind Colors</h3>
                <p className="text-purple-300/80 text-sm leading-relaxed">
                    Eksplorasi palet warna yang kohesif antara Purple dan Neutral Grays.
                </p>
            </div>
            <div className="mt-6 flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className={`w-8 h-8 rounded-full border-2 border-purple-900 bg-purple-${i*2}00`}></div>)}
            </div>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg shadow-lg rotate-3 flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <h1 className="text-lg font-black tracking-tighter text-gray-900 uppercase">ProDev</h1>
                </div>
                
                <ul className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-sm font-bold text-gray-400 hover:text-purple-600 transition-colors uppercase tracking-widest">{item}</a>
                        </li>
                    ))}
                </ul>
                
                <button className="text-xs font-black text-white bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-5 py-2 rounded-lg transition-all duration-300">
                    LOGOUT
                </button>
            </div>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="group h-full bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col items-center text-center justify-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 className="text-gray-900 font-bold text-lg">Hover me!</h3>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-tighter">Smooth Transition Effect</p>
        </div>
    )
}