export default function Tailwindcss() {
    return (
        <>
        <FlexboxGrid/> 
        <div>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-purple-900 text-gray-200 py-4 px-2 mx-4 rounded shadow-lg">Click Me
            </button>
        </div>
        <Spacing/>
        <Typography/>
        <BorderRadius/>
        <BackgroundColors/>  
        <ShadowEffects/>    
        </>
    )
}

function Spacing(){
    return (
        <div className="bg-purple-100 shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-purple-800 font-semibold">Card Title</h2>
            <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold text-purple-500">Tailwind Typography</h1>
            <p className="text-gray-500 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-3 border-purple-300 text-purple-400 px-4 py-2 ml-4 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-purple-500 text-gray-300 p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-purple font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-purple-900 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg text-white font-bold">Logout</h1>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-purple-100 shadow-lg p-6 m-4 rounded-lg hover:rotate-2 transition">
            <h3 className="text-purple-900 font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}