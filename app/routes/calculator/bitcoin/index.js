
import { redirect } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react"
import { useEffect, useState } from "react";
import BitcoinData from '../../../components/BitcoinData'

export const loader = async ({request, params}) => {

    // Grab data from URL to pass into API calls
    console.log(request)
    const url = new URL(request.url)
    console.log('url -> ' + url)
    const frequency = url.searchParams.get("frequency")
    console.log('frequency ->' + frequency)
    const amount = url.searchParams.get('amount')
    console.log('amount ->' + amount)
    const startDate = url.searchParams.get('startDate')
    console.log('start date ->' + startDate)
    const endDate = url.searchParams.get('endDate')
    console.log('end date ->' + endDate)

    // Create Object of data from URL to be passed into BitcoinData component to display data
    const urlData = {
        frequency: frequency,
        amount: amount,
        startDate: startDate,
        endDate: endDate
    }

    // Fetch recent bitcoin price to use for calculations in BitcoinData component
    const recentUrl = `https://global-market-data.p.rapidapi.com/crypto/recent_data?crypto=Bitcoin&interval=Daily`
    const recentOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY
        }
    };

    const fetchRecentData = async () => {
        const res = await fetch(recentUrl, recentOptions)
        const result = res.json()
        return result
    }
    const recentData = await fetchRecentData()


    // Fetch historical bitcoin data from requests and URL to use for calculations in BitcoinData component
    const newUrl = `https://global-market-data.p.rapidapi.com/crypto/historical_data?to_date=${endDate}&crypto=Bitcoin&from_date=${startDate}&interval=${frequency}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY
        }
    };

    const fetchData = async () => {
        const res = await fetch(newUrl, options)
        const result = res.json()
        return result
    }

    const data = await fetchData()
    
    // return all loader data to pass into BitcoinData component
    return {recentData, data, amount, urlData}
}


// get data from form and pass into redirect URL that feeds Loader function
export const action = async ({request}) => {
    const formData = await request.formData()
    const frequency = formData.get('frequency')
    const amount = formData.get('amount')
    const startDate = formData.get('startdate')
    const endDate = formData.get('enddate')
    return redirect(`/calculator/bitcoin?frequency=${frequency}&amount=${amount}&startDate=${startDate}&endDate=${endDate}`)
}



export default function Bitcoin() {
    const loaderData = useLoaderData()
    const currentData = loaderData.recentData
    const data = loaderData.data
    const amount = loaderData.amount
    const urlData = loaderData.urlData


    console.log(loaderData)

    const transition = useTransition()
    const btnText = 
    transition.state === "submitting"
    ? "Loading..."
    : transition.state === 'loading'
    ? "Loading..."
    : "Calculate"; 

    return (
        <div className="grid grid-cols-1 w-11/12 mx-auto gap-4">
            <div className="pt-10">
                <h1 className="text-neutral-700 font-bold text-2xl text-center">Bitcoin DCA Calculator</h1>
            </div>

            <BitcoinData 
                currentData={currentData}
                data={data}
                amount={amount}
                urlData={urlData}
            />
            
            {/* <Outlet /> */}
            <Form  method="post" className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col mb-6">
                <div className="mb-4 flex flex-col">
                    <label className="mb-2 font-semibold" >Frequency</label>
                    <select name="frequency" id="frequency" className="rounded px-2 py-1 text-black border border-neutral-200" id="">
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                    
                </div>
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">Amount</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="amount" id="amount" />
                </div>   
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">Start Date (yyyy-dd-mm)</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="startdate" id="startdate"/>
                </div>
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">End Date (yyyy-dd-mm)</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="enddate" id="enddate"/>
                </div>
                <div>
                  <input type="hidden" name="asset" value="Bitcoin"/>
                </div>
                     
                <button 
                    type="submit" 
                    className="bg-neutral-400 border border-neutral-400 p-2 text-center text-white font-bold rounded-lg hover:bg-white hover:text-black  hover:ease-in-out hover: duration-300">
                        {btnText}
                </button>
            </Form>
            
            
        </div>
    )
}