

export default function BitcoinData({ currentData, data, amount, urlData}) {
    const currentPriceDataLength = currentData.length
    const currentPriceBtc = currentData[currentPriceDataLength -1]['close']
    const dcaAmount = amount
    const dcaStartYear = urlData.startDate.slice(0, 4)
    const dcaEndYear = urlData.endDate.slice(0, 4)
    const dcaStartDay = urlData.startDate.slice(5, 10)
    const dcaEndDay = urlData.endDate.slice(5, 10)
    const displayDcaAmount = Number(dcaAmount).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})

    const satsData = data.map((interval) => ((100000000 / interval.close) * amount))
    const totalSats = satsData.reduce((a, v) => a + v, 0)
    const displayTotalSats = Number(totalSats).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const totalInvestment = satsData.length * amount
    const displayTotalInvestment = Number(totalInvestment).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const currentUSD = ((currentPriceBtc / 100000000) * totalSats).toFixed(2)
    const displayCurrentValue = Number(currentUSD).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const gainLoss = (currentUSD - totalInvestment)
    const absGainLoss = Math.abs(gainLoss)
    const displayAbsGainLoss = Number(absGainLoss).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const roundedGainLoss = Number(gainLoss.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const percentageGainLoss = ((currentUSD / totalInvestment) - 1) * 100

    console.log(currentData, data, amount, urlData)
    console.log(dcaAmount, currentPriceDataLength, currentPriceBtc)
    return (
        <>
            <h1 className="text-center font-light text-xl">{`Results for $${displayDcaAmount} ${urlData.frequency} Dollar Cost Average into Bitcoin from ${dcaStartDay}-${dcaStartYear} to ${dcaEndDay}-${dcaEndYear}`}</h1>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex">
                    <p className="text-6xl text-orange-400 px-2 md:px-4 lg:px-1">₿</p>
                    <div className="flex flex-col ml-4">
                        <p className="font-bold text-2xl">{displayTotalSats}</p>
                        <p className="font-light">Total Satoshis</p>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex flex-col ml-4">
                        <p className="font-bold text-2xl">${displayCurrentValue}</p>
                        <p className="font-light">Current Value</p>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex">
                    {gainLoss > 0 ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                    }
 
                    <div className="flex flex-col ml-4">
                        <p className="font-bold text-2xl">{percentageGainLoss.toFixed(1)}%</p>
                        <p className="font-light">{`${gainLoss > 0 ? `$${displayAbsGainLoss} Gain` : `$${displayAbsGainLoss} Loss`}`}</p>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="flex flex-col ml-4">   
                        <p className="font-bold text-2xl">${displayTotalInvestment}</p>
                        <p className="font-light">Total Investment</p>
                    </div>
                </div>
            </div>
        </>
    )
}