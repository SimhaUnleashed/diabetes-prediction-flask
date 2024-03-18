import React, { useState } from 'react';
import app from '../config/axiosConfig'

const Homepage = () => {
    const [age, setAge] = useState("")
    const [pregnancies, setPregnancies] = useState("")
    const [glucose, setGlucose] = useState("")
    const [bp, setBp] = useState("")
    const [insulin, setInsulin] = useState("")
    const [diabetesPedigree, setDiabetesPedigree] = useState("")
    const [bmi, setBmi] = useState("")
    const [isSet, setisSet] = useState(false);
    const [isDiabetic, setisDiabetic] = useState(false);
   

    const handleSubmit = async (e) => {
        
            e.preventDefault();
            try {
              const res = await app.get(`/predict?pregnancies=${pregnancies}&glucose=${glucose}&bp=${bp}&insulin=${insulin}&bmi=${bmi}&dpf=${diabetesPedigree}&age=${age}`);
              if(res.data.diabetic==="0") {setisDiabetic(false)}
              else {setisDiabetic(true)}
              setisSet(true);
              console.log(res.data.diabetic);
              
            } catch (err) {
              console.log(err);
            }
           
          
    }
  return (
    <div className='homepage'>
        <div className="min-w-screen min-h-[90vh]  flex items-center justify-center md:mb-[2rem] sm:mb-[5rem]">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:"1000px"}}>
        <div className="md:flex w-full h-full">
            <div className="sm:w-100 md:block md:w-1/2 bg-green-700 px-10 py-10">
                
                
                <h1 className=" sm:text-4xl md:text-6xl text-white">Diabetes Prediction</h1>
                <p className='font-thin  md:text-2xl text-white'>using machine learning</p>
                <p className='font-thin  md:text-1xl text-white'>(upto 84% accuracy)</p>
               
                    
               
               
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">DATA POINTS</h1>
                    <p>Enter the data required for prediction</p>
                </div>
                <div>
                <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Age</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" onChange={(e)=>{setAge(e.target.value); setisSet(false)}}/>
                            </div>
                        </div>
                        </div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Pregnancies</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" 
                                onChange={(e)=>{setPregnancies(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Glucose</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" onChange={(e)=>{setGlucose(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Blood Pressure</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" onChange={(e)=>{setBp(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Insulin </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-600" onChange={(e)=>{setInsulin(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Diabetes Pedigree (0.1-2.2)</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" onChange={(e)=>{setDiabetesPedigree(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">BMI</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required type="number" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" onChange={(e)=>{setBmi(e.target.value);setisSet(false)}}/>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            {isSet ? (
                                isDiabetic?(
                                    <div className="w-full bg-purple-700 max-w-xs mx-auto focus:bg-green-800 text-white rounded-lg font-semibold flex justify-center px-3 py-3" >Patient is diabetic</div>
                                ):(
                                    <h1 className="flex justify-center w-full max-w-xs mx-auto bg-emerald-900 = focus:bg-green-800 text-white rounded-lg px-3 py-3 font-semibold" >Patient is not diabetic</h1>
                                )
                                
                            ): (
                                <button className="block w-full max-w-xs mx-auto bg-green-700 hover:bg-green-800 focus:bg-green-800 text-white rounded-lg px-3 py-3 font-semibold" onClick={handleSubmit}>PREDICT RESULT</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Homepage