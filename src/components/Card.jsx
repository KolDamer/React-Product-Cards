import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiResetLeftLine } from "react-icons/ri";



function Card ({name, image, upVotes, downVotes, voteUp, voteDown, cardReset}){

    return(
        <>
            <div className="items-center flex justify-center my-10 hover:scale-105 transition ease-in-out">
                <div className="shadow-md rounded-md pb-[40px] bg-white w-[250px]">
                    <img className="rounded-md object-cover w-[390px] h-[170px]" src={image} alt={name} />
               

                <div className="flex justify-between items-center">
                    <p className="pl-4 text-xl font-semibold pt-5">{name}</p>
                    <button onClick={cardReset} className="text-xl text-slate-400 hover:scale-105 transition ease-in-out pr-10"><RiResetLeftLine /></button>
                </div>

                <div className="flex items-center justify-around gap-4 px-4 ">
                    <div className="flex gap-2">
                        <p className="text-slate-400 text-[11px]">{upVotes} upVotes</p>
                        <p className="text-slate-400 text-[11px]">.</p>
                        <p className="text-slate-400 text-[11px]">{downVotes} downVotes</p>
                    </div>

                    <div className="flex gap-2">
                        <div onClick={voteUp} className="hover:bg-slate-200 hover:scale-105 border rounded-full w-[30px] h-[30px] text-center flex justify-center">
                            <button className=" text-xl " ><AiOutlineLike /></button>
                        </div>

                        <div onClick={voteDown} className="hover:bg-slate-200 hover:scale-105 transition ease-in-out border rounded-full w-[30px] h-[30px] text-center flex justify-center ">
                                <button className=" text-xl"><AiOutlineDislike /></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Card;