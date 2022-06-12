import { Link, useFetcher, useTransition, Form } from "@remix-run/react";
// import Footer from "~/components/Footer";

// import { useOptionalUser } from "~/utils";

export default function Index() {
  // const user = useOptionalUser();
  const text = useFetcher()

  const btcBtnTransition = useTransition()
    const btcBtn = 
    btcBtnTransition.state === "submitting"
    ? "Loading BTC Calc"
    : btcBtnTransition.state === 'loading'
    ? "Loading BTC Calc"
    : "Bitcoin Calculator";

  const stockBtnTransition = useTransition()
    const stockBtn = 
    stockBtnTransition.state === "submitting"
    ? "Loading Calc"
    : stockBtnTransition.state === 'loading'
    ? "Loading Calc"
    : "Stock Calculator"; 

  return (
    <main className="relative min-h-screen mx-auto flex flex-col sm:flex sm:items-center w-full">
      <div className="py-24 sm:py-32 px-4">
        <div className="mb-4 text-center">
          <h2 className="text-5xl font-bold mb-1">Dollar Cost Average Calculator</h2>
          <p className="text-xl font-thin ">Accumulate your favorite assets with consistent purchases</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          
          <Link className='sm:w-44 w-full bg-orange-500 border border-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 p-4 rounded-lg text-center font-bold text-white hover:transition-all hover:ease-in-out hover:duration-500 hover:shadow-xl' 
            to='/calculator/bitcoin?frequency=Monthly&amount=100&startDate=2021-01-01&endDate=2021-12-31'>
            Bitcoin Calculator
          </Link>
          
          <Link className='sm:w-44 bg-white border border-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500 p-4 rounded-lg text-center font-bold hover:transition-all hover:ease-in-out hover:duration-500 hover:shadow-xl' 
            to='/calculator/stocks?stock=AAPL&frequency=Monthly&amount=100&startDate=2021-01-01&endDate=2021-12-31'>
            Stock Calculator
          </Link>
        </div>
      </div>
      <div className="py-20 sm:py-32 bg-white px-4 flex flex-col w-full items-center">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Use a DCA Strategy?</h2>
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border border-neutral-200 p-6 shadow-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
              <h4 className="text-xl font-bold mb-2">Reduce Volatility</h4>
              <p>One time investments can be exposed to significant volatility depending upon market conditions. Buying on a consistent basis smooths out volatilty.</p>
            </div>
            <div className="border border-neutral-200 p-6 shadow-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="text-xl font-bold mb-2">Budget Friendly</h4>
              <p>Not everyone has enough cash to buy thousands of dollars worth of stock or bitcoin. Dollar cost averaging allows someone to take their time and buy what they can afford.</p>
            </div>
            <div className="border border-neutral-200 p-6 shadow-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-bold mb-2">Low Stress</h4>
              <p>Day trading is much harder and more stressful than finance influencers make it out to be. No need to worry about trying to time the market. Just set it and forget it.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 sm:py-32 px-4 flex flex-col w-full items-center">
        <h2 className="text-3xl font-semibold mb-6">What is Dollar Cost Averaging?</h2>
        <div className="max-w-2xl">
          <div className="mb-10">
            <p className="mb-4">Dollar cost averaging is an investing technique where an investor buys a fixed dollar 
              amount of an asset at a specified frequency. This is typically done on a dialy, weekly, or monthly basis. 
              Those just starting out in their investing journey don't always have access to a significant 
              amount of money to make a one time purchase. Inflation, budgets, and life can make it difficult 
              for those just starting out. Dollar cost averaging is a great way to get started with your investing journey. 
              Especially since fractional purchases are now available from online brokerages.
            </p>
            <p className="mb-4">
              There is a popular saying in investing that 'Time in the market beats timing the market'. Dollar cost averaging
              allows the investor to worry less about trying to time the market, and take advantage of being invested in the market
              for longer periods of time. Many beginners also have an urge to become day traders, while not thinking about
              investing for the long term and for their future. They also rarely consider the tax consequences of buying and
              selling over short periods of time.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 px-4 sm:py-32 w-full flex flex-col">
        <div className="mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Dollar Cost Average Examples</h2>
        <div className="mb-8">
          <p className="underline mb-2">Buying $5 worth of bitcoin every day from 1-1-2020 until 12-31-2021</p>
          <p className="">• Total Investment: $3,655</p>
          <p>• Total Bitcoin Purchased: 23,098,975 Satoshis</p>
          <p>• Current Value assuming BTC price @ $38,400: $8,867</p>
          <p>• Current Gain assuming BTC price @ $38,400: $5,212</p>
          <p>• Total Return assuming BTC price @ $38,400: 142.6%</p>
        </div>
        <div className="mb-8">
          <p className="underline mb-2">Buying $100 worth of Apple every week from 1-1-2020 until 12-31-2021</p>
          <p className="">• Total Investment: $10,400</p>
          <p>• Total Shares Purchased: 98.3</p>
          <p>• Current Value assuming AAPL price @ $163: $15,908</p>
          <p>• Current Gain assuming AAPL price @ $163: $5,508.83</p>
          <p>• Total Return assuming AAPL price @ $163: 53%</p>
        </div>
        <div className="mb-8">
          <p className="underline mb-2">Buying $250 worth of Amazon every month from 1-1-2020 until 12-31-2021</p>
          <p className="">• Total Investment: $6,000</p>
          <p>• Total Shares Purchased: 2.2</p>
          <p>• Current Value assuming AMZN price @ $2,597: $5,800</p>
          <p>• Current Loss assuming AAPL price @ $163: $199</p>
          <p>• Total Return assuming AAPL price @ $163: -3.3%</p>
        </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}