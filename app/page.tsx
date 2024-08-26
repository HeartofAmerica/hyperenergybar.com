import Image from 'next/image';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav/>
      <div className="py-40 lg:py-96 hero-bg">
        <div className="container max-w-screen-xl px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="block">
              <h1 className="obvi-xl">
                The Search for energy is over
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
