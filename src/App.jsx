import { useState } from "react"
import Card from "./components/Card"
import TopSection from "./components/TopSection";
import VotingResults from "./components/VotingResults";


function App() {

  const carBrands=[
    {
      name: 'BMW',
      image: './bmw.jpg'
    },
    {
      name: 'Range Rover',
      image: './range.jpg'
    },
    {
      name: 'Rolls-Royce',
      image: './rolls-royce.jpg'
    },
    {
      name: 'Lamborghini-Urus',
      image: './lambo.jpg'
    },
  ]

  const [votablecarBrands, setvotablecarBrands]=useState(
    
      carBrands.map((carBrand)=>(

        {
          ...carBrand,
          upVotes: 0,
          downVotes: 0
        }
      ))
    
  )

  const[voteCount, setvoteCount]=useState(
    {
      totalupVotes: 0,
      totaldownVotes:0,
      totalvotesCasted:0
    }
  )

  const handleupVotes =(index)=>{
    setvotablecarBrands((prev)=>(prev.map((votablecarBrand, i)=>(index===i?{...votablecarBrand, upVotes: votablecarBrand.upVotes+1}: votablecarBrand))))
    setvoteCount((prev)=>({totalupVotes: prev.totalupVotes+1, totaldownVotes: prev.totaldownVotes, totalvotesCasted: prev.totalvotesCasted+1}))
  }
  const handledownVotes =(index)=>{
    setvotablecarBrands((prev)=>(prev.map((votablecarBrand,i)=>(index===i?{...votablecarBrand, downVotes:votablecarBrand.downVotes+1}: votablecarBrand))))
    setvoteCount((prev)=>({totalupVotes: prev.totalupVotes, totaldownVotes: prev.totaldownVotes+1, totalvotesCasted: prev.totalvotesCasted+1}))
  }
  const handlehardReset=()=>{
    setvotablecarBrands((prev)=>(prev.map((votablecarBrand)=>({...votablecarBrand, upVotes:0, downVotes:0}))))
    setvoteCount((prev)=>({totalupVotes:0, totaldownVotes:0, totalvotesCasted:0}))
  }
  const handlecardReset=(index, votablecarBrand)=>{
    setvotablecarBrands((prev)=>(prev.map((votablecarBrand,i)=>(index===i?{...votablecarBrand, upVotes:0, downVotes:0}: votablecarBrand))))
    setvoteCount((prev)=>({totalupVotes: prev.totalupVotes-votablecarBrand.upVotes, totaldownVotes:prev.totaldownVotes-votablecarBrand.downVotes, totalvotesCasted:prev.totalvotesCasted-(votablecarBrand.downVotes+votablecarBrand.upVotes)}))
  }


  return (
    <>
    <div className="mx-auto w-6xl my-4 flex flex-col gap-7">
          <header className=" w-full flex justify-between bg-slate-100 rounded-2xl px-7 py-5 items-center">
              <TopSection
                profilepic={'./k.ko portrait.png'}
              />
          </header>

          <section>

                  <div className="bg-slate-100 py-7 px-7 rounded-2xl flex flex-col gap-6">
                    <h1 className="text-center font-bold text-xl">Voting Overview</h1>
                    <div className="min-h-40 flex justify-around">
                      <div className=" border-black border-2 rounded-2xl w-1/5 py-4 ">
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-white px-2 py-2 rounded-full">
                                    <img src="total.png" alt="total" />
                                </div>
                                <h1 className="text-2xl font-semibold">Total votes</h1>                               
                              </div>
                            <h1 className="text-6xl font-black text-center">{voteCount.totalvotesCasted}</h1>
                      </div>
                      <div className=" border-black border-2 rounded-2xl w-1/5 py-4 ">
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-white px-2 py-2 rounded-full">
                                    <img src="up.png" alt="total" />
                                </div>
                                <h1 className="text-2xl font-semibold">Up Votes</h1>                               
                              </div>
                            <h1 className="text-6xl font-black text-center">{voteCount.totalupVotes}</h1>
                      </div>
                      <div className=" border-black border-2 rounded-2xl w-1/5 py-4 ">
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-white px-2 py-2 rounded-full">
                                    <img src="down.png" alt="total" />
                                </div>
                                <h1 className="text-2xl font-semibold">Down Votes</h1>                               
                              </div>
                            <h1 className="text-6xl font-black text-center">{voteCount.totaldownVotes}</h1>
                      </div>
                    </div>

                  </div>

          </section>


          <main className="bg-slate-100 py-7 px-7 rounded-2xl ">

                <h1 className="text-center font-bold text-xl">Vote For Your Favorite Car Brand</h1>

                <div className="flex justify-between mt-8 font-bold text-slate-600">
                    <p>Total Votes Casted [{voteCount.totalvotesCasted}]</p>
                    <p>Total upVotes 👍 [{voteCount.totalupVotes}]</p>
                    <p>Total downVotes 👎 [{voteCount.totaldownVotes}]</p>
                </div>

                <div className="flex gap-7 ">
                      {votablecarBrands.map((votablecarBrand, index)=>(
                        <Card
                        key={index}
                          name={votablecarBrand.name}
                          image={votablecarBrand.image}
                          upVotes={votablecarBrand.upVotes}
                          downVotes={votablecarBrand.downVotes}
                          voteUp={()=>handleupVotes(index)}
                          voteDown={()=>handledownVotes(index)}
                          cardReset={()=>handlecardReset(index, votablecarBrand)}
                          

                        />
                      ))
                      }
                </div>
                  <div className="text-center">
                        <button onClick={handlehardReset} className="bg-black text-white px-7 py-3 rounded-md hover:scale-105 hover:bg-slate-900 transition ease-in-out">
                          Hard Reset
                        </button>
                </div>
          </main>


          <footer className="bg-slate-100 rounded-2xl py-9 px-7 ">
                    <h1 className="text-xl font-bold text-center ">RESULTS</h1>
                    <div className="pt-5 mx-auto w-1/2">
                      {
                          [...votablecarBrands].sort((a,b)=>((b.upVotes-b.downVotes)-(a.upVotes-a.downVotes)))
                          .map((votablecarBrand,index)=>
                          <VotingResults 
                              key={index}
                              name={votablecarBrand.name}
                              netVotes={votablecarBrand.upVotes-votablecarBrand.downVotes}
                          />
                        )
                      }
                    </div>
          </footer>
     </div>
    </>
  )
}

export default App
