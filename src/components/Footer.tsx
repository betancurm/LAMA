import react from 'react';

interface Footerprops {
    title: string;

}
const Footer: React.FC<Footerprops> = ({ title }) => {
    return (
    <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-l px-4 py-8 sm:px-6 lg:px-4 lg:pt-2">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
             
            </div>
            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                Copyright &copy; {new Date().getFullYear()} | All rights REVERSED
            </p>
        </div>
    </footer>
    );
}
export default Footer;