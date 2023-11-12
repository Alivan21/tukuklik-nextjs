import Link from "next/link";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex w-full flex-col items-center gap-14 bg-white p-8 md:px-16">
        <section className="grid w-full grid-cols-1 gap-8 border-b-2 pb-10 lg:grid-cols-4 lg:gap-5">
          <div className="inline-flex items-center gap-3 lg:border-r-2">
            <Icon className="text-red-500" name="rocket" size={42} strokeWidth={1} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-700">Free Delivery</p>
              <span className="text-gray-700">For all oders over $99</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 lg:border-r-2">
            <Icon className="text-red-500" name="rocket" size={42} strokeWidth={1} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-700">Free Delivery</p>
              <span className="text-gray-700">For all oders over $99</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 lg:border-r-2">
            <Icon className="text-red-500" name="rocket" size={42} strokeWidth={1} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-700">Free Delivery</p>
              <span className="text-gray-700">For all oders over $99</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-3">
            <Icon className="text-red-500" name="rocket" size={42} strokeWidth={1} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-700">Free Delivery</p>
              <span className="text-gray-700">For all oders over $99</span>
            </div>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-8 border-b-2 pb-10 lg:grid-cols-4 lg:gap-5">
          <div>
            <p className="font-semibold text-gray-900">Contact Us</p>
            <div className="my-6 flex flex-col gap-2 text-sm text-gray-700">
              <span>Call us 24/7</span>
              <span className="text-2xl font-semibold text-red-600">1800 97 97 69</span>
              <div className="flex w-full flex-col gap-0">
                <span>502 New Design Str, Melbourne, Australia</span>
                <span>contact@martfury.co</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Icon className="text-blue-600" fill="#2563eb" name="facebook" size={24} strokeWidth={1} />
              </Link>
              <Link href="/">
                <Icon className="text-[#00acee]" fill="#00acee" name="twitter" size={24} strokeWidth={1} />
              </Link>
              <Link href="/">
                <Icon color="#6b21a8" name="instagram" size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Quick Links</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Policy
                <span className="block h-[0.95px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Term & Condition
                <span className="block h-[0.95px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Shipping
                <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Return
                <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                FAQs
                <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Company</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                About Us
                <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Affiliate
                <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Contact
                <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Bussiness</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Our Press
                <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                Checkout
                <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-gray-500 transition duration-300" href="/">
                My Account
                <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-5">
          <h1 className="text-gray-900">&copy; 2023 Tukuklik. All Rights Reserved</h1>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
